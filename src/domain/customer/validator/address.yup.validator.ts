import ValidatorInterface from "../../@shared/validator/validator.interface";
import * as yup from "yup";
import Address from "../value-object/address";

export default class AddressYupValidator
  implements ValidatorInterface<Address>
{
  validate(objectValue: Address): void {
    try {
      yup
        .object()
        .shape({
          street: yup
            .string()
            .min(1, "Street must not be empty")
            .required("Street is required"),
          number: yup
            .number()
            .moreThan(0, "Number must be greater than zero")
            .required("Number is required"),
          zip: yup
            .string()
            .min(1, "Zip must not be empty")
            .required("Zip is required"),
          city: yup
            .string()
            .min(1, "City must not be empty")
            .required("City is required"),
        })
        .validateSync(
          {
            street: objectValue.street,
            number: objectValue.number,
            zip: objectValue.zip,
            city: objectValue.city,
          },
          {
            abortEarly: false,
          }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;
      e.errors.forEach((error) => {
        objectValue.notification.addError({
          context: "address",
          message: error,
        });
      });
    }
  }
}