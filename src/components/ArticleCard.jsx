import { Link } from "react-router-dom";
import { timeElapsed } from "../utils/timeElapsed";
import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";
import { Navigate } from "react-router";
import UserAvatar from "./UserInfo";
export default function ArticleCard({ article, bodyClass, linkClass }) {
	return (
		<div className="article-card">
			<div className="article-card-info">
				in{" "}
				<Link className={linkClass} to={`/articles/topic/${article.topic}`}>
					<strong>{`t/${article.topic}`}</strong>
				</Link>{" "}
				Posted by <UserAvatar username={article.author} />
			</div>
			<h4>{article.title}</h4>
			<p className={bodyClass}>{article.body}</p>

			<LikeButton votes={article.votes} id={article.article_id} />
			<CommentsButton count={article.comment_count} id={article.article_id} />

			<i className="far fa-clock"> {timeElapsed(article.created_at)}</i>
		</div>
	);
}
