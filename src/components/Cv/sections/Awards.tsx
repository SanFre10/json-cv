import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Awards({ awards }: { awards: CV['awards'] }) {
	return (
		<CvSection title="Awards">
			{awards &&
				awards.map(({ title, date, awarder, summary }, index) => (
					<Article key={index} title={`${title} - ${awarder}`} description={summary} date={`${date}`} />
				))}
		</CvSection>
	);
}
