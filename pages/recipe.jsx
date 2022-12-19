/** @jsx jsx */
import { jsx } from "theme-ui";
import { Recipes } from "../src/components/Recipes";

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
				<Recipes />
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
