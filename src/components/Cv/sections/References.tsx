import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function References({ references, locale }: { references: CV['references']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('References', locale)}>
			{references && references.map(({ name, reference }, index) => <Article key={index} title={name} description={reference} />)}
		</CvSection>
	);
}
