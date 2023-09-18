import React from "react";
import PostCard from "../components/PostCard";
import { mockData } from "../constants";
import PostForm from "../components/PostForm";

const Feed = () => {
	return (
		<div className="w-full h-full overflow-x-scroll py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<img src="https://i.pravatar.cc/50" alt="" className="rounded-full" />
			</div>
			<h2 className="text-2xl font-bold">Home</h2>
			<PostForm />
			{mockData.map((post, idx) => (
				<section key={idx}>
					<PostCard
						code={post.code}
						description={post.description}
						language={post.language}
						avatar={post.avatar}
					/>
				</section>
			))}
		</div>
	);
};

export default Feed;
