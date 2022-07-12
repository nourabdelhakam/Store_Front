import { ProductModel } from "../product.model";

const product = new ProductModel();

describe("Product Modal", () => {
    it("should create a new product", async () => {
      const res = await product.create_product({
        name: "productTwo",
        price: 200,
        category: "electronics2",
      });
      expect(res.id).toBeTruthy();
    });

  it("should get all products list", async () => {
    const res = await product.all_products();
    expect(res?.length).toBeGreaterThan(0);
  });

  it("should return a product by id", async () => {
    const res = await product.show_product_by_id(24);
    expect(res?.id).toEqual(24);
  });

  it("should delete a product", async () => {
    const res = await product.delete_product(25);
    expect(res.id).toBe(24);
  });
});
