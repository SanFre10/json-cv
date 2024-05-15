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

export default function Cv({ cv }: { cv: CV }) {
	return (
		<main>
			{cv.basics && <Basics basics={cv.basics}></Basics>}
			{cv.work && <Work work={cv.work}></Work>}
			{cv.volunteer && <Volunteer volunteer={cv.volunteer}></Volunteer>}
			{cv.education && <Education education={cv.education}></Education>}
			{cv.awards && <Awards awards={cv.awards}></Awards>}
			{cv.certificates && <Certificates certificates={cv.certificates}></Certificates>}
			{cv.publications && <Publications publications={cv.publications}></Publications>}
			{cv.skills && <Skills skills={cv.skills}></Skills>}
			{cv.languages && <Languages languages={cv.languages}></Languages>}
			{cv.interests && <Interests interests={cv.interests}></Interests>}
			{cv.references && <References references={cv.references}></References>}
			{cv.projects && <Projects projects={cv.projects}></Projects>}
		</main>
	);
}
