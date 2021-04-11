import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-width: 300px;
`;

export const TextInput = styled.input`
  padding: 10px;
  min-width: 240px;
  width: 95%;
  max-width: 400px;
  margin-right: 10px;
  font-size: 19px;
  border: 2px solid #ff9ca9;
  border-radius: 5px;
  color: #303030;
`;

export const FormErrorText = styled.p`
  font-size: 15px;
  color: #ff3650;
`;

export const AddTodoButton = styled.button`
  background-color: #ff4d64;
  color: #ffffff;
  font-size: 30px;
  min-width: 50px;
  min-height: 50px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid #ff3650;
  align-self: flex-start;
  cursor: pointer;
`;
