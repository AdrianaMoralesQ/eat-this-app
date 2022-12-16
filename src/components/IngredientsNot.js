import React from "react";

const IngredientsNot = ({ ingredient }) => {
	return (
		<div>
			<h2>{ingredient.fields.name}</h2>
			<div>
				<h3>Details</h3>
				<p>
					{ingredient.field.portion} {ingredient.field.unit}
				</p>
			</div>
		</div>
	);
};

export default Ingredients;
