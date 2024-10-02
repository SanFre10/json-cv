'use client';
export default function PrintBtn() {
	const handlePrintClick = () => {
		window.print();
	};
	return (
		<button className="btn join-item" onClick={handlePrintClick}>
			Print
		</button>
	);
}
