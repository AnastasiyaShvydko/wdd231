import { getData } from "./getData.js";
import { createProductCard } from "./productCard.js";
import { getPriceData } from "./getPriceData.js";

const products_block = document.getElementById('products_block');



createProductCard(await getData(),await getPriceData(),products_block);
