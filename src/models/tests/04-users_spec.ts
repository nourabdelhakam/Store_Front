import { UserModel } from "../user.model";

const user = new UserModel();

// describe("User Model", () => {
//   it("should create new user", async () => {
//     const res = await user.create_user({
//       firstname: "noura",
//       lastname: "mohamed",
//       password: "passWord123",
//     });
//     expect(res.firstname).toEqual("noura")
//   });

//   it("should get all users list", async () => {
//     const res = await user.all_users()
//     console.log('res', res);

//     expect(res?.length).toBeGreaterThan(0)
//   })

//   it("should return a user by id", async () => {
//     const res = await user.show_user_by_id(39)
//     expect(res.lastname).toEqual("mohamed")
//   })

//   it("should delete a user", async () => {
//     const res = await user.delete_user(39)
//     expect(res.id).toBe(39);
//   });
// });
