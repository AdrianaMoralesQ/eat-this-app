import { Wrapper } from "../../Styled Components";
import { useEffect, useState } from "react";
import Airtable from "airtable";
import { Ingredient } from "./Ingredient";

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export function Ingredients() {
	const [ingredientsFromAirtable, setIngredients] = useState([]);

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

	useEffect(() => {
		base("ingredients")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				setIngredients(records.map((record) => record.fields));
				fetchNextPage();
			});
	}, []);
	return (
		<Wrapper>
			<Ingredient
				title={"Veggies 🥬"}
				content={Veggies}
				description={"Eat 5-7 a day"}
			/>
			<Ingredient
				title={"Protein 🥩"}
				content={Protein}
				description={"Eat 3 a day"}
			/>
			<Ingredient
				title={"Fruits 🍒"}
				content={Fruit}
				description={"Eat 5-7 a day"}
			/>
			<Ingredient
				title={"Dairy and Alternatives 🥛"}
				content={Dairy}
				description={"Eat 5-7 a day"}
			/>
			<Ingredient
				title={"STEPs 🥖"}
				content={Carbs}
				description={"Eat 5-7 a day"}
			/>
			<Ingredient
				title={"Fats 🥜"}
				content={Fats}
				description={"Eat 5-7 a day"}
			/>
		</Wrapper>
	);
}
