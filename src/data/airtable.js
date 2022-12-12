// airtable config:
require("dotenv").config();
const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
	process.env.AIRTABLE_API_BASE_ID
);

const table = base(process.env.AIRTABLE_TABLE_NAME);
module.export = { table };
