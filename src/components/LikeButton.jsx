import { useState } from "react";
import { patchArticleVotes } from "../utils/api";

export default function LikeButton({ votes = 0, id }) {
	const [likes, setLikes] = useState(0);

	const handleClick = (e) => {
		let vote = 0;
		if (e.target.className === "fas fa-arrow-up") {
			vote = 1;
		}
		if (e.target.className === "fas fa-arrow-down") {
			vote = -1;
		}
		patchArticleVotes(id, vote).then(() => {});
		setLikes(likes + vote);
	};

	return (
		<div className="like-button">
			<i name="up" onClick={handleClick} className="fas fa-arrow-up"></i>
			<span className="votes">{votes + likes}</span>
			<i name="down" onClick={handleClick} className="fas fa-arrow-down"></i>
		</div>
	);
}
