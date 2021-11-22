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
