import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Work({ work }: { work: CV['work'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Work Experience</h2>

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
