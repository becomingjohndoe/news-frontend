import { useEffect, useState, useContext } from "react";
import { deleteComment, getArticleComments } from "../utils/api";
import { timeElapsed } from "../utils/timeElapsed";
import { userContext } from "./context/userContext";
import DeleteComment from "./DeleteComment";
import LikeButton from "./LikeButton";
import PostComment from "./PostComment";
import UserInfo from "./UserInfo";

export default function ArticleComments({ article_id }) {
	const { user } = useContext(userContext);
	const [comments, setComments] = useState([]);
	const [posted, setPosted] = useState(false);
	const [deleted, setDeleted] = useState(false);
	useEffect(() => {
		getArticleComments(article_id).then(setComments);
	}, [article_id, posted, deleted]);
	return (
		<div>
			<PostComment setPosted={setPosted} id={article_id} />

			{comments.map((comment) => (
				<div className="comment-container" key={`${comment.comment_id}`}>
					<UserInfo username={comment.author} />
					<p className="comment-body">{comment.body}</p>
					<LikeButton votes={comment.votes} />
					<i className="far fa-clock"> {timeElapsed(comment.created_at)}</i>
					<i className=""></i>
					<DeleteComment
						id={comment.comment_id}
						isVisible={user === comment.author}
						setDeleted={setDeleted}
					/>
				</div>
			))}
		</div>
	);
}
