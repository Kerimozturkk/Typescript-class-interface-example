import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(3);

let p = new Product();
p.id = 3;
p.name = "Iphone 14 Pro max";
p.price = 60000;
p.category = "Telefon";

// _productService.saveProduct(p);
// result = _productService.getProducts();
// console.log(result);

_productService.deleteProduct(result);
console.log(_productService.getProducts());