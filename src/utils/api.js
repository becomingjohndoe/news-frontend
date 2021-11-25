import { create } from "axios";

// axios create
const api = create({
	baseURL: "https://news-nc-api.herokuapp.com/api/",
});

export const getAllArticles = (sort_by) => {
	return api
		.get("articles", {
			params: { sort_by },
		})
		.then((res) => {
			return res.data.articles;
		});
};

export const getArticleById = (id) => {
	return api.get(`articles/${id}`).then((res) => {
		return res.data.article;
	});
};

export const getArticleComments = (id) => {
	return api.get(`articles/${id}/comments`).then((res) => {
		return res.data.comments;
	});
};

export const getUserByUsername = (username) => {
	return api
		.get(`users/${username}`)
		.then((res) => {
			return res.data.user;
		})
		.catch(console.log);
};

export const getArticlesByTopic = (topic) => {
	return api
		.get(`articles?topic=${topic}`)
		.then((res) => {
			return res.data.articles;
		})
		.catch(console.log);
};

export const patchArticleVotes = (id, votes) => {
	return api.patch(`articles/${id}`, { inc_votes: votes }).then((res) => {
		return res.data.article;
	});
};

export const postComment = (id, comment) => {
	return api.post(`articles/${id}/comments`, comment).then((res) => {
		return res.data.comment;
	});
};

export const deleteComment = (comment_id) => {
	return api.delete(`comments/${comment_id}`).then((res) => {
		return res.data.comment;
	});
};
