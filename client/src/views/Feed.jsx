import React from "react";
import PostCard from "../components/PostCard";
import { mockData } from "../constants";
import PostForm from "../components/PostForm";
import Avatar from "../components/Avatar";

const Feed = () => {
	return (
		<div className="w-full h-full overflow-auto py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<h2 className="text-2xl font-bold text-black dark:text-slate-200">Home</h2>
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
