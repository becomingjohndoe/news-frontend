import { Link } from "react-router-dom";
import UserAvatar from "./UserInfo";
import { DropdownButton, Dropdown } from "react-bootstrap";
export default function Nav() {
	return (
		<nav className="navbar fixed-top">
			<div className="nav-items">
				<Link to="/">
					{/* <img className="logo" src={logo} alt="logo" /> */}
					<span className="logo">topp</span>
					<span className="logo-i">i</span>
					<span className="logo">t</span>
				</Link>
				<DropdownButton
					title={
						<i class="fas fa-home">
							{" "}
							<span>Home</span>
						</i>
					}
					id="dropdown-menu-align-responsive-1"
					drop="down"
					align={{ lg: "end" }}
				>
					<Dropdown.Item>Hello there!</Dropdown.Item>
				</DropdownButton>
			</div>
			<Link to="/">
				<UserAvatar username="jessjelly" />
			</Link>
		</nav>
	);
}
