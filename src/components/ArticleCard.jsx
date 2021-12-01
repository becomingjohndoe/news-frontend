import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMemes } from "../utils/api";
import { timeElapsed } from "../utils/timeElapsed";
import CommentsButton from "./CommentsButton";
import LikeButton from "./LikeButton";
import UserAvatar from "./UserInfo";
export default function ArticleCard({ article, bodyClass, linkClass }) {
	const [meme, setMeme] = useState([]);
	// generate random number between 100 500
	// generate random number between 200 and 600
	useEffect(() => {
		getMemes().then((data) => {
			console.log(data);
			setMeme(data);
		});
	}, [article]);

	return (
		<div className="article-card">
			<div className="article-card-info">
				in{" "}
				<Link className={linkClass} to={`/articles/topic/${article.topic}`}>
					<strong>{`t/${article.topic}`}</strong>
				</Link>{" "}
				Posted by <UserAvatar username={article.author} />
			</div>
			<Link to={`/articles/${article.article_id}`}>
				<h5>{article.title}</h5>
			</Link>
			<div className="article-image-container">
				<img className="article-image" src={meme.url} alt="article-image" />
			</div>
			<p className={bodyClass}>{article.body}</p>

			<LikeButton votes={article.votes} id={article.article_id} />
			<CommentsButton count={article.comment_count} id={article.article_id} />

			<i className="far fa-clock"> {timeElapsed(article.created_at)}</i>
		</div>
	);
}
