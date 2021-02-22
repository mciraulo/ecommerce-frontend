const productsFields = {
  id: { type: "id", label: "ID" },
  image: { type: "images", label: "Image" },
  title: { type: "string", label: "Title" },
  price: { type: "decimal", label: "Price" },
  discount: { type: "decimal", label: "Discount" },
  description: { type: "string", label: "Description" },
  categories: { type: "relation_many", label: "сategories" },
  more_products: { type: "relation_many", label: "More products" },
  rating: { type: "int", label: "Rating" },
  status: {
    type: "enum",
    label: "Status",

    options: [
      { value: "in stock", label: "in stock" },

      { value: "out of stock", label: "out of stock" },
    ],
  },
};

export default productsFields;
