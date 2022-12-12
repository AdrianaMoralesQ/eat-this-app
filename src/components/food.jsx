// name: ex. chicken, fish...
// type: protein, veggies, STEPs
// unit: for ex. grams, cups, teaspoons,
// portion: num
import SmartTable from "react-next-table";
import { Wrapper } from "../../Styled Components";
import { useEffect, useState } from "react";
import Airtable from "airtable";

export default function Food({ name, id, unit, portion }) {
	return (
		<div id={id}>
			<h2>{name}</h2>
			<h2>{portion}</h2>
			<h2>{unit}</h2>
		</div>
	);
}

const base = new Airtable({ apiKey: "keyBbyFzeryQdSUuP" }).base(
	"appgMqu4ah8WXhmEY"
);

export function Ingredients() {
	const [ingredientsFromAirtable, setIngredients] = useState([]);

	// const Proteins = Ingredient.filter((ing) => ing.type === "protein");
	// const Fruits = Ingredient.filter((ing) => ing.type === "fruit");
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

	// console.log(ingredientsFromAirtable, "from airtable");

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
			<div>
				<h2>Veggies 🥗</h2>
				<p>Eat 5-7 a day</p>
				{/* {JSON.stringify({ Veggies })} */}
				<SmartTable data={Veggies} headCells={headCells} />
			</div>
			<div>
				<h2>Protein 🥩</h2>
				<p>Eat 3 a day</p>
				{/* {JSON.stringify({ Protein })} */}
				<SmartTable data={Protein} headCells={headCells} />
			</div>
			<div>
				<h2>STEPs 🥖</h2>
				<p>Eat 5-7 a day</p>
				<p>
					Choose whole grain products, they contain more fiber and nutrients
				</p>
				{/* {JSON.stringify({ Carbs })} */}
				<SmartTable data={Carbs} headCells={headCells} />
			</div>
			<div>
				<h2>Dairy and Alternatives 🥛</h2>
				<p>Eat 2 a day</p>
				{/* {JSON.stringify({ Dairy })} */}
				<SmartTable data={Dairy} headCells={headCells} />
			</div>
			<div>
				<h2>Fruits 🍒</h2>
				<p>Eat 2 a day</p>
				{/* {JSON.stringify({ Fruit })} */}
				<SmartTable data={Fruit} headCells={headCells} />
			</div>
			<div>
				<h2>Fats 🥜</h2>
				<p>Eat 3 a day</p>
				{/* {JSON.stringify({ Fats })} */}
				<SmartTable data={Fats} headCells={headCells} />
			</div>
		</Wrapper>
	);
}

const headCells = [
	{
		id: "name",
		numeric: false,
		label: "Ingredient",
		width: 200,
	},
	{
		id: "portion",
		numeric: true,
		label: "Portion",
		width: 150,
	},
	{
		id: "unit",
		numeric: false,
		label: "Unit",
		width: 100,
	},
];

// const Ingredient = [
// 	{
// 		type: "protein",
// 		name: "Chicken",
// 		portion: "90",
// 		unit: "grams",
// 	},
// 	{ type: "protein", name: "Salmon", portion: "90", unit: "grams" },
// 	{ type: "protein", name: "Cod", portion: "90", unit: "grams" },
// 	{ type: "protein", name: "Tuna", portion: "90", unit: "grams" },
// 	{ type: "protein", name: "Mozzarella", portion: "60", unit: "grams" },
// 	{ type: "fruit", name: "Grapes", portion: "1", unit: "cup" },
// 	{ type: "fruit", name: "Pears", portion: "1", unit: "cup" },
// 	{ type: "fruit", name: "Apples", portion: "5", unit: "cup" },
// 	{ type: "fruit", name: "Grapefruit", portion: "1", unit: "cup" },
// 	{ type: "veggies", name: "Cucumber", portion: "1", unit: "cup" },
// 	{ type: "veggies", name: "Tomato", portion: "1", unit: "cup" },
// 	{ type: "veggies", name: "Spinach", portion: "1", unit: "cup" },
// 	{ type: "veggies", name: "Kale", portion: "1", unit: "cup" },
// 	{ type: "dairy", name: "Greek yogurt", portion: ".5", unit: "cup" },
// 	{ type: "dairy", name: "Feta", portion: "60", unit: "grams" },
// 	{ type: "dairy", name: "Nut milk", portion: "1", unit: "cup" },
// 	{ type: "dairy", name: "Cow milk", portion: "1", unit: "cup" },
// ];
