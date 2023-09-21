import Avatar from "./Avatar";

const UserListCard = ({ user }) => {
	return (
		<div className="text-black flex gap-2 p-2 cursor-pointer dark:text-slate-200 hover:bg-primary hover:bg-opacity-10 first:hover:rounded-t-xl last:hover:rounded-b-xl">
			<Avatar />
			<div>
				<p>{user.name}</p>
				<p className="text-sm">@{user.username}</p>
			</div>
		</div>
	);
};

export default UserListCard;
