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

  const EditForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 5px;
  `;

  const EditName = styled.input`
    background-color: #2d2d2d;
    border-radius: 5px;
    border: none;
    color: white;
    outline: none;
    padding: 7px;
  `;

  const EditEmail = styled.input`
    background-color: #2d2d2d;
    border-radius: 5px;
    border: none;
    color: white;
    outline: none;
    padding: 7px;
  `;

  const Save = styled.button`
    background-color: #ff4c6a;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    &:hover {
      background: #f7748a;
      cursor: pointer;
    }
  `;

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

  const EditEmailWrap = styled.div`
    padding: 5px;
  `;

  const EditNameWrap = styled.div`
    padding: 5px;
  `;

  const SaveWrap = styled.div``;

  return (
    <UserWrap>
      {isEdit ? (
        <EditForm onSubmit={handleOnEditSubmit}>
          <EditNameWrap>
            <EditName placeholder="Name" name="name" defaultValue={name} />
          </EditNameWrap>
          <EditEmailWrap>
            <EditEmail placeholder="Email" name="email" defaultValue={email} />
          </EditEmailWrap>
          <SaveWrap>
            <Save onSubmit={handleOnEditSubmit}>Save</Save>
          </SaveWrap>
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
