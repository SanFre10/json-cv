import React from 'react';

export default function CvSection({
	children,
	className = '',
	title,
}: Readonly<{
	children: React.ReactNode;
	className?: string;
	title?: string;
}>) {
	return (
		<section className={`p-10 ${className}`}>
			{title && <h2 className="text-2xl text-secondary print:text-black font-bold">{title}</h2>}
			{children}
		</section>
	);
}
