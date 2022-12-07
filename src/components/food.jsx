// name: ex. chicken, fish...
// type: protein, veggies, STEPs
// unit: for ex. grams, cups, teaspoons,
// portion: num
import SmartTable from "react-next-table";
import { TypeWrapper, Wrapper } from "../../Styled Components";

export default function Food({ name, id, unit, portion }) {
	return (
		<div id={id}>
			<h2>{name}</h2>
			<h2>{portion}</h2>
			<h2>{unit}</h2>
		</div>
	);
}

export function Ingredients() {
	const Proteins = Ingredient.filter((ing) => ing.type === "protein");
	const Fruits = Ingredient.filter((ing) => ing.type === "fruit");
	const Veggies = Ingredient.filter((ing) => ing.type === "veggies");
	const Dairy = Ingredient.filter((ing) => ing.type === "dairy");

	return (
		<Wrapper>
			<TypeWrapper>
				<h3>Proteins</h3>
				<p>Eat 3-5 a day</p>
				<SmartTable data={Proteins} headCells={headCells} />
			</TypeWrapper>
			<TypeWrapper>
				<h3>Fruits</h3>
				<p>Eat 2 a day</p>
				<SmartTable data={Fruits} headCells={headCells} />
			</TypeWrapper>
			<TypeWrapper>
				<h3>Veggies</h3>
				<p>Eat 5-7 a day</p>
				<SmartTable data={Veggies} headCells={headCells} />
			</TypeWrapper>
			<TypeWrapper>
				<h3>Dairy and alternatives</h3>
				<p>Eat 5-7 a day</p>
				<SmartTable data={Dairy} headCells={headCells} />
			</TypeWrapper>
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
		numeric: false,
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

const Ingredient = [
	{
		type: "protein",
		name: "Chicken",
		portion: "90",
		unit: "grams",
	},
	{ type: "protein", name: "Salmon", portion: "90", unit: "grams" },
	{ type: "protein", name: "Cod", portion: "90", unit: "grams" },
	{ type: "protein", name: "Tuna", portion: "90", unit: "grams" },
	{ type: "protein", name: "Mozzarella", portion: "60", unit: "grams" },
	{ type: "fruit", name: "Grapes", portion: "1", unit: "cup" },
	{ type: "fruit", name: "Pears", portion: "1", unit: "cup" },
	{ type: "fruit", name: "Apples", portion: "5", unit: "cup" },
	{ type: "fruit", name: "Grapefruit", portion: "1", unit: "cup" },
	{ type: "veggies", name: "Cucumber", portion: "1", unit: "cup" },
	{ type: "veggies", name: "Tomato", portion: "1", unit: "cup" },
	{ type: "veggies", name: "Spinach", portion: "1", unit: "cup" },
	{ type: "veggies", name: "Kale", portion: "1", unit: "cup" },
	{ type: "dairy", name: "Greek yogurt", portion: ".5", unit: "cup" },
	{ type: "dairy", name: "Feta", portion: "60", unit: "grams" },
	{ type: "dairy", name: "Nut milk", portion: "1", unit: "cup" },
	{ type: "dairy", name: "Cow milk", portion: "1", unit: "cup" },
];

console.table(Ingredient);
