import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function languages({ languages, locale }: { languages: CV['languages']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Languages', locale)}>
			{languages && languages.map(({ fluency, language }, index) => <Article key={index} title={`${language} - ${fluency}`} titleSize="xs" />)}
		</CvSection>
	);
}
