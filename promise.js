const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//const promiseOutput = null;
function promiseOutput(param) {
  let kond = 0;

  promiseTheaterIXX().then(function (result) {
    //console.log(result[0].hasil);

    result.forEach(function (a) {
      if (param == "marah") {
        a.hasil == param ? kond++ : kond;
      } else a.hasil == param ? kond++ : kond;
    });
    //console.log(kond);
  });

  promiseTheaterVGC().then(function (result) {
    result.forEach(function (a) {
      if (param == "marah") {
        a.hasil == param ? kond++ : kond;
      } else a.hasil == param ? kond++ : kond;
    });

    console.log(kond);
  });
}

//promiseOutput("marah");
module.exports = {
  promiseOutput,
};
