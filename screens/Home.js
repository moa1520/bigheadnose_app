import React from "react";
import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #81ecec;
`;

const Button = styled.View`
  background-color: #00cec9;
  padding: 5px;
`;

const Text = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.navigate("TakePhoto")}>
        <Button>
          <Text>퍼스널 컬러 진단하기</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
