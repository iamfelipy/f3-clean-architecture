import { Sequelize } from "sequelize-typescript";
import Product from "../../../domain/product/entity/product"
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model";
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository"
import { UpdateProductUseCase } from "./update.product.usecase"

describe("integration test: update product usecase", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should be able to update a product", async () => {
    const productRepository = new ProductRepository()
    const usecase = new UpdateProductUseCase(productRepository)

    const product = new Product("333", "beringela" , 12)
    await productRepository.create(product)

    const input = {
      id: "333",
      name: "banana",
      price: 44
    }

    const output = await usecase.execute(input)

    expect(output).toEqual(input)
  })
})