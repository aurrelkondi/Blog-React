import "./topbar.css";

export default function TopBar() {
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
					<li className="topListItem">HOME</li>
					<li className="topListItem">ABOUT</li>
					<li className="topListItem">CONTACT</li>
					<li className="topListItem">WRITE</li>
					<li className="topListItem">LOGOUT</li>
				</ul>
			</div>
			<div className="topRight">
				<img
					className="topImg "
					src="https://images.unsplash.com/photo-1581263518256-ba4a28ed5517?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
					alt=""
				/>
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
