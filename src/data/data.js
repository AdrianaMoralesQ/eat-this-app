const recipes = new Array(15).fill(1).map((_, i) => ({
	id: Date.now() + i,
	title: `Recipe ${i}`,
}));

module.exports = recipes;
