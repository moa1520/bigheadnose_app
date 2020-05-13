import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import constants from "../constants";

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Button = styled.View`
  border: 1px solid lightgray;
  padding: 10px;
  background-color: skyblue;
`;

const Text = styled.Text`
  font-size: 16px;
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
      .post("http://127.0.0.1:5000/img_test", { img })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Conatiner>
      <Image
        source={{ uri: photo.uri }}
        style={{
          width: constants.width / 1.5,
          height: constants.width / 1.5,
          marginBottom: 30,
        }}
      />
      <TouchableOpacity onPress={upload}>
        <Button>
          <Text>퍼스널 컬러 확인하기</Text>
        </Button>
      </TouchableOpacity>
    </Conatiner>
  );
};

export default UploadPhoto;
