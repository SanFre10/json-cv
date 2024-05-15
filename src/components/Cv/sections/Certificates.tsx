import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Certificates({ certificates }: { certificates: CV['certificates'] }) {
	return (
		<CvSection>
			<h2>Certificates</h2>
			<div>
				<p>Name: {certificates[0].name}</p>
				<p>Date: {certificates[0].date}</p>
				<p>Issuer: {certificates[0].issuer}</p>
				<p>
					<a href={certificates[0].url}>Certificate Link</a>
				</p>
			</div>
		</CvSection>
	);
}
