'use client';
export default function PrintBtn() {
	const handlePrintClick = () => {
		window.print();
	};
	return (
		<button className="bg-red" onClick={handlePrintClick}>
			Print
		</button>
	);
}
