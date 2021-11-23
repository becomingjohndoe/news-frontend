import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Controls from "./Controls";

export default function Topic() {
	const { topic } = useParams();
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		getArticlesByTopic(topic).then((article) => {
			setArticles(article);
		});
	}, [topic]);
	return (
		<div className="articles">
			<h1 className="App-header">{topic}</h1>
			<Controls />
			{articles.map((article) => {
				return (
					<ArticleCard
						key={article.article_id}
						article={article}
						bodyClass="article-body"
						linkClass="disabled-link"
					/>
				);
			})}
		</div>
	);
}
