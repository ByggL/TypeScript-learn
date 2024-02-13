import React, { useState } from "react";
import "react-dom/client";
import "./App.css";

function App() {
	const [finalResult, setResult] = useState();

	return (
		<div className="App">
			<body className="App-header">
				<h1>TypeScript Calculator</h1>
				<form
					onSubmit={(e: React.SyntheticEvent) => {
						e.preventDefault();
						const target = e.target as typeof e.target & {
							val1: { value: number };
							val2: { value: number };
							operator: { value: string };
						};
						const val1 = target.val1.value; // typechecks!
						const val2 = target.val2.value; // typechecks!
						const op = target.operator.value;
						let result: any = 0;

						switch (op) {
							case "add":
								result = val1 + val2;
								break;
							case "sub":
								result = val1 - val2;
								break;
							case "mult":
								result = val1 * val2;
								break;
							case "div":
								result = val1 / val2;
								break;
						}

						setResult(result);
					}}>
					<fieldset>
						<input type="number" name="val1"></input>
						<select id="operator" name="operator">
							<option value="add">+</option>
							<option value="sub">-</option>
							<option value="mult">x</option>
							<option value="div">/</option>
						</select>
						<input type="number" name="val2"></input>

						<input type="submit" value="="></input>
					</fieldset>
				</form>

				<div>
					<p id="result">{finalResult}</p>
				</div>
			</body>
		</div>
	);
}

export default App;
