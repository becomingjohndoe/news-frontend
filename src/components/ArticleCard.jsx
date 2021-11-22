import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";

export default function ArticleCard({ article }) {
	return (
		<div className="article-card">
			<h3>{article.title}</h3>
			<p className="article-body">{article.body}</p>
			<p>{article.author}</p>
			<LikeButton votes={article.votes} />
			<CommentsButton count={article.comment_count} />
		</div>
	);
}
