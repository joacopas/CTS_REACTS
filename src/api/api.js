import imgFog120 from "../assets/fogoneros120/120_1.jpeg";
import imgFog100 from "../assets/fogooneros100/100-1.jpeg";
import imgFog75 from "../assets/fogoneros75/75-1.jpeg";
import imgCuchi from "../assets/cuchi.png";
import imgTabla from "../assets/cubiertos.png";
import imgGuantes from "../assets/delantal.jpg";

const productos = [
  {
    id: 1,
    title: "Fogonero 120",
    descripcion: `FOGONERO CREATUSPOT 120
    Asador fogonero con patas, incluye su media parrilla desmontable.
    
    Cuenta con soportes para acoplar accesorios: plancheta circular, parrilla circular o asador cruz.
    
    
    Disponible en terminación acero virgen o pintados color negro mate.
    ** MEDIDAS: Diámetro: 1,2m - Profundidad: 20cm - Altura total: 60cm - Espesor: 32mm
    ** PARRILLA: opción media parrilla desmontable de 50 cm ó parrilla mixta con plancheta.
    ** OPCIONALES: Asador Cruz, plancheta circular ó parrilla circular.
    
    CONSULTAR PRECIOS POR LOS ACCESORIOS OPCIONALES.
    
    HACEMOS ENVÍOS A TODO EL PAÍS, CONSULTAR PRECIOS SEGÚN LOCALIDAD Y PROVINCIA.`,
    precio: 40000,
    itemImg: imgFog120,
    category: "fogoneros",
  },
  {
    id: 2,
    title: "Fogonero 100",
    descripcion: `FOGONERO CREATUSPOT 100
    Asador fogonero con patas, incluye su media parrilla desmontable.
    
    Cuenta con soportes para acoplar accesorios: plancheta circular, parrilla circular o asador cruz.
    
    
    Disponible en terminación acero virgen o pintados color negro mate.
    ** MEDIDAS: Diámetro: 1,2m - Profundidad: 20cm - Altura total: 60cm - Espesor: 32mm
    ** PARRILLA: opción media parrilla desmontable de 50 cm ó parrilla mixta con plancheta.
    ** OPCIONALES: Asador Cruz, plancheta circular ó parrilla circular.
    
    CONSULTAR PRECIOS POR LOS ACCESORIOS OPCIONALES.
    
    HACEMOS ENVÍOS A TODO EL PAÍS, CONSULTAR PRECIOS SEGÚN LOCALIDAD Y PROVINCIA.`,
    precio: 30000,
    itemImg: imgFog100,
    category: "fogoneros",
  },
  {
    id: 3,
    title: "Fogonero 75",
    descripcion: `FOGONERO CREATUSPOT 75
    Asador fogonero con patas, incluye su media parrilla desmontable.
    
    Cuenta con soportes para acoplar accesorios: plancheta circular, parrilla circular o asador cruz.
    
    
    Disponible en terminación acero virgen o pintados color negro mate.
    ** MEDIDAS: Diámetro: 1,2m - Profundidad: 20cm - Altura total: 60cm - Espesor: 32mm
    ** PARRILLA: opción media parrilla desmontable de 50 cm ó parrilla mixta con plancheta.
    ** OPCIONALES: Asador Cruz, plancheta circular ó parrilla circular.
    
    CONSULTAR PRECIOS POR LOS ACCESORIOS OPCIONALES.
    
    HACEMOS ENVÍOS A TODO EL PAÍS, CONSULTAR PRECIOS SEGÚN LOCALIDAD Y PROVINCIA.`,
    precio: 20000,
    itemImg: imgFog75,
    category: "fogoneros",
  },
  {
    id: 4,
    title: "Tabla medium",
    descripcion: `Tabla de madera de álamo con canaletas de contención para líquidos que evitan derrames. Por su tamaño y características esta tabla es ideal para el asador.

    Se entrega con madera curada y lista para usar.
    
    ** Medidas: Ancho 50 cm, largo 30cm, profundidad 3cm.
    
    ** Las imágenes son ilustrativas, nuestros productos son 100% artesanales y pueden presentar variaciones estéticas, en colores, formas, betas y tonos.`,
    precio: "4.500",
    itemImg: imgTabla,
    category: "tablas",
  },
  {
    id: 5,
    title: "Cubiertos x6",
    descripcion:
      "CAJA X6 UNIDADES TENEDOR Y CUCHILLO 12CM (gw) Caja de madera natural con juego de 6 unidades de cuchillo y tenedor de mesa. Tenedor y Cuchillo artesanales con hoja de 12cm y un inmejorable filo que se preserva en el tiempo. Hojas confeccionadas en acero inoxidable AISI420, mangos (A) combinados en madera de guayubira y hueso de canilla de vaca ",
    precio: "26.000",
    itemImg: imgCuchi,
    category: "cubiertos",
  },
  {
    id: 6,
    title: "Guantes de asador",
    descripcion: `Guantes con aislación para asador PREMIUM con muy alta resistencia al calor. 

    Óptimos para cocinar en fogoneros, parrillas, manipular elementos de asadores como la cruz y otros accesorios. Ideales para agarrar materiales calientes, sacar y sostener bandejas del horno o cualquier actividad relacionada.
    
    Confeccionados con la mas alta CALIDAD, en cuero natural, forrado con refuerzo palmar, pulgar y nudillos, costuras con hilo de kevlar.
    
    ** Consultar por grabados y personalizaciones (con costo adicional no incluido en el precio de la publicación).
    
    ** Las imágenes son ilustrativas, los productos pueden presentar variaciones estéticas, en colores y tonos.`,
    precio: "3.250",
    itemImg: imgGuantes,
    category: "accesorios",
  },
];
const promesa = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(productos);
    // retorne de productos
  }, 1000);
});

function getItems() {
  return promesa;
}

export { getItems };
