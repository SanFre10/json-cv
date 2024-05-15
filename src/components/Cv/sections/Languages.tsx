import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Languages({ languages }: { languages: CV['languages'] }) {
	return (
		<CvSection>
			<h2>Languages</h2>
			<div>
				<p>Language: {languages[0].language}</p>
				<p>Fluency: {languages[0].fluency}</p>
			</div>
		</CvSection>
	);
}
