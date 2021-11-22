import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";

export default function ArticleCard({ article, bodyClass }) {
	return (
		<div className="article-card">
			<h3>{article.title}</h3>
			<p className={bodyClass}>{article.body}</p>
			<p>{article.author}</p>
			<LikeButton votes={article.votes} />
			<CommentsButton count={article.comment_count} id={article.article_id} />
		</div>
	);
}
