export default function PostComment() {
	return (
		<form className="post-comment-container">
			<button className="post-comment-button" type="submit">
				Post
			</button>
			<input type="text" name="comment" id="comment" />
		</form>
	);
}
