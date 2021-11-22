import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getAllArticles().then((articles) => setArticles(articles));
	}, []);
	return (
		<div className="articles">
			<h1>Articles</h1>
			{articles.map((article) => {
				return <ArticleCard key={article.article_id} article={article} />;
			})}
		</div>
	);
}
