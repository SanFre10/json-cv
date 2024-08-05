import React from 'react';

export default function CvSection({
	children,
	className = '',
}: Readonly<{
	children: React.ReactNode;
	className?: string;
}>) {
	return <section className={`mb-5 ${className}`}>{children}</section>;
}
