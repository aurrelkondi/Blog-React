import "./singlePost.css";

export default function SinglePost() {
	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				<img
					className="singlePostImg"
					src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
				<p className="singlePostDescription">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non sit illo
					in reprehenderit eos nihil magnam nisi dolores expedita adipisci
					blanditiis modi ipsam labore fuga ea consectetur esse iste, optio
					aspernatur natus. Possimus, architecto nam exercitationem assumenda
					fugit doloremque officia debitis aliquid expedita molestiae alias
					repellendus omnis nostrum dolorum earum. Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. In recusandae ducimus esse veniam alias
					culpa, optio doloribus placeat tempora, iusto minima quis corrupti,
					unde maiores itaque cupiditate at dignissimos. Autem quisquam totam,
					quam dolores veniam dolor. Quaerat illum nostrum officiis atque quam
					vitae, voluptatem labore corrupti, hic numquam itaque esse! Delectus
					iste libero autem! Ad molestias eum possimus sint saepe reiciendis at
					iusto quidem nemo, commodi error laudantium dolorem dolorum omnis
					officiis laboriosam repellendus labore id dolores, ab sequi beatae
					quaerat pariatur. Perferendis error doloribus amet voluptas autem
					aliquam saepe tempore illum, omnis odit ducimus hic harum laborum.
					Nihil, nam.
				</p>
			</div>
		</div>
	);
}
