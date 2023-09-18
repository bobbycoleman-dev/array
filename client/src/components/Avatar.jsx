import React from "react";
import placeholderAvatar from "../assets/placeholder-avatar.jpg";

const Avatar = () => {
	return (
		<div className="avatar">
			<div className="w-12 rounded-full">
				<img src={placeholderAvatar} />
			</div>
		</div>
	);
};

export default Avatar;
