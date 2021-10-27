const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: String,
    Image: { type: String },
    price: {
      type: Namber,
      default: 5,
    },
    description: String,
    color: String,
    quantity: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("product", ProductSchema);
