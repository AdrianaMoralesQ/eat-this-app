/** @jsx jsx */
import { RecipeIngredients, Show } from "../../Styled Components";
import { jsx } from "theme-ui";
import { Card, TableHead } from "../../Styled Components";
import { useState } from "react";

export const SingleRecipe = ({ title, content, description }) => {
	if (!content) return null;
	const [isOpen, setIsOpen] = useState(false);

	function toggleVisibility() {
		setIsOpen(!isOpen);
	}

	return (
		<div sx={{ variant: "containers.card" }}>
			<h2>{title}</h2>
			<p>{description}</p>
			<Show onClick={toggleVisibility}>Recipes</Show>
			{isOpen && (
				<div>
					{content.map((recipe) => (
						<Card sx={{ variant: "containers.card" }}>
							<h3>{recipe.recipeName}</h3>
							<RecipeIngredients>
								{/* <table>
									<tr>
										<TableHead>Ingredients</TableHead>
										<TableHead>Instructions</TableHead>
									</tr>
									<tr>
										<td>{recipe.ingredientsFromRecipeLong}</td>
										<td >{recipe.instructions}</td>
									</tr>
								</table> */}
								<div>
									<h4>Ingredients:</h4>
									<p>{recipe.ingredientsFromRecipeLong}</p>
								</div>
								<div>
									<h4>Instructions:</h4>
									<p>{recipe.instructions}</p>
								</div>
							</RecipeIngredients>
						</Card>
					))}
				</div>
			)}
		</div>
	);
};
