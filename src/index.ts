import products from "./products.json";

class Product {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  id: number;
  name: string;
  price: number;
    static findProductsBelow(precioBase: number){
    return products.filter(product => product.price < precioBase );
}
  }

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProducts: Product) {
    this.products.push(newProducts);
  }
  addProducts(newProduct: Product[]) {
    // esto no funciona:
    this.products = this.products.concat(newProduct);
    // pista: push no suma muchos items (agrega de a uno)
  }

}
export { User, Product };
