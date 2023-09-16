import { HomeIcon, UserCircleIcon, MagnifyingGlassIcon, ArrowSmallRightIcon } from "@heroicons/react/24/solid";

const Navigation = () => {
	return (
		<div className="w-full min-h-16 py-4 shadow-2xl sm:border-x sm:border-info  sm:order-first sm:max-lg:w-20 lg:w-1/2 ">
			<div className="h-full sm:flex sm:flex-col sm:justify-between ">
				<div>
					<h1 className="hidden text-3xl font-bold mb-4 text-black dark:text-white lg:block sm:max-md:text-center md:ms-4">
						[Array]
					</h1>
					<h1 className="hidden text-3xl font-bold mb-4 text-black dark:text-white sm:max-lg:block lg:hidden sm:max-lg:text-center">
						[A]
					</h1>
					<ul className="flex justify-between  items-center px-12 space-y-3 sm:flex-col sm:p-0 lg:items-start md:p-0 ">
						<li className="flex gap-4 items-center lg:w-full p-3 lg:hover:bg-success  transition-colors ease-in-out duration-400">
							<HomeIcon className="h-10 hover:text-success text-black dark:text-white" />
							<p className="hidden text-2xl text-black dark:text-white lg:block">Home</p>
						</li>
						<li className="flex gap-4 items-center p-3 lg:w-full lg:hover:bg-success transition-colors ease-in-out duration-400">
							<UserCircleIcon className="h-10 hover:text-success text-black dark:text-white" />
							<p className="hidden text-2xl text-black dark:text-white lg:block">Profile</p>
						</li>
						<li className="flex gap-4 items-center p-3 lg:w-full lg:hover:bg-success  transition-colors ease-in-out duration-400">
							<MagnifyingGlassIcon className="h-10 hover:text-success text-black dark:text-white" />
							<p className="hidden text-2xl text-black dark:text-white lg:block">.filter()</p>
						</li>
					</ul>
					<div className="text-center mt-4 lg:block">
						<button className="hidden btn rounded-full lg:inline-block lg:w-3/4 bg-emerald-600 lowercase text-lg">
							.push()
						</button>
						<ArrowSmallRightIcon className="hidden btn w-3/4 rounded-full bg-emerald-600 sm:max-lg:inline-block" />
					</div>
				</div>
				<div className="hidden mx-auto sm:block lg:ms-4 lg:flex lg:gap-4">
					<img src="https://i.pravatar.cc/50" alt="" className="rounded-full" />
					<div className="hidden lg:block">
						<p>Display Name</p>
						<p>@username</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
