import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Eat This - My Eats</title>
				<meta
					name="description"
					content="Born from the need to store daily recipes in a single place, this personal project features two main pages - My Eats, containing recommended portions per food group and My Recipes, containing nutritionist approved recipes."
				/>
				<meta
					property="og:url"
					content="https://eat-this-app.vercel.app/recipe"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
