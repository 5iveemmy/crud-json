import React, { useState } from "react";
import styled from "styled-components";

export const User = ({ name, email, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  const UserWrap = styled.div``;

  const EditForm = styled.form``;

  const EditName = styled.input``;
  const EditEmail = styled.input``;
  const Save = styled.button``;
  const Users = styled.div``;
  const SpanName = styled.span``;
  const SpanEmail = styled.span``;
  const UsersDiv = styled.div``;
  const Edit = styled.button``;
  const Delete = styled.button``;

  return (
    <UserWrap>
      {isEdit ? (
        <EditForm onSubmit={handleOnEditSubmit}>
          <EditName placeholder="Name" name="name" defaultValue={name} />
          <EditEmail placeholder="Email" name="email" defaultValue={email} />
          <Save onSubmit={handleOnEditSubmit}>Save</Save>
        </EditForm>
      ) : (
        <Users>
          <SpanName className="user-name">{name}</SpanName>
          <SpanEmail className="user-email">{email}</SpanEmail>
          <UsersDiv>
            <Edit onClick={handleEdit}>Edit</Edit>
            <Delete onClick={handleDelete}>Delete</Delete>
          </UsersDiv>
        </Users>
      )}
    </UserWrap>
  );
};
