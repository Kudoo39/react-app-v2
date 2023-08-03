import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description field requires 3 or more characters" }),
  amount: z.number({ invalid_type_error: "Amount field is required" }),
  category: z.string().nonempty ("Category field is required"),
});

type FormData = z.infer<typeof schema>;

const ExpenseList = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {formState.errors.description && (
            <p className="text-danger">
              {formState.errors.description.message}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {formState.errors.amount && (
            <p className="text-danger">{formState.errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Category
          </label>
          <input
            {...register("category")}
            id="category"
            type="select"
            className="form-control"
          />
          {formState.errors.category && (
            <p className="text-danger">{formState.errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <table border={2}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>5</td>
            <td>Grocery</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseList;
