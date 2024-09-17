import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Interests({ interests, locale }: { interests: CV['interests']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Interests', locale)}>
			{interests && interests.map(({ name, keywords }, index) => <Article key={index} title={`${name}`} highlights={keywords} />)}
		</CvSection>
	);
}
