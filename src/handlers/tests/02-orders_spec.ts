import supertest from "supertest";
import app from "../../server";
import { token } from "./01-users_spec";

const request = supertest(app);

describe("Order Routs", () => {
  it("create order", async () => {
    const res = await request.post("/orders").send({
      user_id: 44,
      status: "compeleted",
    });
    console.log("order route res", res);

    expect(res.status).toBe(200);
  });

  it("get orders list", async () => {
    const res = await request
      .get("/orders")
      .set("Authorization", "Bearer " + token);
    console.log("log", res.body);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("show orders by user_id", async () => {
    const res = await request
      .get("/orders/latest/44")
      .set("Authorization", "Bearer " + token);
    console.log(token);

    expect(res.body[0].user_id).toEqual(44);
  });

  it("update order", async () => {
    const res = await request.post("/orders/").send({
      user_id: 44,
      status: "active",
    });
    expect(res.status).toBe(200);
  });

  it("delets order", async () => {
    const res = await request
      .delete("/orders/113")
      .set("Authorization", "Bearer " + token);

    expect(res.status).toBe(200);
  });
});
