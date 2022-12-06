// name: ex. chicken, fish...
// type: protein, veggies, STEPs
// unit: for ex. grams, cups, teaspoons,
// portion: num

import { IngredientWrapper } from "../../Styled Components";

export default function Food({ name, id, unit, portion }) {
	return (
		<div id={id}>
			<h2>{name}</h2>
			<h2>{portion}</h2>
			<h2>{unit}</h2>
		</div>
	);
}
// const Protein = filter by type
//  ProteinArray = Protein.map

export function Ingredients() {
	const Proteins = Ingredient.filter((ing) => ing.type === "protein");
	const Fruits = Ingredient.filter((ing) => ing.type === "fruit");
	const Veggies = Ingredient.filter((ing) => ing.type === "veggies");
	const Dairy = Ingredient.filter((ing) => ing.type === "dairy");

	return (
		<>
			<IngredientWrapper>
				<h3>Proteins</h3>
				<p>Eat 3-5 a day</p>
				<div>
					{Proteins.map((food) => (
						<Food name={food.name} portion={food.portion} unit={food.unit} />
					))}
				</div>
			</IngredientWrapper>
			<h3>Fruits</h3>
			<p>Eat 2 a day</p>
			{Fruits.map((food) => (
				<Food name={food.name} portion={food.portion} unit={food.unit} />
			))}
			<h3>Veggies</h3>
			<p>Eat 5-7 a day</p>
			{Veggies.map((food) => (
				<Food name={food.name} portion={food.portion} unit={food.unit} />
			))}
			<h3>Dairy and alternatives</h3>
			<p>Eat 5-7 a day</p>
			{Dairy.map((food) => (
				<Food name={food.name} portion={food.portion} unit={food.unit} />
			))}
		</>
	);
}

const Ingredient = [
	{
		type: "protein",
		name: "chicken",
		portion: "90",
		unit: "grams",
	},
	{ type: "protein", name: "salmon", portion: "90", unit: "grams" },
	{ type: "protein", name: "cod", portion: "90", unit: "grams" },
	{ type: "protein", name: "tuna", portion: "90", unit: "grams" },
	{ type: "protein", name: "mozzarella", portion: "60", unit: "grams" },
	{ type: "fruit", name: "grapes", portion: "1", unit: "cup" },
	{ type: "fruit", name: "pears", portion: "1", unit: "cup" },
	{ type: "fruit", name: "apples", portion: "5", unit: "cup" },
	{ type: "fruit", name: "grapefruit", portion: "1", unit: "cup" },
	{ type: "veggies", name: "cucumber", portion: "1", unit: "cup" },
	{ type: "veggies", name: "tomato", portion: "1", unit: "cup" },
	{ type: "veggies", name: "spinach", portion: "1", unit: "cup" },
	{ type: "veggies", name: "kale", portion: "1", unit: "cup" },
	{ type: "dairy", name: "greek yogurt", portion: ".5", unit: "cup" },
	{ type: "dairy", name: "feta", portion: "60", unit: "grams" },
	{ type: "dairy", name: "nut milk", portion: "1", unit: "cup" },
	{ type: "dairy", name: "cow milk", portion: "1", unit: "cup" },
];

console.table(Ingredient);
