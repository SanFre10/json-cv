import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Skills({ skills, locale }: { skills: CV['skills']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Skills', locale)}>
			{skills &&
				skills.map(({ name, keywords, level }, index) => (
					<Article key={index} title={`${name} - ${level}`} highlights={keywords} highlightsType="tags" />
				))}
		</CvSection>
	);
}
