import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function SingleArticle() {
	const [article, setArticle] = useState([]);
	const { article_id } = useParams();
	useEffect(() => {
		getArticleById(article_id).then((article) => {
			setArticle(article);
		});
	}, [article_id]);
	return <ArticleCard article={article} />;
}
