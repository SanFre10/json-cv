import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Projects({ projects }: { projects: CV['projects'] }) {
	return (
		<CvSection>
			<h2>Projects</h2>
			<div>
				<p>Name: {projects[0].name}</p>
				<p>Start Date: {projects[0].startDate}</p>
				<p>End Date: {projects[0].endDate}</p>
				<p>Description: {projects[0].description}</p>
				<p>Highlights:</p>
				<ul>
					<li>{projects[0].highlights[0]}</li>
				</ul>
				<p>
					<a href={projects[0].url}>Project Link</a>
				</p>
			</div>
		</CvSection>
	);
}
