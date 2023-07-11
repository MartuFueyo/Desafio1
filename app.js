class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct(product) {
        // Validar que todos los campos sean obligatorios
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        // Validar que no se repita el campo "code"
        if (this.products.some((p) => p.code === product.code)) {
            console.error(`El código "${product.code}" ya está en uso`);
            return;
        }

        // Asignar un id autoincrementable
        const newProduct = {
            ...product,
            id: this.nextId
        };
        this.nextId++;

        // Agregar el producto al arreglo de productos
        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id);

        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado");
        }
    }
}

// Crear una instancia de ProductManager
const productManager = new ProductManager();

// Agregar productos
productManager.addProduct({
    title: "Samsung Galaxy ",
    description: "S23 Ultra",
    price: 750000,
    thumbnail: "",
    code: "P1263",
    stock: 5,
});

productManager.addProduct({
    title: "Xiaomi",
    description: "Mi 13 Ultra",
    price: 520000,
    thumbnail: "",
    code: "P2256",
    stock: 3,
});

// Obtener todos los productos
const allProducts = productManager.getProducts();
console.log(allProducts);

// Obtener un producto por su id
const product = productManager.getProductById(1);
console.log(product);

// Obtener un producto que no existe (generará un error)
const nonexistentProduct = productManager.getProductById(3);