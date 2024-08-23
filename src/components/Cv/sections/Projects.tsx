import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Projects({ projects }: { projects: CV['projects'] }) {
	return (
		<CvSection title="Projects">
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
