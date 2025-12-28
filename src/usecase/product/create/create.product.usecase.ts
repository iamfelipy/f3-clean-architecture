import Product from "../../../domain/product/entity/product";
import { v4 as uuid } from "uuid";
import ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import { InputCreateProductDTO, OutputCreateProductDTO } from "./create.product.dto";

export class CreateProductUseCase {
  private productRepository: ProductRepositoryInterface

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository
  }

  async execute({
    name, 
    price
  }: InputCreateProductDTO): Promise<OutputCreateProductDTO>  {
    const product = new Product(uuid(), name, price)
    await this.productRepository.create(product)

    return {
      id: product.id,
      name: product.name,
      price: product.price
    }
  }
}