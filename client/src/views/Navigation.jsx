import { ArrowSmallRightIcon, HomeIcon, MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import PostForm from "../components/PostForm";
import { AuthContext } from "../context/AuthContext";

const Navigation = (props) => {
	const {
		state: { user }
	} = useContext(AuthContext);
	const { logoutUser } = props;
	return (
		<div className="w-full min-h-min py-4 shadow-2xl sm:border-x sm:border-info sm:h-full sm:order-first sm:max-lg:w-20 lg:w-96">
			{/* Modal */}
			<dialog id="pushModal" className="modal">
				<div className="modal-box bg-[#284B63]">
					<PostForm />
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</div>
			</dialog>

			<div className="h-14 sm:flex sm:flex-col sm:h-full sm:justify-between">
				<div>
					<Link
						to="/home"
						className="hidden text-3xl font-bold mb-4 text-black dark:text-white lg:block sm:max-md:text-center md:ms-4">
						[Array]
					</Link>
					<Link
						to="/home"
						className="hidden text-3xl font-bold mb-4 text-black dark:text-white sm:max-lg:block lg:hidden sm:max-lg:text-center">
						[A]
					</Link>
					<ul className="w-full flex justify-between items-center px-12 sm:flex-col sm:space-y-4 sm:justify-start sm:p-0 lg:items-start md:p-0">
						<li className="rounded-full cursor-pointer p-0 flex gap-4 items-center lg:w-full lg:hover:bg-success lg:p-4  transition-colors ease-in-out duration-400">
							<HomeIcon className="h-10 text-black dark:text-white hover:text-success lg:hover:text-black lg:hover:dark:text-white " />
							<p className="hidden text-2xl text-black dark:text-white lg:block">Home</p>
						</li>
						<li className="rounded-full cursor-pointer flex gap-4 items-center p-0 lg:w-full lg:hover:bg-success lg:p-4  transition-colors ease-in-out duration-400">
							<UserCircleIcon className="h-10 text-black dark:text-white hover:text-success lg:hover:text-black lg:hover:dark:text-white" />
							<p className="hidden text-2xl text-black dark:text-white lg:block">Profile</p>
						</li>
						<li className="rounded-full cursor-pointer flex gap-4 items-center p-0 lg:w-full lg:hover:bg-success lg:p-4  transition-colors ease-in-out duration-400">
							<MagnifyingGlassIcon className="h-10 text-black dark:text-white hover:text-success lg:hover:text-black lg:hover:dark:text-white" />
							<p className="hidden text-2xl text-black dark:text-white lg:block">.filter()</p>
						</li>
					</ul>
					<div className="text-center mt-4 lg:block">
						<button
							className="hidden btn rounded-full lg:inline-block lg:w-3/4 btn-primary lowercase text-lg text-black"
							onClick={() => document.getElementById("pushModal").showModal()}>
							.push()
						</button>
						<ArrowSmallRightIcon className="hidden btn w-3/4 rounded-full bg-primary text-black sm:max-lg:inline-block" />
					</div>
				</div>
				<div className="dropdown dropdown-top hidden mx-auto text-sm  sm:block lg:ms-4 lg:w-full lg:h-min lg:flex lg:mx-0 lg:gap-4 lg:items-center">
					<label tabIndex={0} className="flex items-center gap-2 w-full cursor-pointer">
						<Avatar />
						<div className="hidden lg:block text-black dark:text-slate-200">
							<p>{user?.name}</p>
							<p>@{user?.username}</p>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="dropdown-content z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-52 -translate-y-4">
						<li>
							<button className="btn btn-sm" onClick={logoutUser}>
								Logout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
