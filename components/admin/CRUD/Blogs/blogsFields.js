const blogsFields = {
  id: { type: "id", label: "ID" },

  hero_image: { type: "images", label: "Hero Image" },

  blog_image_one: { type: "images", label: "Blog Image One" },

  blog_image_two: { type: "images", label: "Blog Image Two" },

  blog_image_three: { type: "images", label: "Blog Image Three" },
  
  author_avatar: { type: "images", label: "Author Avatar" },

  title: { type: "string", label: "Title" },

  author_name: { type: "string", label: "Author name" },

  first_paragraph: { type: "string", label: "First paragraph" },

  second_paragraph: { type: "string", label: "Second paragraph" },

  third_paragraph: { type: "string", label: "Third paragraph" },

  fourth_paragraph: { type: "string", label: "Fourth paragraph" },

  fifth_paragraph: { type: "string", label: "Fifth paragraph" },

  blog_image_one_annotation: { type: "string", label: "Annotation for image one" },

  blog_image_two_annotation: { type: "string", label: "Annotation for image two" },

  blog_image_three_annotation: { type: "string", label: "Annotation for image three" },

  blog_image_four_annotation: { type: "string", label: "Annotation for image four" },

  blog_image_five_annotation: { type: "string", label: "Annotation for image five" },

  point_one_title: { type: "string", label: "Point one title" },

  point_one_description: { type: "string", label: "Point one description" },

  point_two_title: { type: "string", label: "Point two title" },

  point_two_description: { type: "string", label: "Point two description" },

  point_three_title: { type: "string", label: "Point three title" },

  point_three_description: { type: "string", label: "Point three description" },

  point_four_title: { type: "string", label: "Point four title" },

  point_four_description: { type: "string", label: "Point four description" },

  point_five_title: { type: "string", label: "Point five title" },

  point_five_description: { type: "string", label: "Point five description" },

  epigraph: { type: "string", label: "Epigraph" },

  categories: { type: "relation_many", label: "сategories" },

  more_blogs: { type: "relation_many", label: "More blogs" },
  status: {
    type: "enum",
    label: "Status",

    options: [
      { value: "visible", label: "visible" },

      { value: "hidden", label: "hidden" },
    ],
  },
};

export default blogsFields;
