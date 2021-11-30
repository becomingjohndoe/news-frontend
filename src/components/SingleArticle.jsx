import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import ArticleComments from "./ArticleComments";
import loadingIcon from "../images/toppit(3).gif";
import NotFound from "./NotFound";
import SideBar from "./SideBar";
export default function SingleArticle() {
	const [article, setArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [err, setErr] = useState(null);
	const { article_id } = useParams();
	useEffect(() => {
		setIsLoading(true);
		setTimeout(() => {
			getArticleById(article_id)
				.then((data) => {
					setArticle(data);
					setIsLoading(false);
				})
				.catch((err) => {
					setIsLoading(false);
					setErr(err);
				});
			window.scrollTo(0, 0);
		}, 700);
	}, [article_id]);
	if (err) {
		return <NotFound />;
	}
	if (isLoading || article.length === 0) {
		return (
			<div className="loading-icon-container">
				<img className="loading-icon" src={loadingIcon} alt="is-loading" />
			</div>
		);
	}
	return (
		<>
			<div className="articles">
				<ArticleCard article={article} bodyClass="article-body-full" />
			</div>
			<ArticleComments article_id={article_id} />
			<SideBar />
		</>
	);
}
