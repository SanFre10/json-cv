import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Skills</h2>
			<div>
				<p>Name: {cv.skills[0].name}</p>
				<p>Level: {cv.skills[0].level}</p>
				<p>Keywords: {cv.skills[0].keywords.join(', ')}</p>
			</div>
		</CvSection>
	);
}
