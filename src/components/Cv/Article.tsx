type HighlightsType = 'list' | 'tags';

export default function Article({
	title,
	description,
	highlights,
	highlightsType = 'list',
	date,
	url,
}: {
	title: string;
	description?: string;
	highlights?: string[];
	highlightsType?: HighlightsType;
	date?: string;
	url?: string;
}) {
	return (
		<article className="mb-2">
			<div className="flex relative">
				<h3 className="text-xl content-center">
					{url ? (
						<a href={url} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					) : (
						title
					)}
				</h3>
				{date && <h4 className="content-center absolute right-0 text-neutral">{date}</h4>}
			</div>
			{description && <p className="text-accent">{description}</p>}

			{highlights &&
				(highlightsType === 'list' ? (
					<ul>
						{highlights.map((highlight, index) => (
							<li key={index}>{highlight}</li>
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
