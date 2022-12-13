import { useState } from "react";
import { Show } from "../../Styled Components";

export const Ingredient = ({ title, content, description }) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleVisibility() {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<h2>{title}</h2>
			<p>{description}</p>
			<Show className="show" onClick={toggleVisibility}>
				Show ingredients
			</Show>
			{isOpen && (
				<table className="Ingredients">
					<tr>
						<th>Ingredient</th>
						<th>Portion</th>
						<th>Unit</th>
					</tr>
					{content.map((ingredient) => (
						<tr>
							<td> {ingredient.name}</td>
							<td> {ingredient.portion}</td>
							<td> {ingredient.unit}</td>
						</tr>
					))}
				</table>
			)}
		</div>
	);
};
