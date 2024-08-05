import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function languages({ languages }: { languages: CV['languages'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Languages</h2>

			{languages && languages.map(({ fluency, language }, index) => <Article key={index} title={`${language} - ${fluency}`} />)}
		</CvSection>
	);
}
