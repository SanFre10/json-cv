'use client';

import { useState } from 'react';

const CopyJsonButton = ({ data }: { data: string }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(data);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};

	return (
		<button onClick={handleCopy} className="btn join-item">
			{copied ? 'Copied!' : 'Copy JSON'}
		</button>
	);
};

export default CopyJsonButton;
