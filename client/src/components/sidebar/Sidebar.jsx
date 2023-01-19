import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./sidebar.css";

export default function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async () => {
			const res = await axios.get("/categories");
			setCats(res.data);
		};
		getCats();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img
					className="aboutMeImg"
					src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
					alt=""
				/>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia magnam
					perspiciatis cupiditate, impedit earum iure.
				</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c) => (
						<li className="sidebarListItem">{c.name}</li>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook"></i>
					<i className="sidebarIcon fa-brands fa-twitter"></i>
					<i className="sidebarIcon fa-brands fa-pinterest"></i>
					<i className="sidebarIcon fa-brands fa-square-instagram"></i>
				</div>
			</div>
		</div>
	);
}
