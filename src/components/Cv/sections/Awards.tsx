import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Awards({ awards }: { awards: CV['awards'] }) {
	return (
		<CvSection>
			<h2>Awards</h2>
			<div>
				<p>Title: {awards[0].title}</p>
				<p>Date: {awards[0].date}</p>
				<p>Awarder: {awards[0].awarder}</p>
				<p>Summary: {awards[0].summary}</p>
			</div>
		</CvSection>
	);
}
