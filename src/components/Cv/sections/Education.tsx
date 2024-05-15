import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Education({ education }: { education: CV['education'] }) {
	return (
		<CvSection>
			<h2>Education</h2>
			<div>
				<p>Institution: {education[0].institution}</p>
				<p>Area: {education[0].area}</p>
				<p>Study Type: {education[0].studyType}</p>
				<p>Score: {education[0].score}</p>
				<p>Courses:</p>
				<ul>
					<li>{education[0].courses[0]}</li>
				</ul>
			</div>
		</CvSection>
	);
}
