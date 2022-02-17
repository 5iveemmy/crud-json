import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

export const AddUser = ({ onAdd }) => {
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      firstName: "",
      surname: "",
      isShop: false,
    },
  });

  const handleOnSubmit = (e) => {
    console.log({ e });
    onAdd(e.name, e.email);
  };

  const Form = styled.form``;

  const Input = styled.input`
    background-color: #2d2d2d;
    border-radius: 5px;
    border: none;
    color: white;
    outline: none;
    width: 100%;
    padding: 13px;
  `;

  const InputWrap = styled.div`
    padding: 10px 0px;
  `;

  const AddWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0px;
  `;

  const AddBtn = styled.button`
    background-color: #ff4c6a;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    &:hover {
      background: #f7748a;
      cursor: pointer;
    }
  `;

  const ErrorSpan = styled.span`
    padding-top: 10px;
  `;

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <InputWrap>
        <Input
          {...register("name", { required: true })}
          placeholder="Enter your name..."
          type="name"
          name="name"
        />
        {errors.name?.type === "required" && "Name is required"}
      </InputWrap>
      <InputWrap>
        <Input
          {...register("email", {
            required: "Please enter your email address",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email address",
            },
          })}
          placeholder="Enter your email..."
          type="email"
          name="email"
          className={!errors.email && dirtyFields.email}
        />
        <ErrorSpan>{errors.email?.message}</ErrorSpan>
      </InputWrap>
      <AddWrap>
        <AddBtn type="submit">Add</AddBtn>
      </AddWrap>
    </Form>
  );
};
