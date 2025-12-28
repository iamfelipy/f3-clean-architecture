import { Sequelize } from "sequelize-typescript"
import Product from "../../../domain/product/entity/product"
import { InputFindProductDTO, OutputFindProductDTO } from "./find.product.dto"
import { FindProductUseCase } from "./find.product.usecase"
import ProductModel from "../../../infrastructure/product/repository/sequelize/product.model"
import ProductRepository from "../../../infrastructure/product/repository/sequelize/product.repository"

describe("integration test: find a product usecase", () => {
  let sequelize: Sequelize

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  })
  afterEach(async () => {
    await sequelize.sync();
  })

  it("should be able to find a product", async () => {    
    const productRepository = new ProductRepository()
    const usecase = new FindProductUseCase(productRepository)

    const input: InputFindProductDTO = {
      id: "123"
    }
    const output: OutputFindProductDTO = {
      id: "123",
      name: "melancia",
      price: 3
    }

    const product = new Product("123", "melancia", 3)
    await productRepository.create(product)


    const result = await usecase.execute(input)

    expect(result).toEqual(output)
  })
})