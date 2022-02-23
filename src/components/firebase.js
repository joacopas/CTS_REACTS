// validar datos

if ((title, description, categeory)) {
  const itemColletion = collection(db, "items");
  const newItem = {
    title: title,
    category: category,
    description: description,
    price: price,
    stock: stock,
  };
  addDoc(itemColletion, newItem).then((doc) => {
    console.log("see guardo el documento correctamente");
  });
} else {
}
