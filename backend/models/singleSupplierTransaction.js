const mongoose = require('mongoose');
const { Schema } = mongoose;

const singleSupplierTransactionSchema = new Schema({
	supplier: {
		type: Schema.Types.ObjectId,
		ref: 'suppliers'
	},
	purchase_singleSupplier: {
		type: Number,
		default: 0,
	},
	payment_singleSupplier:{
		type: Number,
		default: 0,
	},
	date: {
		type: Date,
		default: Date.now
	},
});

module.exports = mongoose.model('singleSupplierTransaction', singleSupplierTransactionSchema);