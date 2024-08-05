import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Interests({ interests }: { interests: CV['interests'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Interests</h2>

			{interests && interests.map(({ name, keywords }, index) => <Article key={index} title={`${name}`} highlights={keywords} />)}
		</CvSection>
	);
}
