import { InputListProductDTO, OutputListProductDTO } from "./list.product.dto"
import { ListProductUseCase } from "./list.product.usecase";

const product1 = {
  id: "123",
  name: "beringela",
  price: 2
}
const product2 = {
  id: "456",
  name: "maça",
  price: 4
}

const MockRepository = () => {
  return {
    create: jest.fn(),
    find: jest.fn(),
    update: jest.fn(),
    findAll: jest.fn().mockReturnValue(Promise.resolve([product1, product2])),
  };
};

describe("unit test: list products use case", () => {
  it("should be able to list products", async () => {
    const repository = MockRepository()
    const usecase = new ListProductUseCase(repository)

    const output = await usecase.execute({})

    expect(output.products.length).toBe(2);
    expect(output.products[0].id).toBe(product1.id);
    expect(output.products[0].name).toBe(product1.name);
    expect(output.products[0].price).toBe(product1.price);
    expect(output.products[1].id).toBe(product2.id);
    expect(output.products[1].name).toBe(product2.name);
    expect(output.products[1].price).toBe(product2.price);
  })
})