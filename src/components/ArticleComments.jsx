import { useEffect, useState, useContext } from "react";
import { getArticleComments } from "../utils/api";
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
	const [edit, setEdit] = useState(false);
	const [idOfEdit, setIdOfEdit] = useState(null);
	useEffect(() => {
		getArticleComments(article_id).then(setComments);
	}, [article_id, posted, deleted]);
	return (
		<div className="comments">
			<PostComment setPosted={setPosted} id={article_id} />

			{comments.map((comment) => (
				<div className="comment-container" key={`${comment.comment_id}`}>
					<UserInfo username={comment.author} />

					<div className="comment-body">
						{edit && idOfEdit === comment.comment_id ? <PostComment /> : comment.body}
					</div>

					<div className="comment-info">
						<LikeButton
							votes={comment.votes}
							id={comment.comment_id}
							isComment={true}
						/>
						<div className="time-elapsed">
							<i className="far fa-clock"> {timeElapsed(comment.created_at)}</i>
						</div>
						<DeleteComment
							id={comment.comment_id}
							isVisible={user === comment.author}
							setDeleted={setDeleted}
							setEdit={setEdit}
							setIdOfEdit={setIdOfEdit}
						/>
					</div>
				</div>
			))}
		</div>
	);
}
