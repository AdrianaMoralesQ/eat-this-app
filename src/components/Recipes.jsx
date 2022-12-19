import { Wrapper } from "../../Styled Components";
import { useEffect, useState } from "react";
import Airtable from "airtable";
import { SingleRecipe } from "./SingleRecipe";
import { SearchResultsRecipe } from "./SearchResultsRecipe";

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export function Recipes() {
	const [recipesFromAirtable, setRecipesFromAirtable] = useState([]);
	const [userInput, setUserInput] = useState("");

	const Lunch = recipesFromAirtable.filter((recipe) => recipe.type === "lunch");
	const Breakfast = recipesFromAirtable.filter(
		(recipe) => recipe.type === "breakfast"
	);
	const Dinner = recipesFromAirtable.filter(
		(recipe) => recipe.type === "dinner"
	);
	const Snack = recipesFromAirtable.filter((recipe) => recipe.type === "snack");
	const Dressing = recipesFromAirtable.filter(
		(recipe) => recipe.type === "dressing"
	);

	useEffect(() => {
		base("tbl9y6zno3oWXv9p1")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				setRecipesFromAirtable(records.map((record) => record.fields));
				fetchNextPage();
			});
	}, [base]);

	const handleChange = (e) => {
		setUserInput(e.target.value);
	};

	// for search bar
	const SearchIngredients = recipesFromAirtable.filter((recipe) =>
		recipe.recipeName.toLowerCase().includes(userInput.toLowerCase())
	);

	const FilteredLength = SearchIngredients.length;
	const UnfilteredLength = recipesFromAirtable.length;

	return (
		<Wrapper>
			<form onSubmit={(e) => e.preventDefault()} action="" role="search">
				<input
					value={userInput}
					onChange={handleChange}
					placeholder="Search for ingredients"
					style={{ height: "40px", width: "280px", borderRadius: "10px" }}
					title="Search bar"
				/>
			</form>
			{!!FilteredLength && FilteredLength !== UnfilteredLength && (
				<>
					<SearchResultsRecipe
						title={"Search Results:"}
						content={SearchIngredients}
					/>
				</>
			)}
			{FilteredLength === 0 && (
				<div>
					<h4>No results</h4>
				</div>
			)}

			<SingleRecipe
				title={"Breakfast 🍳"}
				content={Breakfast}
				description={"Start the morning off right with a glass of water"}
			/>
			<SingleRecipe
				title={"Lunch  🥒"}
				content={Lunch}
				description={"Aim to add up to two veggie portions"}
			/>
			<SingleRecipe
				title={"Dinner  🍜"}
				content={Dinner}
				description={"Fill half your plate with vegetables"}
			/>
			<SingleRecipe
				title={"Snacks  🍿"}
				content={Snack}
				description={"Look for fiber rich options"}
			/>
			<SingleRecipe
				title={"Dressings and Marinades  🥗"}
				content={Dressing}
				description={"Keep it interesting"}
			/>
		</Wrapper>
	);
}
