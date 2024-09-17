'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Cv from '@/components/Cv/Cv';
import { CV } from '@/types/cv';
import { cvSchema } from '@/schemas/cvSchema';

import jonhdoe from '@/jonhdoe.json';
import empty from '@/empty.json';
import { Locales } from '@/utils/locale/locale';
import { Theme } from '@/types/cvModel';

export default function Page() {
	const [cvData, setCvData] = useState(empty as CV);
	const [locale, setLocale] = useState('es' as Locales);
	const [theme, setTheme] = useState('cvThemeLight' as Theme);
	const [textareaValue, setTextareaValue] = useState(JSON.stringify(empty, null, 2));
	const [error, setError] = useState('');

	const searchParams = useSearchParams();

	const editPath = useRef<string | null>(null);
	const editPassphrase = useRef<string | null>(null);

	const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		setTextareaValue(newValue);
		try {
			const parsedData = JSON.parse(newValue);
			cvSchema.parse(parsedData); //zod validation
			setCvData(parsedData);
			setError('');
		} catch (error: any) {
			console.error('Invalid JSON');
			setError(error.message);
		}
	};

	const handleSaveClick = () => {
		if (error) return;
		(document.getElementById('saveModal') as HTMLFormElement).showModal();
	};

	const handleModalSave = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		const path = (document.querySelector('input[name="path"]') as HTMLInputElement).value;
		const passphrase = (document.querySelector('input[name="passphrase"]') as HTMLInputElement).value;
		const data = cvData;

		fetch('/api/cv', {
			method: 'POST',
			body: JSON.stringify({ path, passphrase, data, locale, theme }),
		}).then((res) => {
			if (res.ok) {
				(document.getElementById('saveModal') as HTMLFormElement).close();
			}
		});
	};

	const handleResetClick = () => {
		setTextareaValue(JSON.stringify(empty, null, 2));
		setCvData(empty);
	};

	const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setTheme(event.target.value as Theme);
	};

	const handleLocaleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLocale(event.target.value as Locales);
	};

	useEffect(() => {
		if (searchParams) {
			editPath.current = searchParams.get('path');
			editPassphrase.current = searchParams.get('passphrase');
			if (editPath.current && editPassphrase.current) {
				fetch(`/api/cv?path=${editPath.current}&passphrase=${editPassphrase.current}`).then(async (res) => {
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
	}, [searchParams]);

	return (
		<>
			<main className="flex h-screen p-10">
				<div className="w-2/3 mr-5 justify-center overflow-auto">
					{searchParams && searchParams.get('path') && searchParams.get('passphrase') && !editPath.current && !editPassphrase.current ? (
						<div className="skeleton h-full w-full"></div>
					) : (
						<Cv cv={cvData} locale={locale} theme={theme} />
					)}
				</div>
				<div className="w-1/3 h-full">
					<div className="flex gap-1">
						<select onChange={handleLocaleChange} className="select">
							<option value="en" selected={locale === 'en'}>
								en
							</option>
							<option value="es" selected={locale === 'es'}>
								es
							</option>
						</select>
						<select onChange={handleThemeChange} className="select">
							<option value="cvThemeLight" selected={theme === 'cvThemeLight'}>
								Light
							</option>
							<option value="cvThemeDark" selected={theme === 'cvThemeDark'}>
								Dark
							</option>
						</select>
						<button onClick={handleResetClick} className="btn btn-warning">
							Reset
						</button>
						<button onClick={handleSaveClick} className="btn btn-success">
							Save
						</button>
					</div>
					<h3>{error}</h3>
					<textarea
						className={`textarea resize-none w-full h-5/6 p-10 rounded-lg focus:outline-none ${error ? 'border-red-700' : ''}`}
						spellCheck={false}
						placeholder="Enter your text here"
						value={textareaValue}
						onChange={handleTextareaChange}
					/>
				</div>
			</main>
			<dialog id="saveModal" className="modal">
				<div className="modal-box">
					<input type="text" name="path" placeholder="Path" className="input w-full max-w-xs" defaultValue={editPath.current || ''} />
					<input
						type="text"
						name="passphrase"
						placeholder="Passphrase"
						className="input w-full max-w-xs"
						defaultValue={editPassphrase.current || ''}
					/>
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
