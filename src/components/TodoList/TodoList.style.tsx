import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  min-width: 320px;
  width: 40%;
  max-width: 550px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const InfoHeader = styled.div`
  display: flex;
  background-color: #f9f7ff;
  padding: 10px 30px;
  border-radius: 15px;
  justify-content: space-between;
  border-bottom: 1px solid #ededed;
`;
export const InfoDate = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InfoDay = styled.p`
  font-size: 23px;
  font-weight: bold;
  color: #5b45ed;
`;
export const InfoMonth = styled.p`
  color: #595959;
`;
export const InfoTotalTasks = styled.div`
  color: #6e6e6e;
  font-weight: 500;
  font-size: 15px;
`;
