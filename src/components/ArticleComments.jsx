import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import LikeButton from "./LikeButton";
import PostComment from "./PostComment";
import UserInfo from "./UserInfo";

export default function ArticleComments({ article_id }) {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		getArticleComments(article_id).then(setComments);
	}, [article_id]);

	return (
		<div>
			<PostComment />

			{comments.map((comment) => (
				<div className="comment-container" key={comment.created_at}>
					<UserInfo username={comment.author} />
					<p className="comment-body">{comment.body}</p>
					<LikeButton votes={comment.votes} />
					<i className="far fa-clock"> {comment.created_at}</i>
				</div>
			))}
		</div>
	);
}
