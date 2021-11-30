import UserAvatar from "./UserInfo";
import { userContext } from "./context/userContext";
import { useContext } from "react";
export default function PostArticle() {
	const { user } = useContext(userContext);
	return (
		<div className="post-article">
			<UserAvatar username={user} />

			<div className="post-article-input">
				<input defaultValue="Create Post"></input>
			</div>
		</div>
	);
}
