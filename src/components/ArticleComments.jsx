import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import LikeButton from "./LikeButton";
import PostComment from "./PostComment";

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
					<p className="comment-author">{comment.author}</p>
					<p className="comment-body">{comment.body}</p>

					<LikeButton votes={comment.votes} />
				</div>
			))}
		</div>
	);
}
