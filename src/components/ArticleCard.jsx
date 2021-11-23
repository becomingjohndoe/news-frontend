import { Link } from "react-router-dom";
import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";

export default function ArticleCard({ article, bodyClass, linkClass }) {
	return (
		<div className="article-card">
			<h3>{article.title}</h3>
			<p className={bodyClass}>{article.body}</p>
			<span>See more</span>
			<p>
				in{" "}
				<Link className={linkClass} to={`articles/topic/${article.topic}`}>
					{article.topic}
				</Link>{" "}
				by {article.author}
			</p>
			<LikeButton votes={article.votes} />
			<CommentsButton count={article.comment_count} id={article.article_id} />

			<i className="far fa-clock"> {article.created_at}</i>
		</div>
	);
}
