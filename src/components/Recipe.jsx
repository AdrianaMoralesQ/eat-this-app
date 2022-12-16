/** @jsx jsx */
import { Table } from "../../Styled Components";
import { jsx } from "theme-ui";
import { Card, TableHead } from "../../Styled Components";

export const Recipe = ({ title, content, description }) => {
	// if (!content) return null;
	console.log(content);
	return (
		<div sx={{ variant: "containers.page" }}>
			<h1>My Recipes</h1>
			<h2>{title}</h2>
			<p>{description}</p>
			<div
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				{content?.map((recipe) => (
					<h3>{recipe.recipeName}</h3>
				))}
				<Table className="Ingredients">
					<tr>
						<TableHead>Ingredients</TableHead>
						<TableHead>Portion</TableHead>
						<TableHead>Unit</TableHead>
					</tr>
					{/* {content.map((recipe) => (
						<tr>
							<td> {recipe.ingredient}</td>
							<td> {recipe.portion}</td>
							<td> {recipe.unit}</td>
						</tr>
					))} */}
				</Table>
			</div>
		</div>
	);
};

// export async function getServerSideProps() {
// 	const res = await fetch(`http://localhost:3000/api/recipe`);
// 	const { data } = await res.json();

// 	return {
// 		props: { recipes: data },
// 	};
// }
