import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profileBanner from "../../public/profileBanner.png";
import Avatar from "../components/Avatar";
import { getAllUserPosts } from "../services/post-service";
import PostCard from "../components/PostCard";

const Profile = ({ user }) => {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		getAllUserPosts(user._id)
			.then((posts) => {
				setPosts(posts);
				setLoaded(true);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="w-full h-full overflow-auto py-4 shadow-2xl space-y-4 sm:border-x sm:border-info  sm:order-2 ">
			<div className="mb-5 sm:hidden">
				<Avatar />
			</div>
			<div className="flex gap-2 items-center cursor-pointer px-4" onClick={() => navigate(-1)}>
				<ArrowSmallLeftIcon className="h-8 text-white" />
				<h2 className="text-2xl font-bold text-black dark:text-slate-200">{user.name}</h2>
			</div>
			<div className="h-fit">
				<img src={profileBanner} alt="profileBanner" className="w-full" />
				<div className="-translate-y-20 translate-x-4 flex justify-between items-center px-4">
					<Avatar size={150} />
					<button className="btn border-black text-black btn-md btn-outline dark:border-white dark:text-slate-200 rounded-full -translate-x-4 translate-y-10">
						Edit Profile
					</button>
				</div>

				<div className="-translate-y-20 text-black dark:text-slate-200 px-4">
					<p className="text-3xl font-bold">{user.name}</p>
					<p className="text-xl">@{user.username}</p>
					<div className="flex gap-2 mt-2 text-slate-400">
						<p>
							<span className="text-primary">{user.follows.length}</span> Following
						</p>
						<p>
							<span className="text-primary">{user.followers.length}</span> Followers
						</p>
					</div>
					<div className="mt-10">
						<p className="text-center text-xl font-extrabold">Posts</p>
						<hr className="border-black border dark:border-slate-200" />
						<div className="space-y-4 mt-4">
							{loaded &&
								posts.map((post, idx) => {
									return <PostCard key={idx} post={post} />;
								})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
