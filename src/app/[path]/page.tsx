import { type CV } from '@/cv.d';

import { mongoClient } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

import Basics from './sections/Basics';
import Work from './sections/Work';
import Volunteer from './sections/Volunteer';
import Education from './sections/Education';
import Awards from './sections/Awards';
import Certificates from './sections/Certificates';
import Publications from './sections/Publications';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Interests from './sections/Interests';
import References from './sections/References';
import Projects from './sections/Projects';

interface CvDto {
	_id: ObjectId;
	path: string;
	data: CV;
}

export default async function page({ params: { path } }: { params: { path: number } }) {
	const client = await mongoClient;
	const db = client.db('database');

	const data = (await db.collection('cv').findOne({ path: path })) as CvDto;
	const cv = data.data;

	return (
		<div>
			<Basics cv={cv}></Basics>
			<Work cv={cv}></Work>
			<Volunteer cv={cv}></Volunteer>
			<Education cv={cv}></Education>
			<Awards cv={cv}></Awards>
			<Certificates cv={cv}></Certificates>
			<Publications cv={cv}></Publications>
			<Skills cv={cv}></Skills>
			<Languages cv={cv}></Languages>
			<Interests cv={cv}></Interests>
			<References cv={cv}></References>
			<Projects cv={cv}></Projects>
		</div>
	);
}
