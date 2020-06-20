import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import constants from "../constants";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

const UploadPhoto = ({ route, navigation }) => {
  const [img, setImg] = useState();
  const { photo, uri } = route.params;

  const setting = async () => {
    const file = await FileSystem.readAsStringAsync(uri, {
      encoding: FileSystem.EncodingType.Base64,
    });
    setImg(file);
  };

  useEffect(() => {
    setting();
  }, []);

  const upload = async () => {
    try {
      const trans = await axios
        // .post("https://bigheadnose.herokuapp.com/img_test", { img })
        // .post("http://0.0.0.0:5000/predict", { img });
        .post(
          "http://ec2-13-124-223-25.ap-northeast-2.compute.amazonaws.com:5000/predict",
          { img }
        );

      if (trans) {
        const res = JSON.parse(trans.request.response);

        navigation.navigate("Result", { res });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Image
        source={{ uri: photo.uri }}
        style={{
          width: constants.width / 1.5,
          height: constants.width / 1.5,
          marginBottom: 100,
          borderRadius: 15,
        }}
      />
      <TouchableOpacity onPress={upload}>
        <Button>
          <Text>퍼스널 컬러 결과 확인하기</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  );
};

export default UploadPhoto;
