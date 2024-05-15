import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Publications({ publications }: { publications: CV['publications'] }) {
	return (
		<CvSection>
			<h2>Publications</h2>
			<div>
				<p>Title: {publications[0].name}</p>
				<p>Publisher: {publications[0].publisher}</p>
				<p>Release Date: {publications[0].releaseDate}</p>
				<p>Website: {publications[0].url}</p>
				<p>Summary: {publications[0].summary}</p>
			</div>
		</CvSection>
	);
}
