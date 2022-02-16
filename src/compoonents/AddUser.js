import React from "react";
import { useForm } from "react-hook-form";

export const AddUser = ({ onAdd }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit && handleSubmit(onSubmit)}>
      <h3>Add User</h3>
      <input placeholder="Name" name="name" />
      {/* <input placeholder="Email" name="email" /> */}
      <input placeholder="Email" {...register("email", { required: true })} />
      {errors.email?.type === "required" && "Email is required"}

      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};
