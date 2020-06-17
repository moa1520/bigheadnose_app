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

const TitleContainer = styled.View`
  flex: 2;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 36px;
  font-weight: bold;
  color: black;
`;

const Body = styled.View`
  flex: 1;
`;

const Home = ({ navigation }) => {
  return (
    <Container>
      <TitleContainer>
        <Title style={{ color: "#d63031" }}>Big</Title>
        <Title>Head</Title>
        <Title>Nose</Title>
      </TitleContainer>
      <Body>
        <TouchableOpacity onPress={() => navigation.navigate("TakePhoto")}>
          <Button>
            <Text>퍼스널 컬러 진단하기</Text>
          </Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default Home;
