import React from "react";
import styled from "styled-components";
import { TouchableOpacity, View } from "react-native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
`;

const Button = styled.View`
  background-color: #808e9b;
  padding: 8px 20px 8px 20px;
  margin-top: 30;
  border-radius: 20;
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
  font-size: 72px;
  font-weight: bold;
  color: white;
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

      <Text style={{ color: "#ffdd59", padding: 10, fontSize: 20 }}>
        사진은 자연광에서 찍어주세요
      </Text>

      <Body>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("PhotoNavigation", { screen: "TakePhoto" })
          }
        >
          <Button>
            <Text>퍼스널 컬러 진단하기</Text>
          </Button>
        </TouchableOpacity>
      </Body>
    </Container>
  );
};

export default Home;
