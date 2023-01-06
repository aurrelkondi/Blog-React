import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
	const user = true;
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook"></i>
				<i className="topIcon fa-brands fa-twitter"></i>
				<i className="topIcon fa-brands fa-pinterest"></i>
				<i className="topIcon fa-brands fa-square-instagram"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItem">
						<Link className="link" to="/">
							HOME
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/about">
							ABOUT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/contact">
							CONTACT
						</Link>
					</li>
					<li className="topListItem">
						<Link className="link" to="/write">
							WRITE
						</Link>
					</li>
					<li className="topListItem">{user && "LOGOUT"}</li>
				</ul>
			</div>
			<div className="topRight">
				{user ? (
					<img
						className="topImg "
						src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
						alt=""
					/>
				) : (
					<ul className="topList">
						<li className="topListItem">
							<Link className="link" to="/login">
								LOGIN
							</Link>
						</li>
						<li className="topListItem">
							<Link className="link" to="/register">
								REGISTER
							</Link>
						</li>
					</ul>
				)}

				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
