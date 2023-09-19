import { collection, doc, increment, onSnapshot, orderBy, query, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { db } from "../firebase";

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
		const unsubscribe = onSnapshot(q, (querySnapshot) => {
			let postsArr = [];
			querySnapshot.forEach((doc) => {
				postsArr.push({ ...doc.data(), id: doc.id });
			});
			setPosts(postsArr);
		});
		return () => unsubscribe;
	}, []);

	const updateLikeCount = async (postId) => {
		const docRef = doc(db, "posts", postId);
		await updateDoc(docRef, {
			likes: increment(1)
		});
	};

	return (
		<div className="w-full h-full overflow-auto py-4 px-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<h2 className="text-2xl font-bold text-black dark:text-slate-200">Home</h2>
			<PostForm />
			{posts.map((post, idx) => (
				<section key={idx}>
					<PostCard
						code={post.code}
						description={post.description}
						language={post.language}
						avatar={post.avatar}
						posterPath={post.poster}
						comments={post.comments}
						likes={post.likes}
						postId={post.id}
						updateLikeCount={updateLikeCount}
					/>
				</section>
			))}
		</div>
	);
};

export default Feed;
