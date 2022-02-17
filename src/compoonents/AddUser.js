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

  const Head = styled.h3`
    text-align: center;
  `;

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

  return (
    <Form onSubmit={handleSubmit(handleOnSubmit)}>
      <Head>Add User</Head>
      <InputWrap>
        <Input placeholder="Name" {...register("name", { required: true })} />
        {errors.name?.type === "required" && "Name is required"}
      </InputWrap>
      <InputWrap>
        <Input placeholder="Email" {...register("email", { required: true })} />
        {errors.email?.type === "required" && "Email is required"}
      </InputWrap>
      <AddWrap>
        <AddBtn type="submit">Add</AddBtn>
      </AddWrap>
    </Form>
  );
};
