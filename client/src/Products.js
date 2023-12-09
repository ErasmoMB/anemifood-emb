import AcerNitro5Image from "./assets/images/acer-nitro-5.jpg";

const arrayProducts = [
  {
    id: "price_1OJSuxA0k2whc0wWFPhTWlZo",
    name: "Acer Nitro 5",
    price: 829.99,
    image: AcerNitro5Image,
  },
];

function getProductData(id) {
  let productData = arrayProducts.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product not found for id: " + id);
    return undefined;
  }

  return productData;
}

export { arrayProducts, getProductData };
