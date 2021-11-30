import { userContext } from "./context/userContext";
import { useContext, useState } from "react";
import { postComment } from "../utils/api";
import UserAvatar from "./UserInfo";

export default function PostComment({ id, setPosted }) {
	const [err, setErr] = useState(null);
	const { user } = useContext(userContext);
	// post comment
	const handleSubmit = (event) => {
		event.preventDefault();
		setPosted(true);
		const newComment = {
			username: user,
			body: event.target.comment.value,
		};
		postComment(id, newComment)
			.then(() => {
				setPosted(false);
			})
			.catch((err) => {
				setErr(err);
			});
	};
	if (err) {
		return (
			<div>
				<p>Something went wrong</p>
				<button
					className="btn-danger"
					onClick={() => {
						setErr(null);
					}}
				>
					Try Again?
				</button>
			</div>
		);
	}
	return (
		<>
			<form className="post-comment-container" onSubmit={handleSubmit}>
				<div className="posting-as">
					<p>Posting as: </p>
					<UserAvatar username={user} />
				</div>
				<textarea
					type="text"
					name="comment"
					id="comment"
					defaultValue="What's on your mind?"
					onFocus={(e) => {
						if (e.target.value === e.target.defaultValue) {
							e.target.value = "";
						}
					}}
				/>
				<button className="post-comment-button btn" type="submit">
					Post
				</button>
			</form>
		</>
	);
}
