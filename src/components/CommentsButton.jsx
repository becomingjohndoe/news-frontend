import { Link } from "react-router-dom";

export default function CommentsButton({ count }) {
	return (
		<div className="comments-button">
			<Link to="/">
				<i className="fa fa-comments-o"></i>
				<span>{count}Comments</span>
			</Link>
		</div>
	);
}
