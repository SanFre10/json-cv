import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Languages</h2>
			<div>
				<p>Language: {cv.languages[0].language}</p>
				<p>Fluency: {cv.languages[0].fluency}</p>
			</div>
		</CvSection>
	);
}
