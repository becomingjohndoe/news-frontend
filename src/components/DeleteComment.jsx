import { deleteComment } from "../utils/api";

export default function DeleteComment({ id, isVisible, setDeleted }) {
	return (
		<button
			disabled={!isVisible}
			className="delete-comment-button"
			onClick={() => {
				setDeleted(true);
				deleteComment(id).then(() => setDeleted(false));
			}}
		>
			Delete Comment
		</button>
	);
}
