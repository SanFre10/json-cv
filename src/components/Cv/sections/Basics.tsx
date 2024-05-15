import React from 'react';
import CvSection from './CvSection';
import { type CV } from '@/types/cv.d';

export default function Basics({ basics }: { basics: CV['basics'] }) {
	return (
		<CvSection>
			<h2>{basics.name}</h2>
			<p className="label">{basics.label}</p>
			<p>Email: {basics.email}</p>
			<p>Phone: {basics.phone}</p>
			<p>
				Location: {basics.location.city}, {basics.location.region}
			</p>
			<p>Summary: {basics.summary}</p>
			<ul>
				<li>
					{basics.profiles[0].network}: <a href={basics.profiles[0].url}>{basics.profiles[0].username}</a>
				</li>
			</ul>
		</CvSection>
	);
}
