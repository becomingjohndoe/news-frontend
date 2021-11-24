import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import { timeElapsed } from "../utils/timeElapsed";
import LikeButton from "./LikeButton";
import PostComment from "./PostComment";
import UserInfo from "./UserInfo";

export default function ArticleComments({ article_id }) {
	const [comments, setComments] = useState([]);
	const [posted, setPosted] = useState(false);
	useEffect(() => {
		getArticleComments(article_id).then(setComments);
	}, [article_id, posted]);
	return (
		<div>
			<PostComment setPosted={setPosted} id={article_id} />

			{comments.map((comment) => (
				<div className="comment-container" key={`${comment.comment_id}`}>
					<UserInfo username={comment.author} />
					<p className="comment-body">{comment.body}</p>
					<LikeButton votes={comment.votes} />
					<i className="far fa-clock"> {timeElapsed(comment.created_at)}</i>
				</div>
			))}
		</div>
	);
}
