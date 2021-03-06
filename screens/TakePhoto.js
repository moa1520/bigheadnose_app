import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import constants from "../constants";
import Loader from "../components/Loader";

const Container = styled.View`
  flex: 1;
  background-color: #2d3436;
`;

const CameraView = styled.View`
  background-color: lightblue;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text``;

const Button = styled.View`
  background-color: #2f3542;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  border: 10px solid rgba(255, 255, 255, 0.8);
`;

const Bottom = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TakePhoto = ({ navigation }) => {
  const cameraRef = useRef();
  const [canTakePhoto, setCanTakePhoto] = useState(true);
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => {
          if (cameraType == Camera.Constants.Type.front) {
            setCameraType(Camera.Constants.Type.back);
          } else {
            setCameraType(Camera.Constants.Type.front);
          }
        }}
        style={{ marginRight: 20 }}
      >
        <Ionicons name={"ios-sync"} size={28} color={"gray"} />
      </TouchableOpacity>
    ),
  });

  const takePhoto = async () => {
    if (!canTakePhoto) {
      return;
    }
    try {
      setCanTakePhoto(false);
      const { uri } = await cameraRef.current.takePictureAsync({
        quality: 1,
      });
      const asset = await MediaLibrary.createAssetAsync(uri);
      navigation.navigate("UploadPhoto", { photo: asset, uri });
      setCanTakePhoto(true);
    } catch (e) {
      console.log(e);
      setCanTakePhoto(true);
    }
  };

  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === "granted") {
        setHasPermission(true);
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : hasPermission ? (
        <>
          <Camera
            ref={cameraRef}
            type={cameraType}
            style={{
              justifyContent: "flex-end",
              padding: 15,
              width: constants.width,
              height: constants.width,
            }}
          />
          <Bottom>
            <TouchableOpacity onPress={takePhoto} disabled={!canTakePhoto}>
              <Button />
            </TouchableOpacity>
          </Bottom>
        </>
      ) : null}
    </Container>
  );
};

export default TakePhoto;
