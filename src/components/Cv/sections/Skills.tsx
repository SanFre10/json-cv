import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Skills({ skills }: { skills: CV['skills'] }) {
	return (
		<CvSection>
			<h2>Skills</h2>
			<div>
				<p>Name: {skills[0].name}</p>
				<p>Level: {skills[0].level}</p>
				<p>Keywords: {skills[0].keywords.join(', ')}</p>
			</div>
		</CvSection>
	);
}
