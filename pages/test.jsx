/** @jsx jsx */
import { jsx } from "theme-ui";
import { Recipe } from "../src/components/Recipe";

export default ({ content }) => {
	return (
		<div sx={{ height: `calc(100vh - 60px)` }}>
			<div
				sx={{
					variant: "containers.page",
					alignItems: "center",
					height: "100%",
				}}
			>
				<h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
				<Recipe />
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: {
			content: {
				title: "My Recipes 🥑",
			},
		},
	};
}
// const Test = () => {
// 	return (
// 		<div>
// 			<h1>These are your recipes:</h1>
// 			<Recipe />
// 		</div>
// 	);
// };

// export default Test;
