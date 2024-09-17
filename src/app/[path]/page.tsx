import Cv from '@/components/Cv/Cv';
import ModalEdit from '@/components/ModalEdit';
import PrintBtn from '@/components/PrintBtn';
import { CvService } from '@/services/cv.service';

export default async function page({ params: { path } }: { params: { path: string } }) {
	const cv = await CvService.getCvModel(path!);
	return (
		<>
			{cv !== null ? (
				<>
					<header className="justify-end flex m-5 print:hidden">
						<PrintBtn />
						<ModalEdit path={cv.path} passphrase={cv.passphrase} />
					</header>
					<main className="p-5 flex justify-center">{<Cv cv={cv.data} locale={cv.locale} theme={cv.theme}></Cv>}</main>
				</>
			) : (
				<main className="p-5 flex justify-center">
					<p>CV not found</p>
				</main>
			)}
		</>
	);
}
