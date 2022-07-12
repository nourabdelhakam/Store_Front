import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe("Product Routs", () => {
  it("create product", async () => {
      const res = await request.post("/products").send({
        name: "productOne",
        price: 100,
        category: "electronics",
      });
      console.log(res.body);

      expect(res.status).toBe(200);
    });

  it("get products list", async () => {
    const res = await request.get("/products");
    console.log(res.body);

    expect(res.body?.length).toBeGreaterThan(0);
  });

  it("get product by id", async () => {
    const res = await request.get("/products/1");
    expect(res.body).toEqual({
      id: 1,
      name: "productOne",
      price: 100,
      category: "electronics",
    });
  });

  it("delets product", async () => {
    const res = await request.delete("/products/29");

    expect(res.status).toBe(200);
  });
});
