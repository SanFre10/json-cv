export default function Page() {
	const json = {
		basics: {
			name: 'John Doe',
			label: 'Programmer',
			image: '',
			email: 'john@gmail.com',
			phone: '(912) 555-4321',
			url: 'https://johndoe.com',
			summary: 'A summary of John Doe…',
			location: {
				address: '2712 Broadway St',
				postalCode: 'CA 94115',
				city: 'San Francisco',
				countryCode: 'US',
				region: 'California',
			},
			profiles: [
				{
					network: 'Twitter',
					username: 'john',
					url: 'https://twitter.com/john',
				},
			],
		},
		work: [
			{
				name: 'Company',
				position: 'President',
				url: 'https://company.com',
				startDate: '2013-01-01',
				endDate: '2014-01-01',
				summary: 'Description…',
				highlights: ['Started the company'],
			},
		],
		volunteer: [
			{
				organization: 'Organization',
				position: 'Volunteer',
				url: 'https://organization.com/',
				startDate: '2012-01-01',
				endDate: '2013-01-01',
				summary: 'Description…',
				highlights: ["Awarded 'Volunteer of the Month'"],
			},
		],
		education: [
			{
				institution: 'University',
				url: 'https://institution.com/',
				area: 'Software Development',
				studyType: 'Bachelor',
				startDate: '2011-01-01',
				endDate: '2013-01-01',
				score: '4.0',
				courses: ['DB1101 - Basic SQL'],
			},
		],
		awards: [
			{
				title: 'Award',
				date: '2014-11-01',
				awarder: 'Company',
				summary: 'There is no spoon.',
			},
		],
		certificates: [
			{
				name: 'Certificate',
				date: '2021-11-07',
				issuer: 'Company',
				url: 'https://certificate.com',
			},
		],
		publications: [
			{
				name: 'Publication',
				publisher: 'Company',
				releaseDate: '2014-10-01',
				url: 'https://publication.com',
				summary: 'Description…',
			},
		],
		skills: [
			{
				name: 'Web Development',
				level: 'Master',
				keywords: ['HTML', 'CSS', 'JavaScript'],
			},
		],
		languages: [
			{
				language: 'English',
				fluency: 'Native speaker',
			},
		],
		interests: [
			{
				name: 'Wildlife',
				keywords: ['Ferrets', 'Unicorns'],
			},
		],
		references: [
			{
				name: 'Jane Doe',
				reference: 'Reference…',
			},
		],
		projects: [
			{
				name: 'Project',
				startDate: '2019-01-01',
				endDate: '2021-01-01',
				description: 'Description...',
				highlights: ['Won award at AIHacks 2016'],
				url: 'https://project.com/',
			},
		],
	};

	return (
		<div>
			<section>
				<h2>{json.basics.name}</h2>
				<p className="label">{json.basics.label}</p>
				<p>Email: {json.basics.email}</p>
				<p>Phone: {json.basics.phone}</p>
				<p>
					Location: {json.basics.location.city}, {json.basics.location.region}
				</p>
				<p>Summary: {json.basics.summary}</p>
				<ul>
					<li>
						{json.basics.profiles[0].network}: <a href="{json.basics.profiles[0].url}">{json.basics.profiles[0].username}</a>
					</li>
				</ul>
			</section>
			<section>
				<h2>Work Experience</h2>
				<div>
					<p>Company: {json.work[0].name}</p>
					<p>Position: {json.work[0].position}</p>
					<p>Summary: {json.work[0].summary}</p>
					<p>Highlights:</p>
					<ul>
						<li>{json.work[0].highlights[0]}</li>
					</ul>
				</div>
			</section>
			<section>
				<h2>Volunteer Experience</h2>
				<div>
					<p>Organization: {json.volunteer[0].organization}</p>
					<p>Position: {json.volunteer[0].position}</p>
					<p>Summary: {json.volunteer[0].summary}</p>
					<p>Highlights:</p>
					<ul>
						<li>{json.volunteer[0].highlights[0]}</li>
					</ul>
				</div>
			</section>
			<section>
				<h2>Education</h2>
				<div>
					<p>Institution: {json.education[0].institution}</p>
					<p>Area: {json.education[0].area}</p>
					<p>Study Type: {json.education[0].studyType}</p>
					<p>Score: {json.education[0].score}</p>
					<p>Courses:</p>
					<ul>
						<li>{json.education[0].courses[0]}</li>
					</ul>
				</div>
			</section>
			<section>
				<h2>Awards</h2>
				<div>
					<p>Title: {json.awards[0].title}</p>
					<p>Date: {json.awards[0].date}</p>
					<p>Awarder: {json.awards[0].awarder}</p>
					<p>Summary: {json.awards[0].summary}</p>
				</div>
			</section>
			<section>
				<h2>Certificates</h2>
				<div>
					<p>Name: {json.certificates[0].name}</p>
					<p>Date: {json.certificates[0].date}</p>
					<p>Issuer: {json.certificates[0].issuer}</p>
					<p>
						<a href="{json.certificates[0].url}">Certificate Link</a>
					</p>
				</div>
			</section>
			<section>
				<h2>Publications</h2>
				<div>
					<p>Name: {json.publications[0].name}</p>
					<p>Publisher: {json.publications[0].publisher}</p>
					<p>Release Date: {json.publications[0].releaseDate}</p>
					<p>
						<a href="{json.publications[0].url}">Publication Link</a>
					</p>
					<p>Summary: {json.publications[0].summary}</p>
				</div>
			</section>
			<section>
				<h2>Skills</h2>
				<div>
					<p>Name: {json.skills[0].name}</p>
					<p>Level: {json.skills[0].level}</p>
					<p>Keywords: {json.skills[0].keywords.join(', ')}</p>
				</div>
			</section>
			<section>
				<h2>Languages</h2>
				<div>
					<p>Language: {json.languages[0].language}</p>
					<p>Fluency: {json.languages[0].fluency}</p>
				</div>
			</section>
			<section>
				<h2>Interests</h2>
				<div>
					<p>Name: {json.interests[0].name}</p>
					<p>Keywords: {json.interests[0].keywords.join(', ')}</p>
				</div>
			</section>
			<section>
				<h2>References</h2>
				<div>
					<p>Name: {json.references[0].name}</p>
					<p>Reference: {json.references[0].reference}</p>
				</div>
			</section>
			<section>
				<h2>Projects</h2>
				<div>
					<p>Name: {json.projects[0].name}</p>
					<p>Start Date: {json.projects[0].startDate}</p>
					<p>End Date: {json.projects[0].endDate}</p>
					<p>Description: {json.projects[0].description}</p>
					<p>Highlights:</p>
					<ul>
						<li>{json.projects[0].highlights[0]}</li>
					</ul>
					<p>
						<a href={json.projects[0].url}>Project Link</a>
					</p>
				</div>
			</section>
		</div>
	);
}
