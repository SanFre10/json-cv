import Cv from "@/components/Cv/Cv";
import { CV } from "@/types/cv";
import { Theme } from "@/types/cvModel";
import { Locales } from "@/utils/locale/locale";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

interface ChildProps {
  cvData: CV;
  setCvData: React.Dispatch<React.SetStateAction<CV>>;
  locale: Locales;
  setLocale: React.Dispatch<React.SetStateAction<Locales>>;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  textareaValue: string;
  setTextareaValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function NewCv({
  cvData,
  setCvData,
  locale,
  setLocale,
  theme,
  setTheme,
  textareaValue,
  setTextareaValue,
}: ChildProps) {
  const searchParams = useSearchParams();

  const editPath = useRef<string | null>(null);
  const editPassphrase = useRef<string | null>(null);

  const handleModalSave = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    const path =
      editPath?.current ||
      (document.querySelector('input[name="path"]') as HTMLInputElement).value;
    const passphrase =
      editPassphrase?.current ||
      (document.querySelector('input[name="passphrase"]') as HTMLInputElement)
        .value;
    const isPrivate = (
      document.querySelector('input[name="isPrivate"]') as HTMLInputElement
    ).checked;
    const data = cvData;

    fetch("/api/cv", {
      method: "POST",
      body: JSON.stringify({
        path,
        passphrase,
        data,
        locale,
        theme,
        isPrivate,
      }),
    }).then((res) => {
      if (res.ok) {
        (document.getElementById("saveModal") as HTMLFormElement).close();
      }
    });
  };

  useEffect(() => {
    if (searchParams) {
      editPath.current = searchParams.get("path");
      editPassphrase.current = searchParams.get("passphrase");
      if (editPath.current && editPassphrase.current) {
        fetch(
          `/api/cv?path=${editPath.current}&passphrase=${editPassphrase.current}`,
        ).then(async (res) => {
          if (res.ok) {
            const data = await res.json();
            setCvData(data.cv);
            setTextareaValue(JSON.stringify(data.cv, null, 2));
            setLocale(data.locale);
            setTheme(data.theme);
          }
        });
      }
    }
  }, [searchParams, setCvData, setTextareaValue, setLocale, setTheme]);

  return (
    <>
      <div className="w-2/3 mr-5 justify-center overflow-auto">
        {searchParams &&
        searchParams.get("path") &&
        searchParams.get("passphrase") &&
        !editPath.current &&
        !editPassphrase.current ? (
          <div className="skeleton h-full w-full"></div>
        ) : (
          <Cv cv={cvData} locale={locale} theme={theme} />
        )}
      </div>
      <dialog id="saveModal" className="modal">
        <div className="modal-box">
          {!editPath.current && !editPassphrase.current && (
            <>
              <input
                type="text"
                name="path"
                placeholder="Path"
                className="input w-full max-w-xs"
                defaultValue={editPath.current || ""}
              />
              <input
                type="text"
                name="passphrase"
                placeholder="Passphrase"
                className="input w-full max-w-xs"
                defaultValue={editPassphrase.current || ""}
              />
            </>
          )}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text">Private</span>
              <input type="checkbox" name="isPrivate" className="toggle" />
            </label>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button onClick={handleModalSave} className="btn btn-success">
                Save
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
