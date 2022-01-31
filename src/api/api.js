import imgFog120 from "../assets/fogoneros120/120_1.jpeg";
import imgFog100 from "../assets/fogooneros100/100-1.jpeg";
import imgFog75 from "../assets/fogoneros75/75-1.jpeg";

const productos = [
  {
    id: 1,
    title: "Fogonero 120",
    descripcion: "fogonero 120cm diametro",
    precio: 40000,
    itemImg: imgFog120,
  },
  {
    id: 2,
    title: "Fogonero 100",
    descripcion: "fogonero 100cm diametro",
    precio: 30000,
    itemImg: imgFog100,
  },
  {
    id: 3,
    title: "Fogonero 75",
    descripcion: "fogonero 120cm diametro",
    precio: 20000,
    itemImg: imgFog75,
  },
];
const promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(productos);
    // retorne de productos
  }, 2000);
});

function getItems() {
  return promesa;
}

export { getItems };
