export default function CommentsButton({ count }) {
	return (
		<div className="comments-button">
			<a href="">
				<i className="fa fa-comments-o" aria-hidden="true"></i>
				<span>{count}Comments</span>
			</a>
		</div>
	);
}
