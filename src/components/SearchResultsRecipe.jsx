/** @jsx jsx */
import { Card, Table, TableHead } from "../../Styled Components";
import { jsx } from "theme-ui";

export const SearchResultsRecipe = ({ title, content }) => {
	return (
		<Card sx={{ variant: "containers.card" }}>
			<h2>{title}</h2>
			<Table className="Ingredients">
				<tr>
					<TableHead>Recipe</TableHead>
					<TableHead>Instructions</TableHead>
					<TableHead>Type</TableHead>
				</tr>
				{content.map((recipe) => (
					<tr>
						<td> {recipe.recipeName}</td>
						<td> {recipe.instructions}</td>
						<td>{recipe.type}</td>
					</tr>
				))}
			</Table>
		</Card>
	);
};
