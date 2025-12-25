(() => {
  interface Product {
    id: number;
    name: string;
  }

  enum TemplateNotifications {
    TO_CLIENTS = "to-clients",
    TO_EMPLOYEES = "to-employees",
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.

  class ProductService {
    private httpAdapter = Object;

    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class ProductBloc {
    private productService: ProductService;
    private notifications: Notifications;

    constructor(productService: ProductService, notifications: Notifications) {
      this.productService = productService;
      this.notifications = notifications;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    sendNotifications() {
      this.notifications.notifyClients(
        ["joshuacandia74@gmail.com"],
        TemplateNotifications.TO_CLIENTS
      );
    }
  }

  class CartBlog {
    private itemsInCa: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  class Notifications {
    notifyClients(email: string[], template: TemplateNotifications) {
      console.log(email);
      console.log(template);
    }
  }

  const notifications = new Notifications();
  const productService = new ProductService();
  const cart = new CartBlog();

  const productBloc = new ProductBloc(productService, notifications);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });

  cart.onAddToCart(10);
})();
