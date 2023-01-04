import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					src="https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
					alt=""
				/>
				<h1 className="singlePostTitle">
					Lorem ipsum dolor sit amet.
					<div className="singlePostEdit">
						<i className="singlePostIcon fa-regular fa-pen-to-square"></i>
						<i className="singlePostIcon fa-regular fa-trash-can"></i>
					</div>
				</h1>
				<div className="singlePostInfo">
					<span className="singlePostAuthor">
						Author: <b>Aurrel</b>{" "}
					</span>
					<span className="singlePostDate">1 hour ago</span>
				</div>
			</div>
		</div>
	);
}
