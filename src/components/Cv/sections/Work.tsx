import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Work({ work }: { work: CV['work'] }) {
	return (
		<CvSection>
			<h2 className="text-3xl text-primary font-bold">Work Experience</h2>

			{work &&
				work.map(({ name, position, summary, highlights, url, startDate, endDate }, index) => (
					<article key={index}>
						<h3>{name}</h3>
						<p>Position: {position}</p>
						<p>Summary: {summary}</p>

						{highlights && (
							<ul>
								<li>{highlights[0]}</li>
							</ul>
						)}
					</article>
				))}
		</CvSection>
	);
}
