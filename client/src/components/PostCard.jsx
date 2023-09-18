import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";

const PostCard = (props) => {
	const { code, description, language, avatar } = props;

	return (
		<div className="card shadow-xl w-full border-2 bg-[#284B63] bg-opacity-25">
			<div className="card-body flex-row w-full">
				<div className="w-14">
					<img src={avatar} alt="" className="rounded-full" />
				</div>
				<div className="w-full space-y-4">
					<div className="flex w-1/2">
						<p>Display Name</p>
						<p>@username</p>
					</div>
					<CodeEditor
						className="rounded-xl w-full text-sm shadow-md"
						value={code}
						language={language}
						padding={20}
						disabled
					/>
					<div className="bg-[#161B22] w-full text-sm shadow-md p-4 rounded-xl">
						<p>{description}</p>
					</div>
					<div className="flex justify-between">
						<p>
							comments <span className="badge badge-primary badge-sm">+99</span>
						</p>
						<p className="text-end">
							likes <span className="badge badge-primary badge-sm">+200</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostCard;
