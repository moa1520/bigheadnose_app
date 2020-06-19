import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "../components/Loader";
import constants from "../constants";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";
import { Image, ScrollView, TouchableOpacity } from "react-native";

const View = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  color: black;
  font-weight: 600;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  position: absolute;
  right: 5px;
  top: 15px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.8;
  border: 0.2px solid #999;
`;

const ImageContainer = styled.View``;

const SelectPhoto = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [hasPermission, setHasPermission] = useState(false);
  const [selected, setSelected] = useState();
  const [allPhotos, setAllPhotos] = useState();

  const changeSelected = (photo) => {
    setSelected(photo);
  };

  const getPhotos = async () => {
    try {
      const { assets } = await MediaLibrary.getAssetsAsync({ first: 100 });
      const [firstPhoto] = assets;
      setSelected(firstPhoto);
      setAllPhotos(assets);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const askPermission = async () => {
    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status === "granted") {
        setHasPermission(true);
        getPhotos();
      }
    } catch (e) {
      console.log(e);
      setHasPermission(false);
    }
  };

  const handleSelected = async () => {
    const { localUri } = await MediaLibrary.getAssetInfoAsync(selected);
    navigation.navigate("UploadPhoto", { photo: selected, uri: localUri });
  };

  useEffect(() => {
    askPermission();
  }, []);

  return (
    <View>
      {loading ? (
        <Loader />
      ) : (
        <View>
          {hasPermission ? (
            <>
              <Image
                style={{ width: constants.width, height: constants.height / 2 }}
                source={{ uri: selected.uri }}
              />
              <Button onPress={handleSelected}>
                <Text>사진 선택</Text>
              </Button>
              <ScrollView
                contentContainerStyle={{
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {allPhotos.map((photo) => (
                  <TouchableOpacity
                    key={photo.id}
                    onPress={() => changeSelected(photo)}
                  >
                    <ImageContainer>
                      <Image
                        key={photo.id}
                        source={{ uri: photo.uri }}
                        style={{
                          width: constants.width / 3,
                          height: constants.height / 6,
                          opacity: photo.id === selected.id ? 0.3 : 1,
                        }}
                      />
                    </ImageContainer>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </>
          ) : null}
        </View>
      )}
    </View>
  );
};

export default SelectPhoto;
