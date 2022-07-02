import React from "react";
import styled from "styled-components";

const Box = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  flex-grow: 1;
  color: #292929;
  padding: 10px;
`;

type Props = {
  title: string;
  color: string;
  total: number;
};

const SummaryBox = ({ title, color, total }: Props) => {
  return (
    <Box bgColor={color}>
      <h5>
        {title}: {total}
      </h5>
    </Box>
  );
};

export default SummaryBox;
