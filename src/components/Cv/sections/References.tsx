import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function References({ references }: { references: CV['references'] }) {
	return (
		<CvSection title="References">
			{references && references.map(({ name, reference }, index) => <Article key={index} title={name} description={reference} />)}
		</CvSection>
	);
}
