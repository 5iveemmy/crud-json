import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const AddUser = ({ onAdd }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleOnSubmit = (e) => {
    console.log({ e });
    onAdd(e.name, e.email);
  };

  const Form = styled.form``;
  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <h3>Add User</h3>
      <input placeholder="Name" {...register("name", { required: true })} />
      {errors.name?.type === "required" && "Name is required"}
      <input placeholder="Email" {...register("email", { required: true })} />
      {errors.email?.type === "required" && "Email is required"}
      <button type="submit">Add</button>
      <hr />
    </Form>
  );
};
