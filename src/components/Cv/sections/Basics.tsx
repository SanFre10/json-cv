import CvSection from '../CvSection';
import { type CV } from '@/types/cv.d';
import IconList from '@/components/IconList/IconList';
import Avatar from '@/components/Avatar';

export default function Basics({ basics }: { basics: CV['basics'] }) {
	return (
		<CvSection>
			<div className="flex justify-between">
				<div className="min-w-[600px]">
					<h1 className="text-6xl font-bold text-white">{basics.name}</h1>
					<p className="text-4xl text-primary font-bold">{basics.label}</p>
					<p>
						{basics.location.city}, {basics.location.region}
					</p>
					<div className="mt-5">
						<h3 className="text-3xl text-primary font-bold">Summary</h3>
						<p className="text-lg text-accent text-balance">{basics.summary}</p>
					</div>
				</div>
				<div className="align-middle text-center p-4 max-w-[40%]">
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
		</CvSection>
	);
}
