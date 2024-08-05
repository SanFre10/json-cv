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
		<ul>
			{list.map(({ icon, value, url }, index) => (
				<li key={index}>
					{url ? (
						<a href={url} target="_blank">
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
