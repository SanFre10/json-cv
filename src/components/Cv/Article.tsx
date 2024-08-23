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
			<div className="flex relative">
				<h3 className={`${titleSize ? `text-${titleSize}` : 'text-lg'} content-center`}>
					{url ? (
						<a href={url} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					) : (
						title
					)}
				</h3>
				{date && <h4 className="content-center absolute right-0 text-neutral print:text-black">{date}</h4>}
			</div>
			{description && <p className="text-neutral print:text-black">{description}</p>}

			{highlights &&
				(highlightsType === 'list' ? (
					<ul>
						{highlights.map((highlight, index) => (
							<li key={index} className={`${textSize ? `text-${textSize}` : 'text-lg'}`}>
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
