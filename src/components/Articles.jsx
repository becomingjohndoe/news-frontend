import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Controls from "./Controls";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getAllArticles().then((articles) => setArticles(articles));
	}, []);
	return (
		<div className="articles">
			<h1 className="App-header">Articles</h1>
			<Controls />
			{articles.map((article) => {
				return (
					<ArticleCard
						key={article.article_id}
						article={article}
						bodyClass="article-body"
					/>
				);
			})}
		</div>
	);
}
