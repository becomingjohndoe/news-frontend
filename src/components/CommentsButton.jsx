import { Link } from "react-router-dom";

export default function CommentsButton({ count, id }) {
	return (
		<div className="comments-button">
			<Link to={`/articles/${id}`}>
				<i className="fa fa-comments-o"></i>
				<span>{count}Comments</span>
			</Link>
		</div>
	);
}
