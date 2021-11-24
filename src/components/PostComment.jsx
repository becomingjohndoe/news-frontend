import { userContext } from "./context/userContext";
import { useContext } from "react";
import { postComment } from "../utils/api";

export default function PostComment({ id, setPosted }) {
	const { user } = useContext(userContext);
	// post comment
	const handleSubmit = (event) => {
		event.preventDefault();
		const newComment = {
			username: user,
			body: event.target.comment.value,
		};
		postComment(id, newComment).then(() => {
			setPosted(true);
		});
	};
	return (
		<form className="post-comment-container" onSubmit={handleSubmit}>
			<button className="post-comment-button" type="submit">
				Post
			</button>
			<input type="text" name="comment" id="comment" />
		</form>
	);
}
