import supertest from "supertest";
import app from "../../server";
import { token } from "./01-users_spec";

const request = supertest(app);

describe("Order Routs", () => {
  it("create order", async () => {
    const res = await request
      .post("/orders")
      .send({
        user_id: 1,
        status: "compeleted",
      })
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  it("get orders list", async () => {
    const res = await request
      .get("/orders")
      .set("Authorization", "Bearer " + token);
    console.log("log", res.body);
    expect(res.status).toBe(200);
  });

  it("show orders by user_id", async () => {
    const res = await request
      .get("/orders/latest/1")
      .set("Authorization", "Bearer " + token);
    console.log(token);

    expect(res.body[0].user_id).toEqual(1);
  });

  it("update order", async () => {
    const res = await request
      .post("/orders/")
      .send({
        user_id: 1,
        status: "active",
      })
      .set("Authorization", "Bearer " + token);
    expect(res.status).toBe(200);
  });

  it("delets order", async () => {
    const res = await request
      .delete("/orders/113")
      .set("Authorization", "Bearer " + token);

    expect(res.status).toBe(200);
  });
});
