import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const Result = ({ route }) => {
  const { res } = route.params;

  return (
    <Container>
      <Text>결과</Text>
      <Text>봄: {res.spring}</Text>
      <Text>여름: {res.summer}</Text>
      <Text>가을: {res.fall}</Text>
      <Text>겨울: {res.winter}</Text>
    </Container>
  );
};

export default Result;
