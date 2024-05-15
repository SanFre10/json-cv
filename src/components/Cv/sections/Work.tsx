import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Work({ work }: { work: CV['work'] }) {
	return (
		<CvSection>
			<h2>Work Experience</h2>
			<div>
				<p>Company: {work[0].name}</p>
				<p>Position: {work[0].position}</p>
				<p>Summary: {work[0].summary}</p>
				<p>Highlights:</p>
				<ul>
					<li>{work[0].highlights[0]}</li>
				</ul>
			</div>
		</CvSection>
	);
}
