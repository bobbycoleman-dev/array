const Users = () => {
	return (
		<div className="w-full min-h-full hidden border-x border-info py-4 px-4 shadow-2xl lg:block lg:w-96 lg:order-last">
			<div>
				<input
					type="search"
					name="search"
					id="search"
					className="rounded-full w-full h-8 px-4 shadow-xl"
					placeholder=".find()"
				/>
			</div>
		</div>
	);
};

export default Users;
