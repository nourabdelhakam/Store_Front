import supertest from "supertest";
import app from "../../server";
import client from "../../database";

import { UserModel } from "../../models/user.model";

const request = supertest(app);
export let token: string = "";

describe("User Routs", () => {
  it("create user", async () => {
    const res = await request.post("/users").send({
      first_name: "noura",
      last_name: "mohamed",
      password: "passWord123",
    });
    token = res.body;
    console.log(token);

    expect(res.status).toBe(200);
  });
});
