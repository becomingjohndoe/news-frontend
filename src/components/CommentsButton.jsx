import { Link } from "react-router-dom";

export default function CommentsButton({ count, id }) {
	return (
		<div className="comments-button">
			<Link to={`/articles/${id}`}>
				<span>
					<i className="fa fa-comment"></i> {count} Comments
				</span>
			</Link>
		</div>
	);
}
