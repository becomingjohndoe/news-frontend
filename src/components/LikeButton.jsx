import { useState, useRef } from "react";
import { patchArticleVotes, patchCommentVotes } from "../utils/api";

export default function LikeButton({ votes = 0, id, isComment = false }) {
	const [likes, setLikes] = useState(0);
	const [hasUpVoted, setHasUpVoted] = useState(false);
	const [hasDownVoted, setHasDownVoted] = useState(false);
	const upvote = useRef(null);
	const downvote = useRef(null);

	const handleUpVote = () => {
		let vote = 0;
		if (hasUpVoted) {
			vote = -1;
			upvote.current.style.cssText = "color: #212529;";
			setHasUpVoted(false);
		} else {
			vote = hasDownVoted ? 2 : 1;
			downvote.current.style.cssText = "color: #212529;";
			upvote.current.style.cssText = "color: #0079d3;";
			setHasUpVoted(true);
			setHasDownVoted(false);
		}
		setLikes(likes + vote);
		isComment ? patchCommentVotes(id, vote) : patchArticleVotes(id, vote);
	};

	const handleDownVote = () => {
		let vote = 0;
		if (hasDownVoted) {
			vote = 1;
			downvote.current.style.cssText = "color: #212529;";
			setHasDownVoted(false);
		} else {
			vote = hasUpVoted ? -2 : -1;
			upvote.current.style.cssText = "color: #212529;";
			downvote.current.style.cssText = "color: #0079d3;";
			setHasDownVoted(true);
			setHasUpVoted(false);
		}
		setLikes(likes + vote);
		isComment ? patchCommentVotes(id, vote) : patchArticleVotes(id, vote);
	};

	return (
		<div className="like-button">
			<button name="up" onClick={handleUpVote} className="upvote-button btn">
				<i ref={upvote} className="fas fa-arrow-up"></i>
			</button>
			<span className="votes">{votes + likes}</span>
			<button name="down" onClick={handleDownVote} className="upvote-button btn">
				<i ref={downvote} className="fas fa-arrow-down"></i>
			</button>
		</div>
	);
}
