import supertest from "supertest";
import app from "../../server";

const request = supertest(app);
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX29iaiI6eyJpZCI6MzYsImZpcnN0bmFtZSI6Im5vdXJhIiwibGFzdG5hbWUiOiJtb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkbzA2cld3bGRCTTRJRzhWYTFUSlBwZTNJY2Rra2RqdVJwZ2cuUDZPTFVocVFDZ3cwRkd0NHUifSwiaWF0IjoxNjU2NTU1MTk1fQ.YTnJjz6UbjtolSC_GfiDqIV169BmT1c1n_Ha_1xJ_uY";

describe("Order Routs", () => {
  it("create order", async () => {
    const res = await request.post("/orders").send({
      quantity: 1,
    });
    expect(res.status).toBe(200);
  });
});
