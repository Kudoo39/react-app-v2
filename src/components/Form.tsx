import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 2 })}
          id="name"
          type="text"
          className="form-control"
        />
        {formState.errors.name?.type === "required" && (
          <p className="text-danger">The name field is required!</p>
        )}
        {formState.errors.name?.type === "minLength" && (
          <p className="text-danger">The name must be at least 2 characters!</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
export default Form;
