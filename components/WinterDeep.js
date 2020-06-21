import React, { useState } from "react";
import styled from "styled-components";
import { View, Image } from "react-native";
import constants from "../constants";

const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: #2d3436;
`;

const Banner = styled.View`
  width: 100%;
  height: 204px;
  align-items: center;
  justify-content: center;
`;

const Describe = styled.Text`
  color: white;
`;

const Block = styled.TouchableOpacity`
  width: 90%;
  padding: 10px;
`;

export default () => {
  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);

  const menu1Handle = (p) => {
    if (p === false) {
      setMenu1(true);
      setMenu2(false);
      setMenu3(false);
    }
  };
  const menu2Handle = (p) => {
    if (p === false) {
      setMenu1(false);
      setMenu2(true);
      setMenu3(false);
    }
  };
  const menu3Handle = (p) => {
    if (p === false) {
      setMenu1(false);
      setMenu2(false);
      setMenu3(true);
    }
  };
  const menu4Handle = (p) => {
    if (p === false) {
      setMenu1(false);
      setMenu2(false);
      setMenu3(false);
    }
  };

  return (
    <Conatiner>
      <Banner style={{ backgroundColor: "rgba(109, 33, 79, 0.7)" }}>
        <Text style={{ fontSize: 28, color: "#2d3436" }}>선명하고 도도한</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#2d3436" }}>
          겨울 딥 톤
        </Text>
        <Text style={{ fontSize: 28, color: "#2d3436" }}>Winter Deep Tone</Text>
      </Banner>
      <Banner
        style={{
          backgroundColor: "rgba(109, 33, 79, 1.0)",
          height: 180,
        }}
      >
        <Describe style={{ textAlign: "center" }}>
          ‘겨울 쿨 딥 톤`은 저명도 저채도의 {"\n"}블랙이 섞인 색이 잘 어울리는
          타입입니다. {"\n"}‘겨울 쿨 딥 톤’의 장점은 하얀 스킨톤 덕분에 {"\n"}
          시크하고 도도한 매력을 풍긴다는 것입니다. {"\n"}다만, 파스텔톤의
          여리여리한 메이크업을 할 경우 {"\n"}지나치게 창백하고 핏기없어 보일 수
          있으니 {"\n"}주의해야 합니다.
        </Describe>
      </Banner>
      <Banner style={{ height: 120 }}>
        <Text style={{ fontSize: 24 }}>당신의</Text>
        <Text style={{ fontSize: 24 }}>
          <Text style={{ fontWeight: "bold" }}>겨울 딥 톤</Text>의 특징
        </Text>
      </Banner>
      <Block
        style={{ backgroundColor: "rgba(89, 98, 117,1.0)" }}
        onPress={() => menu1Handle(menu1)}
      >
        <Text style={{ color: "white" }}>어울리는 컬러</Text>
      </Block>
      {menu1 ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            alignItems: "center",
            width: "90%",
          }}
        >
          <Image
            source={{
              uri:
                "https://www.ifamily.co.kr/image/arda/result/graph_winter_cd.jpg",
            }}
            style={{
              width: constants.width * 0.9,
              height: 337,
              resizeMode: "contain",
            }}
          />
          <View style={{ paddingVertical: 20 }}>
            <Text>
              당신과 조화를 이루는 색은 저채도 저명도의 어둡고 진한 색입니다.
              {"\n"}
              ‘겨울 쿨 딥＇은 흰 빛이 섞인 파스텔 톤 보다는 진한 레드나
              블랙이섞인 어두운 컬러가 잘 어울립니다.
            </Text>
          </View>
          <Image
            source={{
              uri:
                "https://www.ifamily.co.kr/image/arda/result/palette_winter_cd.jpg",
            }}
            style={{
              width: constants.width * 0.8,
              height: 180,
              resizeMode: "contain",
            }}
          />
        </View>
      ) : null}
      <Block
        style={{ backgroundColor: "rgba(33, 140, 116,1.0)" }}
        onPress={() => menu2Handle(menu2)}
      >
        <Text style={{ color: "white" }}>베스트 스타일링</Text>
      </Block>
      {menu2 ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            alignItems: "center",
            width: "90%",
          }}
        >
          <View style={{ width: "100%", marginTop: 20 }}>
            <Text style={{ fontWeight: "bold" }}>1. 헤어</Text>
            <Text>
              푸른빛이 도는 흑발 또는 딥한 브라운 계열로 염색할 경우 흰 피부를
              더욱 돋보이게 해 줍니다. {"\n"}
              {"\n"}- 스타일링 귀를 살짝 덮는 길이의 숏컷으로 도도한 이미지를
              연출할 수 있습니다.
            </Text>
          </View>
          <View style={{ width: "100%", marginTop: 20 }}>
            <Text style={{ fontWeight: "bold" }}>2. 패션</Text>
            <Text>
              무채색의 옷에 그린, 블루, 퍼플을 포인트 컬러로 잘 활용하면
              고급스러우면서도 세련된 분위기를 표한할 수 있습니다. {"\n"}
              하의/신발은 올블랙에 진한 블러드 레드 컬러의 자켓을 걸치면
              모던하면서도 카리스마 있는 스타일링이 가능합니다.
            </Text>
          </View>
          <Image
            style={{
              marginTop: 20,
              width: constants.width * 0.9,
              height: 530,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://www.ifamily.co.kr/image/icolor/fashion_wcd.png",
            }}
          />
        </View>
      ) : null}
      <Block
        style={{ backgroundColor: "rgba(196, 69, 105,1.0)" }}
        onPress={() => menu3Handle(menu3)}
      >
        <Text style={{ color: "white" }}>유의해야 할 점</Text>
      </Block>
      {menu3 ? (
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            alignItems: "center",
            width: "90%",
          }}
        >
          <View style={{ width: "100%" }}>
            <Text>
              탁하거나 노란 기가 많이 섞인 색상은 피해주세요. 이러한 색은 얼굴과
              조화되지 못하여 색만 둥둥 떠 보이거나 안색을 칙칙하게 만들 수
              있어요. 또한 올리브, 코랄, 오렌지, 골드 등 주황빛이 들어간 컬러를
              사용할 경우 얼굴의 잡티나 주름이 부각되고 자칫하면 피곤한 인상을
              줄 수 있어요.
            </Text>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 10 }}
            >
              잘 안 어울리는 색
            </Text>
          </View>
          <Image
            style={{
              width: constants.width * 0.9,
              height: 120,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://www.ifamily.co.kr/image/icolor/hc_winter.png",
            }}
          />
          <View style={{ marginTop: 30, width: "100%" }}>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              헤어
            </Text>
            <Text>
              - 블론드, 오렌지 브라운, 브라운 등 노란기가 강한 색은 피하는 것이
              좋아요.
            </Text>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              패션
            </Text>
            <Text>
              - 액세서리는 골드보다는 실버가 좋고, 큰 보석으로 장식된 액세서리를
              하는 것이 잘 어울려요. {"\n"}- 스팽글, 트위드, 레더 소재는 잘
              어울리지만, 레이스, 쉬폰, 린넨 소재는 잘 어울리지 않아요. {"\n"}-
              옷 패턴으로는 자잘한 무늬보다 큰 기하학 패턴, 스트라이프, 지브라가
              어울리며 모던하고 클리어한 이미지가 잘맞아요.
            </Text>
          </View>
        </View>
      ) : null}
    </Conatiner>
  );
};
