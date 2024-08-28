'use client';

export default function ModalEdit({ path, passphrase }: { path: string; passphrase: string }) {
	const handleModalEdit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		const enteredPassphrase = (document.querySelector('input[name="passphrase"]') as HTMLInputElement).value;

		if (enteredPassphrase !== passphrase) return;

		window.location.href = `/new?path=${path}&passphrase=${enteredPassphrase}`;
	};
	const handleEditClick = () => {
		(document.getElementById('editModal') as HTMLFormElement).showModal();
	};
	return (
		<>
			<button className="btn" onClick={handleEditClick}>
				Edit
			</button>
			<dialog id="editModal" className="modal">
				<div className="modal-box">
					<input type="text" name="passphrase" placeholder="Passphrase" className="input w-full max-w-xs" />
					<div className="modal-action">
						<form method="dialog">
							<button onClick={handleModalEdit} className="btn btn-success">
								Edit
							</button>
							<button className="btn">Close</button>
						</form>
					</div>
				</div>
			</dialog>
		</>
	);
}
