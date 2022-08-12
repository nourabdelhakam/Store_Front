import { OrderModel } from "../order.model";

const order = new OrderModel();

describe("Order Model", () => {
  it("should create new order", async () => {
    const res = await order.create_order({
      user_id: 44,
      status: "compeleted",
    });
    expect(res.id).toBeTruthy();
  });

  it("should get all orders list", async () => {
    const res = await order.all_orders();
    console.log("order res", res);
    expect(res?.length).toBeGreaterThan(0);
  });

  it("should return a order by user id", async () => {
    const res = await order.show_orders_by_user_id(44);
    expect(res?.length).toBeGreaterThan(0);
  });
});
