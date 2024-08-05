import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Publications({ publications }: { publications: CV['publications'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Publications</h2>

			{publications &&
				publications.map(({ name, publisher, releaseDate, summary, url }, index) => (
					<Article key={index} title={`${name} - ${publisher}`} description={summary} date={`${releaseDate}`} url={url} />
				))}
		</CvSection>
	);
}
