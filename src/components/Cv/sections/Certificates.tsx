import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';

export default function Certificates({ certificates }: { certificates: CV['certificates'] }) {
	return (
		<CvSection title="Certificates">
			{certificates &&
				certificates.map(({ name, date, issuer, url }, index) => (
					<Article key={index} title={`${name} - ${issuer}`} date={`${date}`} url={url} />
				))}
		</CvSection>
	);
}
