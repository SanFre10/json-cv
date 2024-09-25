type HighlightsType = 'list' | 'tags';

export default function Article({
	title,
	description,
	highlights,
	highlightsType = 'list',
	date,
	url,
	titleSize,
	textSize,
}: {
	title: string;
	description?: string;
	highlights?: string[];
	highlightsType?: HighlightsType;
	date?: string;
	url?: string;
	titleSize?: string;
	textSize?: string;
}) {
	return (
		<article className="mb-5">
			<div className="flex relative justify-between">
				<h3 className={`${titleSize ? `text-${titleSize}` : 'text-lg'} content-center font-bold`}>
					{url ? (
						<a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
							{title}
						</a>
					) : (
						title
					)}
				</h3>
				{date && <h4 className="content-center text-neutral font-bold print:text-black">{date}</h4>}
			</div>
			{description && <p className="text-neutral text-sm text-balance print:text-black">{description}</p>}

			{highlights &&
				(highlightsType === 'list' ? (
					<ul className="list-disc pl-3 pt-3">
						{highlights.map((highlight, index) => (
							<li key={index} className={`${textSize ? `text-${textSize}` : 'text-sm'} text-balance p-1`}>
								{highlight}
							</li>
						))}
					</ul>
				) : (
					<div>
						{highlights.map((highlight, index) => (
							<div key={index} className="badge badge-neutral ml-1">
								{highlight}
							</div>
						))}
					</div>
				))}
		</article>
	);
}
