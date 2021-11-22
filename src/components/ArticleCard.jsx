export default function ArticleCard({ article }) {
	return (
		<div className="article-card">
			<div className="article-card__title">
				<h3>{article.title}</h3>
			</div>
			<div className="article-card__body">
				<p>{article.body}</p>
			</div>
			<div className="article-card__footer">
				<LikeButton />
				<CommentsButton />
			</div>
		</div>
	);
}
