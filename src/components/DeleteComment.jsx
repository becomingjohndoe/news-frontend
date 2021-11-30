import { deleteComment } from "../utils/api";
import { DropdownButton, Dropdown } from "react-bootstrap";
export default function DeleteComment({
	id,
	isVisible,
	setDeleted,
	setEdit,
	setIdOfEdit,
}) {
	if (!isVisible) {
		return <></>;
	}
	return (
		<DropdownButton
			variant="secondary"
			size="sm"
			id="dropdown-basic-button"
			title="..."
		>
			<Dropdown.Item
				as="button"
				onClick={() => {
					setEdit(true);
					setIdOfEdit(id);
				}}
			>
				Edit
			</Dropdown.Item>
			<Dropdown.Item
				as="button"
				onClick={() => {
					setDeleted(true);
					deleteComment(id).then(() => setDeleted(false));
				}}
			>
				Delete
			</Dropdown.Item>
		</DropdownButton>
	);
}

// <div
// 		className="delete-comment-button"
//
// 	>
// 		<i className="fas fa-minus-circle"></i>
// 		Delete Comment
// 	</div>
