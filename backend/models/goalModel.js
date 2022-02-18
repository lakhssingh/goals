const { builtinModules } = require('module');
const mongoose = require('mongoose');

const goalsSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, 'Please add a goal'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Goal', goalsSchema);
