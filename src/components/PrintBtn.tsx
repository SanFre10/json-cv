'use client';
export default function PrintBtn() {
	const handlePrintClick = () => {
		window.print();
	};
	return (
		<button className="btn" onClick={handlePrintClick}>
			Print
		</button>
	);
}
