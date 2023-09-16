import { refractor } from "refractor/lib/core.js";

export const languages = refractor.listLanguages().sort();

export const mockData = [
	{
		code: "function multiply(a, b) {\n\treturn a * b\n}",
		description: "A function that takes in two parameters and multiplies them",
		language: "js",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "def add(a, b): \n\treturn a * b\n",
		description: "A function that takes in two parameters and adds them",
		language: "python",
		avatar: "https://i.pravatar.cc/50"
	},
	{
		code: "func subtract(a, b) {\n\treturn a - b\n}",
		description: "A function that takes in two parameters and subtracts them",
		language: "swift",
		avatar: "https://i.pravatar.cc/50"
	}
];
