import Head from 'next/head';
import SearchCVs from '@/components/SearchCVs';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<section className="hero min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
				<div className="hero-content flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-6">
					<div className="text-balance md:text-left mb-8 md:mb-0 w-3/5">
						<h1 className="text-5xl font-bold mb-6">Build & Explore Developer CVs</h1>
						<p className="text-xl mb-8">
							Use the power of{' '}
							<a href="https://jsonresume.org/" target="_blank" className="link">
								JSON Resume
							</a>{' '}
							to create professional, developer-centric CVs.
						</p>

						<Link href="/new" className="btn btn-outline btn-secondary text-lg">
							Create Your CV
						</Link>
						<SearchCVs />
					</div>

					<div className="flex-shrink-0 w-2/5">
						<Image src="/img/exampleCv.webp" alt="Example CV" width={600} height={700} className="rounded-lg shadow-lg" />
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100 text-gray-800">
				<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
					<div>
						<div className="text-4xl mb-4">🚀</div>
						<h3 className="text-2xl font-bold">Fast & Flexible</h3>
						<p>Create and customize CVs in a format perfect for developers.</p>
					</div>
					<div>
						<div className="text-4xl mb-4">💻</div>
						<h3 className="text-2xl font-bold">JSON-Based</h3>
						<p>Use JSON Resume format to structure your CV like code.</p>
					</div>
					<div>
						<div className="text-4xl mb-4">📤</div>
						<h3 className="text-2xl font-bold">Share & Export</h3>
						<p>Export in PDF or share via a unique URL.</p>
					</div>
				</div>
			</section>
		</main>
	);
}
