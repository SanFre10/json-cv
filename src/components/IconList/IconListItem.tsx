import Image from 'next/image';
import x from '@/assets/icons/x.svg';

interface IconListItemProps {
	icon: string;
	value: string;
}

const icons: { [key: string]: any } = {
	x: x,
	twitter: x,
};

export default function IconListItem({ icon, value }: IconListItemProps) {
	return (
		<div className="flex gap-2">
			{icon && icons.hasOwnProperty(icon) && <Image src={icons[icon]} alt={value} width="15" height="15" />}
			<span>{value}</span>
		</div>
	);
}
