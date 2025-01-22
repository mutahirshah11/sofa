export default {
  name: "orders",  // Changed from "order" to "orders"
  type: "document",
  title: "Orders",
  fields: [
    { name: "name", type: "string", title: "Full Name", validation: (Rule: any) => Rule.required() },
    { name: "email", type: "string", title: "Email", validation: (Rule: any) => Rule.required() },
    { name: "address", type: "string", title: "Address", validation: (Rule: any) => Rule.required() },
    { name: "phone", type: "string", title: "Phone Number", validation: (Rule: any) => Rule.required() },
    { name: "company", type: "string", title: "Company Name" },
    { name: "additionalInfo", type: "text", title: "Additional Info" },
    { name: "totalAmount", type: "number", title: "Total Amount", validation: (Rule: any) => Rule.required() },
    {
      name: "products",
      type: "array",
      title: "Products",
      of: [{
        type: "object",
        name: "orderItem",
        fields: [
          { name: "name", type: "string", title: "Product Name" },
          { name: "quantity", type: "number", title: "Quantity" },
          { name: "price", type: "number", title: "Price" }
        ]
      }]
    },
    {
      name: "status",
      type: "string",
      title: "Order Status",
      options: {
        list: ["pending", "confirmed", "shipped"],
        layout: "radio"
      }
    },
    {
      name: "createdAt",
      type: "datetime",
      title: "Created At"
    }
  ]
}