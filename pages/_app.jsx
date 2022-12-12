/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";
import Airtable from "airtable";
import { useEffect, useState } from "react";
import Ingredients from "../src/components/Ingredients";

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export default function App({ Component, pageProps }) {
	const [ingredients, setIngredients] = useState([]);

	useEffect(() => {
		base("ingredients")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				console.log(records);
				setIngredients(records);
				fetchNextPage();
			});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Nav />
				<Component {...pageProps} />
				<div>
					<h1>Veggies</h1>
					{ingredients.map((ingredient) => (
						<Ingredients key={ingredient.id} ingredient={ingredient} />
					))}
				</div>
			</div>
		</ThemeProvider>
	);
}
