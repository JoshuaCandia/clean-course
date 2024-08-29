(() => {
  // Resolver sin la triple condicional dentro del if
  // includes? arrays?

  function isRedFruit(fruit: string): boolean {
    const redFruits = ["manzana", "cereza", "ciruela"];
    return redFruits.includes(fruit);
  }

  type FruitColor = "yellow" | "red" | "purple";

  function getFruitsByColor(color: FruitColor): string[] {
    const fruitsByColor = {
      red: ["manzana", "fresa"],
      yellow: ["piña", "banana"],
      purple: ["moras", "uvas"],
    };

    if (!Object.keys(fruitsByColor).includes(color))
      throw new Error("We dont have pink fruits, choose red, yellow or purple");

    return fruitsByColor[color];
  }

  // Simplificar esta función
  let isFirstStepWorking = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if (isFirstStepWorking) {
      if (isSecondStepWorking) {
        if (isThirdStepWorking) {
          if (isFourthStepWorking) {
            return "Working properly!";
          } else {
            return "Fourth step broken.";
          }
        } else {
          return "Third step broken.";
        }
      } else {
        return "Second step broken.";
      }
    } else {
      return "First step broken.";
    }
  }

  function workingStepsFinal() {
    if (!isFirstStepWorking) return "First Step Broken ";
    if (!isSecondStepWorking) return "Second Step Broken ";
    if (!isThirdStepWorking) return "Third Step Broken ";
    if (!isFirstStepWorking) return "Fourth Step Broken ";
    return "Working propertly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // false

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  console.log({ pinkFruits: getFruitsByColor("pink") });

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
