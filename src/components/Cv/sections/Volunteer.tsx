import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Volunteer({ volunteer, locale }: { volunteer: CV['volunteer']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Volunteer', locale)}>
			{volunteer &&
				volunteer.map(({ organization, position, summary, highlights, url, startDate, endDate }, index) => (
					<Article
						key={index}
						title={`${organization} - ${position}`}
						description={summary}
						highlights={highlights}
						date={`${startDate} - ${endDate}`}
						url={url}
					/>
				))}
		</CvSection>
	);
}
