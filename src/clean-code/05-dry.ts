type Size = "small" | "medium" | "large";

interface ProductProps {
  name: string;
  price: number;
  size: Size;
  productWithStock: boolean;
}

class Product {
  public name: string;
  public price: number;
  public size: Size;
  public productWithStock: boolean;

  constructor({
    name = "",
    price = 0,
    size,
    productWithStock = false,
  }: ProductProps) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.productWithStock = productWithStock;
  }

  isProductReady(): boolean {
    for (const key in this) {
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0) {
            throw new Error(`The ${key} is empty `);
          }
          break;
        case "number":
          if (this[key] <= 0) {
            throw new Error(`The ${key} is zero `);
          }
          break;
        case "boolean":
          if (!this[key]) {
            throw new Error(`The ${key} is false `);
          }
          break;

        default:
          throw Error(`${typeof this[key]} type is not supported`);
      }
      typeof this[key];
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;
    const stockStatus = this.productWithStock
      ? "is in stock"
      : "is out of stock";

    return `${this.name} ,${this.size}, costs $${this.price} and ${stockStatus}`;
  }
}

(() => {
  const bluePants = new Product({
    name: "Blue Large Pants",
    size: "medium",
    price: 10,
    productWithStock: true,
  });
  console.log(bluePants.toString());
})();
