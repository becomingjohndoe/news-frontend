import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="navbar">
			<Link to="/">LOGO</Link>
			<Link to="/">USER</Link>
		</nav>
	);
}
