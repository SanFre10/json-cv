import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Education({ education, locale }: { education: CV['education']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Education', locale)}>
			{education &&
				education.map(({ area, courses, institution, score, studyType, url, startDate, endDate }, index) => (
					<Article
						key={index}
						title={`${institution}`}
						description={`${studyType} - ${area} ${score ? `with a score of ${score}` : ''}`}
						highlights={courses}
						date={`${startDate} - ${endDate}`}
						url={url}
					/>
				))}
		</CvSection>
	);
}
