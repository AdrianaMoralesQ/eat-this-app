import nc from "next-connect";
import recipes from "../../../src/data/data";

const getRecipe = (id) => recipes.find((n) => n.id === parseInt(id));

const handler = nc()
	.get((req, res) => {
		const recipe = getRecipe(req.query.id);

		if (!recipe) {
			res.status(404);
			res.end();
			return;
		}

		res.json({ data: recipe });
	})
	.patch((req, res) => {
		const recipe = getRecipe(req.query.id);

		if (!recipe) {
			res.status(404);
			res.end();
			return;
		}

		const i = recipe.findIndex((n) => n.id === parseInt(req.query.id));
		const updated = { ...recipe, ...req.body };

		recipes[i] = updated;
		res.json({ data: updated });
	})
	.delete((req, res) => {
		const recipe = getRecipe(req.query.id);

		if (!recipe) {
			res.status(404);
			res.end();
			return;
		}
		const i = recipes.findIndex((n) => n.id === parseInt(req.query.id));

		recipes.splice(i, 1);

		res.json({ data: req.query.id });
	});

export default handler;
