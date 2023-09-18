import CodeEditor from "@uiw/react-textarea-code-editor";
import { useState } from "react";
import { languages } from "../constants";

const PostForm = () => {
	const [code, setCode] = useState("");
	const [description, setDescription] = useState("");
	const [language, setLanguage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className="card shadow-xl w-full border-2 bg-[#284B63] bg-opacity-25">
			<div className="card-body flex-row w-full">
				<div className="w-full space-y-4">
					<div className="flex w-full gap-4">
						<img src="https://i.pravatar.cc/50" alt="" className="rounded-full" />
						<div>
							<p>Display Name @username</p>
							<p>Language: {language}</p>
						</div>
					</div>

					<form onSubmit={handleSubmit} className="form-control space-y-4">
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
								className="textarea textarea-xs bg-[#161B22] w-full shadow-md  rounded-xl"
								onChange={(e) => setDescription(e.target.value)}
								defaultValue={description}
								placeholder="Add a Description"></textarea>
						</div>
						<div className="flex justify-between items-center">
							<select
								name="language"
								id="language"
								className="select select-sm rounded-full bg-[#161B22]"
								placeholder="Select a Language"
								onChange={(e) => setLanguage(e.target.value)}>
								{languages.map((lang, idx) => (
									<option key={idx} value={lang}>
										Language: {lang}
									</option>
								))}
							</select>
							<div className="text-end">
								<button className="btn btn-sm btn-primary rounded-full lowercase">.push()</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PostForm;
