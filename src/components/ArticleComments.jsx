import { useEffect, useState } from "react";
import { getArticleComments } from "../utils/api";
import LikeButton from "./LikeButton";
export default function ArticleComments({ article_id }) {
	const [comments, setComments] = useState([]);
	useEffect(() => {
		getArticleComments(article_id).then(setComments);
	}, [article_id]);

	return (
		<div>
			<h2>Comments</h2>
			<ul>
				{comments.map((comment) => (
					<li key={comment.created_at}>
						<p>{comment.body}</p>
						<p>{comment.author}</p>
						<LikeButton votes={comment.votes} />
					</li>
				))}
			</ul>
		</div>
	);
}
