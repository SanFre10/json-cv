import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Work({ work }: { work: CV['work'] }) {
	return (
		<CvSection title="Work experience">
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
