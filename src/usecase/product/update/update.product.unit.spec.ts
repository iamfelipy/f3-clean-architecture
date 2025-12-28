import Product from "../../../domain/product/entity/product"
import { InputUpdateProductDTO } from "./update.product.dto"
import { UpdateProductUseCase } from "./update.product.usecase";

const product = new Product("444", "batata", 33)

const input: InputUpdateProductDTO = {
  id: "444",
  name: "rabanete",
  price: 45 
}

const MockRepository = () => {
  return {
    create: jest.fn(),
    findAll: jest.fn(),
    find: jest.fn().mockReturnValue(Promise.resolve(product)),
    update: jest.fn(),
  };
};

describe("unit test: update product usecase", () => {
  it("should be able update a product", async () => {
    const productRepository = MockRepository()
    const usecase = new UpdateProductUseCase(productRepository)

    const output = await usecase.execute(input)

    expect(output).toEqual(input)
  })
})