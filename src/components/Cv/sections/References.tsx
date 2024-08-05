import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function References({ references }: { references: CV['references'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">References</h2>

			{references && references.map(({ name, reference }, index) => <Article key={index} title={name} description={reference} />)}
		</CvSection>
	);
}
