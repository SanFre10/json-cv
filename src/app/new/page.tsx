'use client';

import React, { useState } from 'react';
import Cv from '@/components/Cv/Cv';
import { CV } from '@/types/cv';

import { cvSchema } from '@/schemas/cvSchema';

import jonhdoe from '@/jonhdoe.json';
import empty from '@/empty.json';

export default function Page() {
	const [cvData, setCvData] = useState(empty as CV);
	const [textareaValue, setTextareaValue] = useState(JSON.stringify(empty, null, 2));
	const [error, setError] = useState('');

	const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = event.target.value;
		setTextareaValue(newValue);
		try {
			const parsedData = JSON.parse(newValue);
			cvSchema.parse(parsedData); //zod validation
			setCvData(parsedData);
			setError('');
		} catch (error) {
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
			body: JSON.stringify({ path, passphrase, data }),
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

	return (
		<>
			<main className="flex h-screen">
				<div className="flex-1 m-10 rounded-lg">
					<Cv cv={cvData} />
				</div>
				<div className="flex-1 m-10">
					<button onClick={handleResetClick} className="btn btn-warning">
						Reset
					</button>
					<h3>{error}</h3>
					<textarea
						className={`w-full h-full p-10 rounded-lg border focus:outline-none ${error ? 'border-red-700' : ''}`}
						spellCheck={false}
						placeholder="Enter your text here"
						value={textareaValue}
						onChange={handleTextareaChange}
					/>
				</div>
				<button onClick={handleSaveClick} className="btn btn-success absolute right-0 bottom-0">
					Save
				</button>
			</main>
			<dialog id="saveModal" className="modal">
				<div className="modal-box">
					<h3 className="font-bold text-lg">Hello!</h3>
					<input type="text" name="path" placeholder="Path" className="input w-full max-w-xs" />
					<input type="text" name="passphrase" placeholder="Passphrase" className="input w-full max-w-xs" />
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
