import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Projects</h2>
			<div>
				<p>Name: {cv.projects[0].name}</p>
				<p>Start Date: {cv.projects[0].startDate}</p>
				<p>End Date: {cv.projects[0].endDate}</p>
				<p>Description: {cv.projects[0].description}</p>
				<p>Highlights:</p>
				<ul>
					<li>{cv.projects[0].highlights[0]}</li>
				</ul>
				<p>
					<a href={cv.projects[0].url}>Project Link</a>
				</p>
			</div>
		</CvSection>
	);
}
