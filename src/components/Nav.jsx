import { Link } from "react-router-dom";
import UserAvatar from "./UserInfo";
export default function Nav() {
	return (
		<nav className="navbar">
			<Link to="/">
				{/* <img className="logo" src={logo} alt="logo" /> */}
				<span className="logo">topp</span>
				<span className="logo-i">i</span>
				<span className="logo">t</span>
			</Link>
			<Link to="/">
				<UserAvatar username="jessjelly" />
			</Link>
		</nav>
	);
}
