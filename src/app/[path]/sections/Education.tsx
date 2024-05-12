import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Education</h2>
			<div>
				<p>Institution: {cv.education[0].institution}</p>
				<p>Area: {cv.education[0].area}</p>
				<p>Study Type: {cv.education[0].studyType}</p>
				<p>Score: {cv.education[0].score}</p>
				<p>Courses:</p>
				<ul>
					<li>{cv.education[0].courses[0]}</li>
				</ul>
			</div>
		</CvSection>
	);
}
