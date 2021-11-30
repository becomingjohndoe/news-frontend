import { useEffect, useState } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Controls from "./Controls";
import loadingIcon from "../images/toppit(3).gif";
import SideBar from "./SideBar";
import PostArticle from "./PostArticle";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(2);
	const [sortBy, setSortBy] = useState("created_at");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		function handleScroll() {
			if (
				window.innerHeight + document.documentElement.scrollTop ===
				document.documentElement.offsetHeight
			) {
				getAllArticles(sortBy, page)
					.then((data) => {
						setArticles((current) => {
							return [...current, ...data];
						});
						setPage((currentPage) => {
							return currentPage + 1;
						});
					})
					.catch((err) => {});
			}
		}

		window.addEventListener("scroll", handleScroll);

		// cleanup function
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [sortBy, page]);

	useEffect(() => {
		setIsLoading(true);

		getAllArticles(sortBy, 1)
			.then((data) => {
				setArticles(data);
				setIsLoading(false);
			})
			.catch((err) => {});
		// cleanup function
		return () => {
			setIsLoading(false);
		};
	}, [sortBy]);

	if (isLoading) {
		return (
			<div className="loading-icon-container">
				<img className="loading-icon" src={loadingIcon} alt="is-loading" />
			</div>
		);
	}
	return (
		<>
			<div className="articles">
				<PostArticle />
				<Controls setSortBy={setSortBy} setPage={setPage} />
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
			<SideBar />
		</>
	);
}
