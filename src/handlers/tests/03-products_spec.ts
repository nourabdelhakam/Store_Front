import supertest from "supertest";
import app from "../../server";
import { token } from "./01-users_spec";

const request = supertest(app);

describe("Product Routs", () => {
  it("create product", async () => {
    const res = await request
      .post("/products")
      .send({
        name: "productOne",
        price: 100,
        category: "electronics",
      })
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
  });

  it("get products list", async () => {
    const res = await request.get("/products");
    expect(res.body?.length).toBeGreaterThan(0);
  });

  it("get product by id", async () => {
    const res = await request.get("/products/1");
    expect(res.status).toBe(200);
  });

  it("delets product", async () => {
    const res = await request.delete("/products/29");

    expect(res.status).toBe(200);
  });
});
