import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import IconList from '@/components/IconList/IconList';
import Avatar from '@/components/Avatar';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Basics({ basics, locale }: { basics: CV['basics']; locale: Locales }) {
	return (
		<header className="p-10">
			<div className="flex justify-between">
				<div className="w-[80%]">
					<h1 className="text-4xl text-primary print:text-black font-bold">{basics.name}</h1>
					<p className="text-2xl text-secondary print:text-black font-bold">{basics.label}</p>
					{basics.location && (
						<p>
							{basics.location.city}, {basics.location.region}
						</p>
					)}
				</div>
				<div className="align-middle text-center p-5 w-[20%]">{basics.image && <Avatar src={basics.image} alt={basics.name} />}</div>
			</div>
			<div className="w-full">
				<div className="mt-5">
					<IconList
						list={[
							{ icon: 'email', value: basics.email, url: `mailto:${basics.email}` },
							{ icon: 'phone', value: basics.phone, url: `tel:${basics.phone}` },
							...basics.profiles.map((profile) => ({
								icon: profile.network,
								value: profile.username,
								url: profile.url,
							})),
						]}
					/>
				</div>
				<div className="mt-5">
					<h3 className="text-xl text-secondary print:text-black font-bold">{getLocaleText('Summary', locale)}</h3>
					<p className="text-sm text-newutral print:text-black text-balance">{basics.summary}</p>
				</div>
			</div>
		</header>
	);
}
