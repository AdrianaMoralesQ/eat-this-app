/** @jsx jsx */
import { useState } from "react";
import { Card, Table, TableHead } from "../../Styled Components";
import { jsx } from "theme-ui";

export const SearchResults = ({ title, content }) => {
	return (
		<Card sx={{ variant: "containers.card" }}>
			<h2>{title}</h2>
			<Table className="Ingredients">
				<tr>
					<TableHead>Ingredient</TableHead>
					<TableHead>Portion</TableHead>
					<TableHead>Unit</TableHead>
					<TableHead>Type</TableHead>
				</tr>
				{content.map((ingredient) => (
					<tr>
						<td> {ingredient.name}</td>
						<td> {ingredient.portion}</td>
						<td> {ingredient.unit}</td>
						<td>{ingredient.type}</td>
					</tr>
				))}
			</Table>
		</Card>
	);
};
