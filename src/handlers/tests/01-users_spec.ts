import supertest from "supertest";
import app from "../../server";

const request = supertest(app);
export let token = "";

describe("User Routs", () => {
  it("create user", async () => {
    const res = await request.post("/users").send({
      firstname: "noura",
      lastname: "mohamed",
      password: "passWord123",
    });
    token = res.body;
    console.log(token);

    expect(res.status).toBe(200);
  });

  it("get users list", async () => {
    const res = await request
      .get("/users")
      .set("Authorization", "Bearer " + token);
    expect(res.body[0].id).toEqual(2);
  });

  it("get user by id", async () => {
    const res = await request
      .get("/users/2")
      .set("Authorization", "Bearer " + token);
    expect(res.body.firstname).toEqual("noura");
  });

  it("delets user", async () => {
    const res = await request
      .delete("/users/1")
      .set("Authorization", "Bearer " + token);

    expect(res.status).toBe(200);
  });
});
