import Cv from '@/components/Cv/Cv';
import PrintBtn from '@/components/PrintBtn';
import { CvService } from '@/services/cv.service';

export default async function page({ params: { path } }: { params: { path: string } }) {
	const cv = await CvService.getCv(path!);
	return (
		<>
			<header className="justify-end flex m-5 print:hidden" no-print>
				<PrintBtn />
			</header>
			<main className="p-5 flex justify-center">{cv && <Cv cv={cv}></Cv>}</main>
		</>
	);
}
