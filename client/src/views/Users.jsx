import { useEffect, useState } from "react";
import { getAllUsers } from "../services/user-service";
import Avatar from "../components/Avatar";
import UserListCard from "../components/UserListCard";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [filteredUser, setFilteredUser] = useState([]);

	useEffect(() => {
		getAllUsers()
			.then((users) => setUsers(users))
			.catch((err) => console.log(err));
	}, []);

	const findUser = (e) => {
		const value = e.target.value;
		const filtered = users.filter((user) => user.name.includes(value));
		setFilteredUser(filtered);
	};

	return (
		<div className="w-full min-h-full hidden border-x border-info py-4 px-4 shadow-2xl lg:block lg:w-96 lg:order-last">
			<div>
				<input
					type="search"
					className="rounded-full w-full h-8 px-4 shadow-xl text-black"
					placeholder=".find()"
					onChange={findUser}
				/>
			</div>
			<div className="mt-4 space-y-2 shadow-xl rounded-xl">
				{filteredUser.length > 0
					? filteredUser.map((user, idx) => {
							return <UserListCard key={idx} user={user} />;
					  })
					: users.map((user, idx) => {
							return <UserListCard key={idx} user={user} />;
					  })}
			</div>
		</div>
	);
};

export default Users;
