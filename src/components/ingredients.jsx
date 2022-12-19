import { Wrapper } from "../../Styled Components";
import { useEffect, useState } from "react";
import Airtable from "airtable";
import { Ingredient } from "./Ingredient";
import { SearchResults } from "./SearchResults";

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export function Ingredients() {
	// to filter by type
	const [ingredientsFromAirtable, setIngredients] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [isVisible, setIsVisible] = useState(false);

	const Veggies = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Veggies"
	);
	const Protein = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Protein"
	);
	const Carbs = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Carbs"
	);
	const Dairy = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Dairy"
	);
	const Fruit = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Fruit"
	);
	const Fats = ingredientsFromAirtable.filter(
		(ingredient) => ingredient.type === "Fats"
	);
	// to call data from airtable
	useEffect(() => {
		base("ingredients")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				setIngredients(records.map((record) => record.fields));
				fetchNextPage();
			});
	}, [base]);

	const handleChange = (e) => {
		setUserInput(e.target.value);
		setIsVisible(!isVisible);
	};

	// for search bar
	const SearchIngredients = ingredientsFromAirtable.filter((ingredient) =>
		ingredient.name.toLowerCase().includes(userInput.toLowerCase())
	);

	console.log(SearchIngredients);

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
			{isVisible && (
				<SearchResults title={"Search Results:"} content={SearchIngredients} />
			)}
			<Ingredient
				title={"Veggies 🥬"}
				content={Veggies}
				description={"Eat 4-5 a day"}
			/>
			<Ingredient
				title={"Protein 🥩"}
				content={Protein}
				description={"Eat 3 a day"}
			/>
			<Ingredient
				title={"Fruits 🍒"}
				content={Fruit}
				description={"Eat 2 a day"}
			/>
			<Ingredient
				title={"Dairy and Alternatives 🥛"}
				content={Dairy}
				description={"Eat 2 a day"}
			/>
			<Ingredient
				title={"STEPs 🥖"}
				content={Carbs}
				description={"Eat 4 a day"}
			/>
			<Ingredient
				title={"Fats 🥜"}
				content={Fats}
				description={"Eat 3 a day"}
			/>
		</Wrapper>
	);
}

export default Ingredients;
