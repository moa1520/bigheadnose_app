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
      <Banner style={{ backgroundColor: "rgba(253, 121, 168, 0.2)" }}>
        <Text style={{ fontSize: 28, color: "#2d3436" }}>싱그럽고 화사한</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold", color: "#2d3436" }}>
          여름 라이트 톤
        </Text>
        <Text style={{ fontSize: 28, color: "#2d3436" }}>
          Summer Light Tone
        </Text>
      </Banner>
      <Banner
        style={{
          backgroundColor: "#f78fb3",
          height: 180,
        }}
      >
        <Describe style={{ textAlign: "center" }}>
          ‘여름 쿨 라이트 톤`은 대체로 고명도의{"\n"}은은한 파스텔 톤이 잘 어울
          리는 타입입니다.{"\n"}‘여름 쿨 라이트 톤`의 장점은 싱그러운 피부
          톤입니다.{"\n"}
          {"\n"}다만, 밝고 투명한 피부 때문에{"\n"}피부 요철이 쉽게 눈에 띌 수
          있으니 {"\n"}주의해야 합니다.
        </Describe>
      </Banner>
      <Banner style={{ height: 120 }}>
        <Text style={{ fontSize: 24 }}>당신의</Text>
        <Text style={{ fontSize: 24 }}>
          <Text style={{ fontWeight: "bold" }}>여름 라이트 톤</Text>의 특징
        </Text>
      </Banner>
      <Block
        style={{ backgroundColor: "#f8a5c2" }}
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
                "https://www.ifamily.co.kr/image/arda/result/graph_summer_cl.jpg",
            }}
            style={{
              width: constants.width * 0.9,
              height: 337,
              resizeMode: "contain",
            }}
          />
          <View style={{ paddingVertical: 20 }}>
            <Text>
              당신과 조화를 이루는 색은 회색 기와 푸른 기가 살짝 도는 고명도의
              은은한 파스텔 컬러입니다. {"\n"}‘여름 쿨 라이트 톤’의 컬러는
              흰색이나 연하고 밝은 회색이 섞여 싱그러운 느낌을 줍니다.
            </Text>
          </View>
          <Image
            source={{
              uri:
                "https://www.ifamily.co.kr/image/arda/result/palette_summer_cl.jpg",
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
        style={{ backgroundColor: "rgba(29, 209, 161, 0.6)" }}
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
              - 컬러 진한 흑갈색이나 애쉬 브라운 컬러의 염색은 투명한 피부를
              강조해 줍니다.{"\n"}
              {"\n"}- 스타일링 내추럴한 긴 생머리가 특유의 청초한 느낌을 살려
              주며 잘 어울립니다.{"\n"}
              {"\n"}
            </Text>
          </View>
          <View style={{ width: "100%", marginTop: 20 }}>
            <Text style={{ fontWeight: "bold" }}>2. 패션</Text>
            <Text>
              컬러 대비감이 큰 스타일링 보다는 톤온톤 매치나 무채색의 스타일링이
              어울립니다. {"\n"}대체로 흰색이 베스트 컬러이며, 흰 기가 많이 도는
              파스텔톤의 니트를 입으면 얼굴이 더 생기있어 보일 것 입니다. {"\n"}
              또한 라이트 타입일 경우 고명도의 화려한 패턴보다 트위드 같은
              은은한 패턴이 더 잘어울립니다.
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
              uri: "https://www.ifamily.co.kr/image/icolor/fashion_scl.png",
            }}
          />
        </View>
      ) : null}
      <Block
        style={{ backgroundColor: "rgba(153, 128, 250, 0.5)" }}
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
              흰색이 섞인 파스텔 톤이 잘 어울리는 여름쿨톤은 검은색과 같은
              어두운 색을 사용하면 피곤해 보일 수 있어요. 어두운 색을 쓰고
              싶다면 흰 기가 들어간 색을 사용해주세요. 노란 기가 도는 브라운
              계열을 이용한 스타일링을 하면 얼굴이 칙칙해 보여요. 브라운컬러를
              사용하고 싶을 때는 회색기가 살짝 섞인 애쉬 브라운을 골라주세요.
              카키나 버건디는 더워 보이고 답답한 인상을 주는데한몫을 하니 피하는
              것이 좋아요.
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
              uri: "https://www.ifamily.co.kr/image/icolor/hc_summer.png",
            }}
          />
          <View style={{ marginTop: 30, width: "100%" }}>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              헤어
            </Text>
            <Text>
              - 염색한 머리보다는 원래 자신의 머리색이 가장 잘 어울려요. 염색을
              하고 싶다면 흑발, 금발, 오렌지색은 피해주세요!
            </Text>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              패션
            </Text>
            <Text>
              - 액세서리는 골드보다 실버를 선택하는 것이 좋아요. {"\n"}- 패턴이
              없는 옷이나 작은 패턴의 도트,스트라이프가 잘 어울려요. {"\n"}-
              린넨과 쉬폰 소재가 가장 잘 어울리고, 스팽글 소재는 피하는 것이
              좋아요.
            </Text>
          </View>
        </View>
      ) : null}
    </Conatiner>
  );
};
