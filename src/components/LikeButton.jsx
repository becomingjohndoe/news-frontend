export default function LikeButton({ votes }) {
	return (
		<button className="like-button">
			<i className="fas fa-thumbs-up"></i> {votes}
		</button>
	);
}
