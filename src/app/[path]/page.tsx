import Cv from '@/components/Cv/Cv';
import { CvService } from '@/services/cv.service';

export default async function page({ params: { path } }: { params: { path: string } }) {
	const cvService = new CvService();
	const cv = await cvService.getCv(path!);
	return (
		<main data-theme="light">
			<Cv cv={cv}></Cv>
		</main>
	);
}
