import "./post.css";

export default function Post() {
	return (
		<div className="post">
			<img
				className="postImg"
				src="https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
				alt=""
			/>
			<div className="postInfo">
				<div className="postCats">
					<span className="postCat">Music</span>
					<span className="postCat">Life</span>
				</div>
				<span className="postTitle">
					{" "}
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</span>
				<hr />
				<span className="postDate">1 hour ago</span>
			</div>
			<p className="postDescription">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
				perspiciatis nisi fugiat doloremque quibusdam dolore porro sequi modi
				alias, dolorem rem reiciendis velit! Molestiae at minus voluptas,
				repellendus consectetur nihil laudantium. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Quas perspiciatis nisi fugiat doloremque
				quibusdam dolore porro sequi modi alias, dolorem rem reiciendis velit!
				Molestiae at minus voluptas, repellendus consectetur nihil laudantium.
			</p>
		</div>
	);
}
