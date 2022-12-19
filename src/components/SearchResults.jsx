/** @jsx jsx */
import { useState } from "react";
import { Card, Show, Table, TableHead } from "../../Styled Components";
import { jsx } from "theme-ui";

export const SearchResults = ({ title, content, description }) => {
	const [isVisible, setIsVisible] = useState(false);

	function toggleSearch() {
		setIsVisible(!isVisible);
	}

	return (
		<Card sx={{ variant: "containers.card" }}>
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
		</Card>
	);
};
