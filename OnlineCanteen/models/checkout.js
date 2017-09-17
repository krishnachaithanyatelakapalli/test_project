var mongoose = require("mongoose");

checkoutSchema = new mongoose.Schema({
	name: String,
	email: String,
	list: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Items"
		}
	]
});

module.exports = mongoose.model("Checkout", checkoutSchema);