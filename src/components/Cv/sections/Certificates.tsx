import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import Article from '../Article';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Certificates({ certificates, locale }: { certificates: CV['certificates']; locale: Locales }) {
	return (
		<CvSection title={getLocaleText('Certificates', locale)}>
			{certificates &&
				certificates.map(({ name, date, issuer, url }, index) => (
					<Article key={index} title={`${name} - ${issuer}`} date={`${date}`} url={url} />
				))}
		</CvSection>
	);
}
