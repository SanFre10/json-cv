import Image from 'next/image';

interface IconListItemProps {
	icon: string;
	value: string;
}

const icons: { [key: string]: any } = {
	x: '/assets/icons/x.svg',
	twitter: '/assets/icons/x.svg',
	linkedin: '/assets/icons/linkedin.svg',
	github: '/assets/icons/github.svg',
	email: '/assets/icons/email.svg',
	phone: '/assets/icons/phone.svg',
	website: '/assets/icons/website.svg',
};

export default function IconListItem({ icon, value }: IconListItemProps) {
	return (
		<>
			{icon && icons.hasOwnProperty(icon) && <Image src={icons[icon]} alt={value} width="20" height="20" />}
			<span className="text-sm">{value}</span>
		</>
	);
}
