'use client';

import { cvModel } from '@/types/cvModel';
import { useState, useEffect } from 'react';

export default function SearchCVs() {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState([] as cvModel[]);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			if (searchTerm) {
				fetch(`/api/cv/search?path=${searchTerm}`)
					.then((res) => res.json())
					.then((data) => setResults(data.cvs));
			} else {
				setResults([]);
			}
		}, 100);

		return () => clearTimeout(timeoutId);
	}, [searchTerm]);

	return (
		<div className="relative w-96 mt-5">
			<input
				type="text"
				placeholder="Search CVs by name..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setTimeout(() => setIsFocused(false), 100)} //TODO: Fix this to prevent the menu from closing when clicking on items
				className="input input-bordered w-full input-white"
			/>

			{isFocused && (
				<ul className="menu bg-base-200 absolute top-12 left-0 right-0 z-10 shadow-lg rounded-box max-h-60 overflow-y-auto">
					{results.length > 0 ? (
						results.map((cv) => (
							<li key={cv.path}>
								<a href={`/${cv.path}`} className="truncate">
									{cv.path}
								</a>
							</li>
						))
					) : (
						<>
							<li>
								<a href="/santiago.frega" className="truncate">
									Santiago Frega
								</a>
							</li>
							<li>
								<a href="/jonhdoe" className="truncate">
									JonhDoe
								</a>
							</li>
						</>
					)}
				</ul>
			)}
		</div>
	);
}
