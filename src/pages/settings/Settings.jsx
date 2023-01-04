import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
	return (
		<div className="settings">
			<div className="settingsWrapper">
				<div className="settingsTitle">
					<span className="settingsUpdateTitle">Update your Account</span>
					<span className="settingsDeleteTitle">Delete Account</span>
				</div>
				<form className="settingsForm">
					<label>Profile Picture</label>
					<div className="settingsPP">
						<img
							src="https://images.unsplash.com/photo-1631233859262-0d7b12ea7d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
							alt=""
						/>
						<label htmlFor="fileInput">
							<i className="settingsPPIcon fa-regular fa-user"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
					</div>
					<label>Username</label>
					<input type="text" placeholder="Aurrel" />
					<label>Email</label>
					<input type="email" placeholder="aurrelkondi@hotmail.com" />
					<label>Password</label>
					<input type="password" />
					<button className="settingsSubmit">Update</button>
				</form>
			</div>
			<Sidebar />
		</div>
	);
}
