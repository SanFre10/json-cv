import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>References</h2>
			<div>
				<p>Name: {cv.references[0].name}</p>
				<p>Reference: {cv.references[0].reference}</p>
			</div>
		</CvSection>
	);
}
