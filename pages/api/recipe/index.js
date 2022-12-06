import nc from "next-connect";
import recipes from "../../../src/data/data";

const handler = nc()
	.get((req, res) => {
		res.json({ data: recipes });
	})
	.post((req, res) => {
		const id = Date.now();
		const recipe = { ...req.body, id };

		recipes.push(recipe);
		res.json({ data: recipe });
	});

export default handler;
