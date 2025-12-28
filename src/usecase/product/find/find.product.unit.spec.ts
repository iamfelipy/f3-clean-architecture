import { InputFindProductDTO, OutputFindProductDTO } from "./find.product.dto"
import { FindProductUseCase } from "./find.product.usecase";

const input: InputFindProductDTO = {
  id: "123"
}

const output: OutputFindProductDTO = {
  id: "123",
  name: "beringela",
  price: 32
}

const MockRepository = () => {
  return {
    find: jest.fn().mockResolvedValue(output),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("unit test find a product", () => {
  it("should be able to find a product", async () => {
    const productRepository = MockRepository()
    const usecase = new FindProductUseCase(productRepository)
    const result = await usecase.execute(input)
    expect(result).toEqual(output)
  })
})