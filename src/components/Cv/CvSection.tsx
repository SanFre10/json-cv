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
		<section className={`pr-10 pl-10 pb-5 ${className}`}>
			{title && <h2 className="text-xl text-secondary print:text-black font-bold">{title}</h2>}
			{children}
		</section>
	);
}
