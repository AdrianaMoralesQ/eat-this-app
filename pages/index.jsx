/** @jsx jsx */
import { jsx } from "theme-ui";
import Food, { Ingredients } from "../src/components/food";
import Airtable from "airtable";

export default ({ content }) => {
	// console.log(content.ingredients);
	return (
		<div sx={{ height: `calc(100vh - 60px)` }}>
			<div
				sx={{
					variant: "containers.page",
					// display: "flex",
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
	// const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	// 	"appgMqu4ah8WXhmEY"
	// );
	// const ingredients = base("ingredients")
	// 	.select({ view: "Grid view" })
	// 	.eachPage((records, fetchNextPage) => {
	// 		return records;
	// 		// fetchNextPage();
	// 	});

	// console.log("ingredients", ingredients);

	return {
		props: {
			content: {
				title: "Your Portions 🥑",
				// ingredients,
			},
		},
	};
}

// export async function getStaticProps() {
//   return {
//     props: {
//       content: {
//         title: { Food }
//       }
//     }
//   }
// }
