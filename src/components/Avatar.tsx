import Image from 'next/image';

export default function Avatar({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="avatar">
			<div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
				<img src={src} alt={alt} width="96" height="96" />
			</div>
		</div>
	);
}
