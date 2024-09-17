import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import IconList from '@/components/IconList/IconList';
import Avatar from '@/components/Avatar';
import { getLocaleText, Locales } from '@/utils/locale/locale';

export default function Basics({ basics, locale }: { basics: CV['basics']; locale: Locales }) {
	return (
		<div className="flex justify-between">
			<div className="w-[70%] p-10">
				<h1 className="text-5xl text-primary print:text-black font-bold">{basics.name}</h1>
				<p className="text-3xl text-secondary print:text-black font-bold">{basics.label}</p>
				{basics.location && (
					<p>
						{basics.location.city}, {basics.location.region}
					</p>
				)}
				<div className="mt-5">
					<h3 className="text-2xl text-secondary print:text-black font-bold">{getLocaleText('Summary', locale)}</h3>
					<p className="text-md text-newutral print:text-black text-balance">{basics.summary}</p>
				</div>
			</div>
			<div className="align-middle text-center p-10 w-[30%] bg-base-200">
				{basics.image && <Avatar src={basics.image} alt={basics.name} />}
				<div className="mt-5">
					<IconList
						list={[
							{ icon: 'email', value: basics.email },
							{ icon: 'phone', value: basics.phone },
						]}
					/>
					<IconList
						list={basics.profiles.map((profile) => ({
							icon: profile.network,
							value: profile.username,
							url: profile.url,
						}))}
					/>
				</div>
			</div>
		</div>
	);
}
