import { app, sequelize } from "../express"
import request from "supertest";

describe("E2E test for product", () => {
  beforeEach(async () => {
    // a inicialização esta no arquivo express
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const response = await request(app)
      .post("/product")
      .send({
        name: "banana",
        price: 123
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toBe("banana");
    expect(response.body.price).toBe(123);
  })
  it("should not create a product", async () => {
    const response = await request(app).post("/product").send({
      name: "beringela",
    });
    expect(response.status).toBe(500);
  })
