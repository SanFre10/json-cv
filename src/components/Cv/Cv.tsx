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

import { Locales } from '@/utils/locale/locale';
import { Theme } from '@/types/cvModel';

export default function Cv({ cv, locale = 'es', theme = 'cvThemeLight' }: { cv: CV; locale: Locales; theme: Theme }) {
	return (
		<div data-theme={theme} className="w-[210mm] font-mono rounded select-none">
			{cv.basics && <Basics basics={cv.basics} locale={locale}></Basics>}
			{cv.work && <Work work={cv.work} locale={locale}></Work>}
			{cv.volunteer && <Volunteer volunteer={cv.volunteer} locale={locale}></Volunteer>}
			{cv.education && <Education education={cv.education} locale={locale}></Education>}
			{cv.awards && <Awards awards={cv.awards} locale={locale}></Awards>}
			{cv.certificates && <Certificates certificates={cv.certificates} locale={locale}></Certificates>}
			{cv.projects && <Projects projects={cv.projects} locale={locale}></Projects>}
			{cv.publications && <Publications publications={cv.publications} locale={locale}></Publications>}
			{cv.skills && <Skills skills={cv.skills} locale={locale}></Skills>}
			{cv.languages && <Languages languages={cv.languages} locale={locale}></Languages>}
			{cv.interests && <Interests interests={cv.interests} locale={locale}></Interests>}
			{cv.references && <References references={cv.references} locale={locale}></References>}
		</div>
	);
}
