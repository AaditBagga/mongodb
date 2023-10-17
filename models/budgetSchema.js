const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
    unique: true,
  },
  color: {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^#[0-9A-Fa-f]{6}$/.test(value),
      message: 'Color must be in hexadecimal format (e.g., #ED4523)',
    },
  },
}, { collection: 'budget' });

module.exports = mongoose.model('budget', budgetSchema);
