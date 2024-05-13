import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Awards</h2>
			<div>
				<p>Title: {cv.awards[0].title}</p>
				<p>Date: {cv.awards[0].date}</p>
				<p>Awarder: {cv.awards[0].awarder}</p>
				<p>Summary: {cv.awards[0].summary}</p>
			</div>
		</CvSection>
	);
}
