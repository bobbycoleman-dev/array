import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import Avatar from "./Avatar";

const PostCard = (props) => {
	const { code, description, language } = props;

	return (
		<div className="card cursor-pointer shadow-xl w-full border-2 bg-[#284B63] bg-opacity-25">
			<div className="card-body flex-row w-full">
				<div className="w-full space-y-4">
					<div className="flex w-full gap-4 text-black dark:text-slate-200">
						<Avatar />
						<div>
							<p>Display Name @username</p>
							<p>Language: {language}</p>
						</div>
					</div>
					<CodeEditor
						className="rounded-xl w-full text-sm shadow-md"
						value={code}
						language={language}
						padding={20}
						disabled
					/>
					<div className="bg-white text-black dark:bg-[#161B22] dark:text-slate-200 w-full text-sm shadow-md p-4 rounded-xl">
						<p>{description}</p>
					</div>
					<div className="flex justify-between text-black dark:text-slate-200">
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
