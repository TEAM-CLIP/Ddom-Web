import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const handlePhoneNumberChange = (
  e: ChangeEvent<HTMLInputElement>,
  setValue: Dispatch<SetStateAction<string>>
) => {
  const inputNumber = e.target.value.replace(/\D/g, "");

  const formattedNumber =
    inputNumber.length <= 3
      ? inputNumber
      : inputNumber.length <= 7
      ? `${inputNumber.slice(0, 3)}-${inputNumber.slice(3)}`
      : `${inputNumber.slice(0, 3)}-${inputNumber.slice(
          3,
          7
        )}-${inputNumber.slice(7, 11)}`;

  setValue(formattedNumber);
};
