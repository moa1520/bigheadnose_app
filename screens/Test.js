import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TouchableOpacity, Image } from "react-native";
import * as FileSystem from "expo-file-system";
import axios from "axios";

const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Button = styled.View`
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: lightgoldenrodyellow;
`;

const Text = styled.Text`
  font-size: 16px;
`;

const Test = () => {
  const [file, setFile] = useState();
  const imgLocation =
    "/Users/taekyoungkang/Desktop/TK/capstone/big/img/0525.jpeg";

  const loadFile = async () => {
    const obj = await FileSystem.readAsStringAsync(imgLocation, {
      encoding: FileSystem.EncodingType.Base64,
    });
    setFile(obj);
  };

  useEffect(() => {
    loadFile();
  }, []);

  const sendFunction = () => {
    axios
      .post("https://bigheadnose.herokuapp.com/img_test", { img: file })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <View>
      <Image
        style={{ width: 250, height: 250, marginBottom: 20 }}
        source={{ uri: imgLocation }}
      />
      <TouchableOpacity onPress={sendFunction}>
        <Button>
          <Text>Send!</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Test;
