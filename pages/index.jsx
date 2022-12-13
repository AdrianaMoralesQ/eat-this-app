/** @jsx jsx */
import { jsx } from "theme-ui";
import { Ingredients } from "../src/components/food";

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

				<Ingredients />
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: {
			content: {
				title: "Your Portions 🥑",
			},
		},
	};
}
