import Cv from '@/components/Cv/Cv';
import { CvService } from '@/services/cv.service';

export default async function page({ params: { path } }: { params: { path: string } }) {
	const cvService = new CvService();
	const cv = await cvService.getCv(path!);
	return (
		<main data-theme="light" className="p-5 h-screen flex justify-center">
			{cv && <Cv cv={cv}></Cv>}
		</main>
	);
}
