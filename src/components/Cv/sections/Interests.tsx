import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Interests({ interests }: { interests: CV['interests'] }) {
	return (
		<CvSection title="Interests">
			{interests && interests.map(({ name, keywords }, index) => <Article key={index} title={`${name}`} highlights={keywords} />)}
		</CvSection>
	);
}
