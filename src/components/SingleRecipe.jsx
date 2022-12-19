/** @jsx jsx */
import { RecipeIngredients, Show } from "../../Styled Components";
import { jsx } from "theme-ui";
import { Card, TableHead } from "../../Styled Components";
import { useState } from "react";

export const SingleRecipe = ({ title, content, description }) => {
	// if (!content) return null;
	const [isOpen, setIsOpen] = useState(false);

	function toggleVisibility() {
		setIsOpen(!isOpen);
	}

	console.log(content);

	return (
		<div sx={{ variant: "containers.card" }}>
			<h2>{title}</h2>
			<p>{description}</p>
			<Show onClick={toggleVisibility}>Recipes</Show>
			{isOpen && (
				<div>
					{content.map((recipe) => (
						<>
							<h3>{recipe.recipeName}</h3>
							<RecipeIngredients>
								<table>
									<tr>
										<TableHead>Ingredients</TableHead>
										{/* <TableHead>Portion</TableHead>
										<TableHead>Unit</TableHead> */}
										<TableHead>Instructions</TableHead>
									</tr>
									<tr>
										<td>{recipe.ingredientName + ","}</td>
										{/* <td>{recipe.ingredientPortion + ",  "}</td>
										<td>{recipe.ingredientUnit + ",  "}</td> */}
										<td>{recipe.instructions}</td>
									</tr>
								</table>
							</RecipeIngredients>
						</>
					))}
				</div>
			)}
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
