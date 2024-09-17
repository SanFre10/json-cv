import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Projects({ projects, locale }: { projects: CV['projects']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Projects', locale)}>
			{projects &&
				projects.map(({ name, description, url, highlights, startDate, endDate }, index) => (
					<Article
						key={index}
						title={name}
						description={description}
						highlights={highlights}
						date={`${startDate} - ${endDate}`}
						url={url}
					/>
				))}
		</CvSection>
	);
}
