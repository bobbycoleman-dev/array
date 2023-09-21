import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { useContext, useState } from "react";
import { languages } from "../constants";
import { AuthContext } from "../context/AuthContext";
import Avatar from "./Avatar";
import { createPost } from "../services/post-service";
import { useNavigate } from "react-router-dom";

const PostForm = ({ updateDom }) => {
	const navigate = useNavigate();
	const {
		state: { user }
	} = useContext(AuthContext);
	const [code, setCode] = useState("");
	const [description, setDescription] = useState("");
	const [language, setLanguage] = useState("");
	const selected = "Select Language";

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newPost = {
			code: code,
			description: description,
			language: language,
			poster: user._id
		};

		createPost(newPost)
			.then((post) => {
				console.log(post);
				updateDom(post);
			})
			.catch((err) => console.log(err));
		setCode("");
		setDescription("");
		setLanguage("");
	};

	return (
		<div className="card w-full bg-[#284B63] bg-opacity-25">
			<div className="card-body flex-row w-full">
				<div className="w-full space-y-4">
					<div className="flex w-full gap-4 text-black dark:text-slate-200">
						<Avatar />
						<div>
							<p>
								{user?.name} @{user?.username}
							</p>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="form-control space-y-4" method="dialog">
						<CodeEditor
							className="rounded-xl w-full text-sm shadow-md max-h-60 overflow-y-scroll"
							value={code}
							language={language}
							padding={20}
							onChange={(e) => setCode(e.target.value)}
							placeholder="Enter Code"
							style={{
								overflow: "scroll"
							}}
						/>
						<div>
							<textarea
								name="description"
								className="textarea textarea-xs bg-white text-black dark:bg-[#161B22] dark:text-slate-200 w-full shadow-md  rounded-xl"
								onChange={(e) => setDescription(e.target.value)}
								value={description}
								placeholder="Add a Description"></textarea>
						</div>
						<div className="flex justify-between items-center">
							<select
								name="language"
								id="language"
								className="select select-sm rounded-full w-40 bg-white text-black dark:bg-[#161B22] dark:text-slate-200"
								defaultValue={selected}
								onChange={(e) => setLanguage(e.target.value)}>
								<option disabled value={selected}>
									Select Language
								</option>
								{languages.map((lang, idx) => (
									<option key={idx} value={lang}>
										{lang}
									</option>
								))}
							</select>
							<div className="text-end">
								<button className="hidden btn btn-sm btn-primary rounded-full lowercase sm:inline-block">
									.push()
								</button>
								<ArrowSmallRightIcon className="btn w-3/4 rounded-full btn-primary btn-sm sm:hidden" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PostForm;
