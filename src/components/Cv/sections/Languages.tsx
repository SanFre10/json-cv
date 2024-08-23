import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function languages({ languages }: { languages: CV['languages'] }) {
	return (
		<CvSection title="Languages">
			{languages && languages.map(({ fluency, language }, index) => <Article key={index} title={`${language} - ${fluency}`} titleSize="xs" />)}
		</CvSection>
	);
}
