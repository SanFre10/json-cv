import React from 'react';

export default function CvSection({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className="mb-5">{children}</section>;
}
