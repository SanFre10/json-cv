import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Education({ education }: { education: CV['education'] }) {
	return (
		<CvSection title="Education">
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
