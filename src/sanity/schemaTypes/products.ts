const products = {
  name: 'product',
  title: 'product',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'price', title: 'Price', type: 'number' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'image',
      title: 'Image',
      type: 'image', // Updated to 'image'
      options: { hotspot: true },
    },
    { name: 'rating', title: 'Rating', type: 'number' },
    { name: 'reviews', title: 'Reviews', type: 'number' },
    { name: 'size', title: 'Size', type: 'array', of: [{ type: 'string' }] },
    { name: 'color', title: 'Color', type: 'array', of: [{ type: 'string' }] },
    { name: 'id', title: 'ID', type: 'string' },
    { name: 'stockInHand', title: 'Stock In Hand', type: 'number' },
    { name: 'stockSold', title: 'Stock Sold', type: 'number' },
    { name: 'discountPercentage', title: 'Discount Percentage', type: 'number' }, // New field
    { name: 'isFeaturedProduct', title: 'Is Featured Product', type: 'boolean' }, // New field
  ],
};

export default products;
