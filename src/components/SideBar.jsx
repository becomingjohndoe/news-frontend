import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllTopics } from "../utils/api";
export default function SideBar() {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getAllTopics().then((res) => {
			setTopics(res);
		});
		// cleanup
		return () => {
			setTopics([]);
		};
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebar-header">Topics</div>
			<div className="sidebar-topics">
				{topics.map((topic) => (
					<div className="topic" key={topic.slug}>
						<Link to={`/articles/topic/${topic.slug}`}>t/{topic.slug}</Link>
					</div>
				))}
				<button className="sidebar-button btn btn-primary">View all</button>
			</div>
		</div>
	);
}
