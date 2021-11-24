import { Link } from "react-router-dom";
import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";

export default function ArticleCard({ article, bodyClass, linkClass }) {
	return (
		<div className="article-card">
			<p>
				in{" "}
				<Link className={linkClass} to={`/articles/topic/${article.topic}`}>
					{article.topic}
				</Link>{" "}
				Posted by {article.author}
			</p>
			<h4>{article.title}</h4>
			<p className={bodyClass}>{article.body}</p>

			<LikeButton votes={article.votes} id={article.article_id} />
			<CommentsButton count={article.comment_count} id={article.article_id} />

			<i className="far fa-clock"> {article.created_at}</i>
		</div>
	);
}
