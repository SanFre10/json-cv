import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Skills({ skills }: { skills: CV['skills'] }) {
	return (
		<CvSection title="Skills">
			{skills &&
				skills.map(({ name, keywords, level }, index) => (
					<Article key={index} title={`${name} - ${level}`} highlights={keywords} highlightsType="tags" />
				))}
		</CvSection>
	);
}
