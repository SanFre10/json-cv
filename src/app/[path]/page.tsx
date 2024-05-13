import Cv from '@/components/Cv/cv';

export default async function page({ params: { path } }: { params: { path: string } }) {
	return <Cv path={path}></Cv>;
}
