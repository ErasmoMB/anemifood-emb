import img15 from "./assets/productos/img15.png";
import img14 from "./assets/productos/img14.png";
import img13 from "./assets/productos/img13.png";
import img12 from "./assets/productos/img12.png";
import img11 from "./assets/productos/img11.png";
import img10 from "./assets/productos/img10.png";
import img9 from "./assets/productos/img9.png";
import img8 from "./assets/productos/img8.png";
import img7 from "./assets/productos/img7.png";
import img6 from "./assets/productos/img6.png";
import img5 from "./assets/productos/img5.png";
import img4 from "./assets/productos/img4.png";
import img3 from "./assets/productos/img3.png";
import img2 from "./assets/productos/img2.png";
import img1 from "./assets/productos/img1.png";

const arrayProducts = [
  {
    id: "price_1OJSuxA0k2whc0wWFPhTWlZo",
    name: "CHOCOLATE NUTRI H CON ESPIRULINA",
    price: 40.0,
    image: img15,
  },
  {
    id: "price_1OM7ZuA0k2whc0wWMpBajriT",
    name: "CACAO EN POLVO CON MACA",
    price: 17.0,
    image: img14,
  },
  {
    id: "price_1OM7dVA0k2whc0wWERdO2tA4",
    name: "Café Orgánico Nutri H 125G",
    price: 15.0,
    image: img13,
  },
  {
    id: "price_1OM7fDA0k2whc0wW76GefTfs",
    name: "Café Orgánico Nutri H 250G",
    price: 20.0,
    image: img12,
  },
  {
    id: "price_1OM7fmA0k2whc0wW7BltTcI0",
    name: "CHOCOLATE CON PISTACHO",
    price: 13.0,
    image: img11,
  },
  {
    id: "price_1OM7gwA0k2whc0wWZM8qwiiX",
    name: "CHOCOLATE CON SACHAINCHI",
    price: 13.0,
    image: img10,
  },
  {
    id: "price_1OM7iQA0k2whc0wWgjeY9orQ",
    name: "Chocolate Para Taza 90g",
    price: 15.0,
    image: img9,
  },
  {
    id: "price_1OM7kYA0k2whc0wWXzcUoU28",
    name: "Chocolate Para Taza 90g",
    price: 14.0,
    image: img8,
  },
  {
    id: "price_1OM7lEA0k2whc0wWyv2VoVc0",
    name: "DESAYUNO INSTANTANEO ENERGIA",
    price: 14.0,
    image: img7,
  },
  {
    id: "price_1OM7mTA0k2whc0wW76P4UeLM",
    name: "Desayuno Instantáneo Nutri H",
    price: 14.0,
    image: img6,
  },
  {
    id: "price_1OM7ngA0k2whc0wWFVPUHqBn",
    name: "GALLETAS NUTRI H CLÁSICAS",
    price: 48.0,
    image: img5,
  },
  {
    id: "price_1OM7oeA0k2whc0wWKtd341tk",
    name: "GALLETAS NUTRI H CON ESPIRULINA",
    price: 48.0,
    image: img4,
  },
  {
    id: "price_1OM7piA0k2whc0wW1e6vFUZy",
    name: "Panetón Nutri H Clásico",
    price: 38.0,
    image: img3,
  },
  {
    id: "price_1OM7qWA0k2whc0wWTo7RoIzp",
    name: "Panetón Nutri H con Espirulina",
    price: 38.0,
    image: img2,
  },
  {
    id: "price_1OM7rOA0k2whc0wWCPalUlZq",
    name: "Galletas Nutri H DHA y OMEGA 3",
    price: 48.0,
    image: img1,
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
