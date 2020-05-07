import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Image, TouchableOpacity } from "react-native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import { RNS3 } from "react-native-s3-upload";
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
  const { photo } = route.params;

  // const file = {
  //   uri: photo.uri,
  //   name: "image.png",
  //   type: "image/png",
  // };

  const options = {
    bucket: "headnose",
    region: "ap-northeast-2",
    accessKey: "AKIAUDD2AATE4FHIFUIE",
    secretKey: "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",
    successActionStatus: 201,
  };

  const upload = () => {
    axios
      .post("http://bigheadnose.herokuapp.com:5000/", { uri: photo.uri })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // // 아마존으로 사진 전송
    // const put = await RNS3.put(file, options).then((response) => {
    //   if (response.status !== 201)
    //     throw new Error("Failed to upload image to S3");
    //   console.log(response.body);
    // });
    // if (put !== undefined) {
    //   console.log(put);
    //   // 파이썬과 통신 부분
    // }
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
