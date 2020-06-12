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

const UploadPhoto = ({ route }) => {
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

  const upload = () => {
    axios
      // .post("https://bigheadnose.herokuapp.com/img_test", { img })
      // .post("http://0.0.0.0:5000/test", { img })
      .post("http://ec2-15-164-227-51.ap-northeast-2.compute.amazonaws.com:5000/predict", { img })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Image
        source={{ uri: photo.uri }}
        style={{
          width: constants.width / 1.5,
          height: constants.width / 1.5,

          marginBottom: 100,
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
