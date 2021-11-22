import "./App.css";
import Articles from "./components/Articles";
import Nav from "./components/Nav";
import SingleArticle from "./components/SingleArticle";
import { Route, Routes } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Nav />

			<Routes>
				<Route path="/" element={<Articles />} />
				<Route path="/articles/:article_id" element={<SingleArticle />} />
			</Routes>
		</div>
	);
}

export default App;
