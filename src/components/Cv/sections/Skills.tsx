import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Skills({ skills }: { skills: CV['skills'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Skills</h2>

			{skills &&
				skills.map(({ name, keywords, level }, index) => (
					<Article key={index} title={`${name} - ${level}`} highlights={keywords} highlightsType="tags" />
				))}
		</CvSection>
	);
}
