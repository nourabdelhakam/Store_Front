import { UserModel } from "../user.model";

const user = new UserModel();

describe("User Model", () => {
  it("should create new user", async () => {
    const res = await user.create_user({
      firstname: "noura",
      lastname: "mohamed",
      password: "passWord123",
    });
    expect(res.firstname).toEqual("noura");
  });

  it("should get all users list", async () => {
    const res = await user.all_users();
    console.log("res", res);

    expect(res?.length).toBeGreaterThan(0);
  });
});
