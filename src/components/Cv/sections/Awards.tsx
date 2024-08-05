import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Awards({ awards }: { awards: CV['awards'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Awards</h2>

			{awards &&
				awards.map(({ title, date, awarder, summary }, index) => (
					<Article key={index} title={`${title} - ${awarder}`} description={summary} date={`${date}`} />
				))}
		</CvSection>
	);
}
