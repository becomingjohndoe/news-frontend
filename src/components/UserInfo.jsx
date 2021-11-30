import { getUserByUsername } from "../utils/api";
import { useEffect, useState } from "react";

export default function UserAvatar({ username }) {
	const [user, setUser] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		getUserByUsername(username).then((data) => {
			setUser(data);
			setIsLoading(false);
		});
		// cleanup
		return () => {
			setUser([]);
			setIsLoading(true);
		};
	}, [username]);
	if (isLoading) {
		return <></>;
	}
	return (
		<div className="user-info">
			<img className="user-avatar" src={user.avatar_url} alt={user.username} />
			<div className="comment-author">{`u/${user.username}`}</div>
		</div>
	);
}
