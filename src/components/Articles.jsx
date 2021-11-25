import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Controls from "./Controls";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [sortBy, setSortBy] = useState("created_at");
	useEffect(() => {
		getAllArticles(sortBy).then((articles) => setArticles(articles));
	}, [sortBy]);
	return (
		<div className="articles">
			<h6 className="">Popular posts</h6>
			<Controls setSortBy={setSortBy} />
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
