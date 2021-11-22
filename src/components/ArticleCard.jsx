import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";

export default function ArticleCard({ article }) {
	return (
		<div className="article-card">
			<h2>{article.title}</h2>
			<p className="article-body">{article.body}</p>
			<p>{article.author}</p>
			<p>votes {article.votes}</p>
			<p>comments{article.comment_count}</p>
			<LikeButton />
			<CommentsButton />
		</div>
	);
}
