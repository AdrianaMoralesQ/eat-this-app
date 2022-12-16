import { Wrapper } from "../../Styled Components";
import { useEffect, useState } from "react";
import Airtable from "airtable";
import { Recipe } from "./Recipe";

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export function Recipes() {
	const [recipesFromAirtable, setRecipesFromAirtable] = useState([]);

	const Lunch = recipesFromAirtable.filter((recipe) => recipe.type === "lunch");
	console.log(Lunch, "from Recipes");

	useEffect(() => {
		base("tbl9y6zno3oWXv9p1")
			.select({ view: "Grid view" })
			.eachPage((records, fetchNextPage) => {
				setRecipesFromAirtable(records.map((record) => record.fields));
				fetchNextPage();
			});
	}, [base]);
	return (
		<Wrapper>
			<Recipe
				title={"Lunch"}
				content={Lunch}
				description={"Make sure to add up to two veggie portions"}
			/>
			{/* <Ingredient
				title={"Breakfast 🥩"}
				content={}
				description={"Make sure to include some water, not just coffee"}
			/> */}
			{/* <Ingredient
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
				description={"Eat 5-7 a day"}
			/>
			<Ingredient
				title={"Fats 🥜"}
				content={Fats}
				description={"Eat 3 a day"}
			/> */}
		</Wrapper>
	);
}
