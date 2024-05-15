import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Interests({ interests }: { interests: CV['interests'] }) {
	return (
		<CvSection>
			<h2>Interests</h2>
			<div>
				<p>Name: {interests[0].name}</p>
				<p>Keywords: {interests[0].keywords.join(', ')}</p>
			</div>
		</CvSection>
	);
}
