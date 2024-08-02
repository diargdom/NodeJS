function asincrona(callback) {
  setTimeout(() => {
    try {
      //let a = 3 + 5; //Todo bien
      let a = z + 3; //Error
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((err, data) => {
  if (err) {
    console.error("🚀 ~ Tenemos un error:", err);
    console.error(err);
    return false;
    //throw err; //NO VA A FUNCIONAR
  } else {
    console.log("🚀 ~ Todo ha ido bien:", data);
  }
});
