/** @jsx jsx */
import { useState } from "react";
import { Card, Show, Table, TableHead } from "../../Styled Components";
import { jsx } from "theme-ui";

export const Ingredient = ({ title, content, description }) => {
	const [isOpen, setIsOpen] = useState(false);

	function toggleVisibility() {
		setIsOpen(!isOpen);
	}

	return (
		<Card sx={{ variant: "containers.card" }}>
			<h2>{title}</h2>
			<p>{description}</p>
			<Show onClick={toggleVisibility}>Ingredients</Show>
			{isOpen && (
				<Table className="Ingredients">
					<tr>
						<TableHead>Ingredient</TableHead>
						<TableHead>Portion</TableHead>
						<TableHead>Unit</TableHead>
					</tr>
					{content.map((ingredient) => (
						<tr>
							<td> {ingredient.name}</td>
							<td> {ingredient.portion}</td>
							<td> {ingredient.unit}</td>
						</tr>
					))}
				</Table>
			)}
		</Card>
	);
};
