import React from "react";
import { useForm } from "react-hook-form";

function FormOne() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      category: "",
      checkbox: ["A"],
      radio: "",
    },
  });

  console.log("errors", errors);
  console.log("isValid", isValid);
  const form = watch('lastName');
  console.log("form watch", form)


  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log("data", data))}>
        <input
          {...register("firstName", { required: "First name is required" })}
          placeholder="First Name"
        />
        {/* <input {...register("Last Name", {minLength: 2})} placeholder="Last name" /> */}
        <input
          {...register("lastName", {
            minLength: { value: 2, message: "Min length should be 2" },
          })}
          placeholder="Last name"
        />
        <select {...register("category")}>
          <option value="">Select ...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <input type="checkbox" {...register("checkbox")} value="A" />
        <input type="checkbox" {...register("checkbox")} value="B" />
        <input type="checkbox" {...register("checkbox")} value="C" />

        <input type="radio" {...register("radio")} value="A" />
        <input type="radio" {...register("radio")} value="B" />
        <input type="radio" {...register("radio")} value="C" />

        <input type="submit" />
      </form>
    </div>
  );
}

export default FormOne;
