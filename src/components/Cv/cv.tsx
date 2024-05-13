import { CV } from '@/types/cv';

import Basics from '@/components/Cv/sections/Basics';
import Work from '@/components/Cv/sections/Work';
import Volunteer from '@/components/Cv/sections/Volunteer';
import Education from '@/components/Cv/sections/Education';
import Awards from '@/components/Cv/sections/Awards';
import Certificates from '@/components/Cv/sections/Certificates';
import Publications from '@/components/Cv/sections/Publications';
import Skills from '@/components/Cv/sections/Skills';
import Languages from '@/components/Cv/sections/Languages';
import Interests from '@/components/Cv/sections/Interests';
import References from '@/components/Cv/sections/References';
import Projects from '@/components/Cv/sections/Projects';
import { CvService } from '@/services/cv.service';

export default async function cv({ path }: { path: string }) {
	const cvService = new CvService();
	const cv = await cvService.getCv(path);
	return (
		<div>
			<Basics cv={cv}></Basics>
			<Work cv={cv}></Work>
			<Volunteer cv={cv}></Volunteer>
			<Education cv={cv}></Education>
			<Awards cv={cv}></Awards>
			<Certificates cv={cv}></Certificates>
			<Publications cv={cv}></Publications>
			<Skills cv={cv}></Skills>
			<Languages cv={cv}></Languages>
			<Interests cv={cv}></Interests>
			<References cv={cv}></References>
			<Projects cv={cv}></Projects>
		</div>
	);
}
