import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Awards({ awards, locale }: { awards: CV['awards']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Awards', locale)}>
			{awards &&
				awards.map(({ title, date, awarder, summary }, index) => (
					<Article key={index} title={`${title} - ${awarder}`} description={summary} date={`${date}`} />
				))}
		</CvSection>
	);
}
