import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Certificates({ certificates }: { certificates: CV['certificates'] }) {
	return (
		<CvSection className="w-[80%]">
			<h2 className="text-3xl text-primary font-bold">Certificates</h2>

			{certificates &&
				certificates.map(({ name, date, issuer, url }, index) => (
					<Article key={index} title={`${name} - ${issuer}`} date={`${date}`} url={url} />
				))}
		</CvSection>
	);
}
