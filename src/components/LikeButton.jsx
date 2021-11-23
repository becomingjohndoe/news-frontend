export default function LikeButton({ votes }) {
	return (
		<div className="like-button">
			<i className="fas fa-arrow-up"></i>
			<span className="votes">{votes}</span>
			<i className="fas fa-arrow-down"></i>
		</div>
	);
}
