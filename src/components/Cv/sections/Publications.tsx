import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Publications({ publications, locale }: { publications: CV['publications']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Publications', locale)}>
			{publications &&
				publications.map(({ name, publisher, releaseDate, summary, url }, index) => (
					<Article key={index} title={`${name} - ${publisher}`} description={summary} date={`${releaseDate}`} url={url} />
				))}
		</CvSection>
	);
}
