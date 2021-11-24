import { getUserByUsername } from "../utils/api";
import { useEffect, useState } from "react";

export default function UserAvatar({ username }) {
	const [user, setUser] = useState([]);

	useEffect(() => {
		getUserByUsername(username).then((data) => {
			setUser(data);
		});
	}, [username]);

	return (
		<div className="user-info">
			<img className="user-avatar" src={user.avatar_url} alt={user.username} />
			<div className="comment-author">{user.username}</div>
		</div>
	);
}
