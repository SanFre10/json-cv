import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Volunteer({ volunteer }: { volunteer: CV['volunteer'] }) {
	return (
		<CvSection title="Volunteer">
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
