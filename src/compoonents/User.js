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
  const Users = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 0px;
    border-bottom: 0.5px solid #fff;
  `;
  const SpanName = styled.span``;
  const SpanEmail = styled.span``;
  const UsersDiv = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const EditBtn = styled.button`
    background-color: #ff4c6a;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background: #f7748a;
      cursor: pointer;
    }
  `;
  const DeleteBtn = styled.button`
    background-color: #ff4c6a;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background: #f7748a;
      cursor: pointer;
    }
  `;
  const EditWrap = styled.div`
    padding: 0px 5px;
  `;
  const DeleteWrap = styled.div`
    padding: 0px 5px;
  `;

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
            <EditWrap>
              <EditBtn onClick={handleEdit}>Edit</EditBtn>
            </EditWrap>
            <DeleteWrap>
              <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
            </DeleteWrap>
          </UsersDiv>
        </Users>
      )}
    </UserWrap>
  );
};
