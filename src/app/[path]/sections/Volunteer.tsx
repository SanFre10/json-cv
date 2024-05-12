import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Volunteer Experience</h2>
			<div>
				<p>Organization: {cv.volunteer[0].organization}</p>
				<p>Position: {cv.volunteer[0].position}</p>
				<p>Summary: {cv.volunteer[0].summary}</p>
				<p>Highlights:</p>
				<ul>
					<li>{cv.volunteer[0].highlights[0]}</li>
				</ul>
			</div>
		</CvSection>
	);
}
