import { create } from "axios";

// axios create
const api = create({
	baseURL: "https://news-nc-api.herokuapp.com/api/",
});

export const getAllArticles = () => {
	return api.get("articles").then((res) => {
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
