import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Basics({ cv }: { cv: CV }) {
	return (
		<CvSection>
			<h2>Certificates</h2>
			<div>
				<p>Name: {cv.certificates[0].name}</p>
				<p>Date: {cv.certificates[0].date}</p>
				<p>Issuer: {cv.certificates[0].issuer}</p>
				<p>
					<a href="{cv.certificates[0].url}">Certificate Link</a>
				</p>
			</div>
		</CvSection>
	);
}
