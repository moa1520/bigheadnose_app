import React from "react";
import styled from "styled-components";

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

export default () => {
  return (
    <Conatiner>
      <Text>FallSoft</Text>
    </Conatiner>
  );
};
