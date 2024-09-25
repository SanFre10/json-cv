import Image from 'next/image';
import IconListItem from './IconListItem';

interface IconListProps {
	list: {
		icon: string;
		value: string;
		url?: string;
	}[];
}

export default function IconList({ list }: IconListProps) {
	return (
		<ul className="flex space-x-6">
			{list.map(({ icon, value, url }, index) => (
				<li key={index} className="flex items-center space-x-2 hover:underline">
					{url ? (
						<a href={url} target="_blank" className="flex items-center space-x-2">
							<IconListItem icon={icon.toLowerCase()} value={value} />
						</a>
					) : (
						<IconListItem icon={icon.toLowerCase()} value={value} />
					)}
				</li>
			))}
		</ul>
	);
}
