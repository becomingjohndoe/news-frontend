import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleComments from "./ArticleComments";
import loadingIcon from "../images/toppit(3).gif";
export default function SingleArticle() {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			getArticleById(article_id).then(setArticle);
			setIsLoading(false);
		}, 1000);
	}, [article_id]);
	if (isLoading || article.length === 0) {
		return (
			<div className="loading-icon-container">
				<img className="loading-icon" src={loadingIcon} alt="is-loading" />
			</div>
		);
	}
	return (
		<>
			<ArticleCard article={article} bodyClass="article-body-full" />
			<ArticleComments article_id={article_id} />
		</>
	);
}
