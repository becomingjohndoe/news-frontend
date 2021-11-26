import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes } from "react-router-dom";
import Topic from "./components/Topic";
import NotFound from "./components/NotFound";

function App() {
	return (
		<div className="App">
			<Nav />
			<div className="main">
				<Routes>
					<Route path="/" element={<Articles />} />
					<Route path="/articles/:article_id" element={<SingleArticle />} />
					<Route path="/articles/topic/:topic" element={<Topic />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
