import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Work({ work, locale }: { work: CV['work']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('experience', locale)}>
			{work &&
				work.map(({ name, position, summary, highlights, url, startDate, endDate }, index) => (
					<Article
						key={index}
						title={`${name} - ${position}`}
						description={summary}
						highlights={highlights}
						date={`${startDate} - ${endDate}`}
						url={url}
					/>
				))}
		</CvSection>
	);
}
