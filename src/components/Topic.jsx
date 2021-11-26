import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Controls from "./Controls";
import NotFound from "./NotFound";
import loadingIcon from "../images/toppit(3).gif";
export default function Topic() {
	const { topic } = useParams();
	const [articles, setArticles] = useState([]);
	const [err, setErr] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		getArticlesByTopic(topic)
			.then((article) => {
				setIsLoading(false);
				setArticles(article);
			})
			.catch((err) => {
				setIsLoading(false);
				setErr(err);
			});
	}, [topic]);
	if (err) {
		return <NotFound />;
	}
	if (isLoading || articles.length === 0) {
		return (
			<div className="loading-icon-container">
				<img className="loading-icon" src={loadingIcon} alt="is-loading" />
			</div>
		);
	}
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
