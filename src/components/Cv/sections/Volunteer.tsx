import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Volunteer({ volunteer }: { volunteer: CV['volunteer'] }) {
	return (
		<CvSection>
			<h2>Volunteer Experience</h2>
			<div>
				<p>Organization: {volunteer[0].organization}</p>
				<p>Position: {volunteer[0].position}</p>
				<p>Summary: {volunteer[0].summary}</p>
				<p>Highlights:</p>
				<ul>
					<li>{volunteer[0].highlights[0]}</li>
				</ul>
			</div>
		</CvSection>
	);
}
