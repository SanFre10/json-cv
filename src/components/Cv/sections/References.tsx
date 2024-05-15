import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function References({ references }: { references: CV['references'] }) {
	return (
		<CvSection>
			<h2>References</h2>
			<div>
				<p>Name: {references[0].name}</p>
				<p>Reference: {references[0].reference}</p>
			</div>
		</CvSection>
	);
}
