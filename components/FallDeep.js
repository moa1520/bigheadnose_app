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
      <Banner style={{ backgroundColor: "rgba(240, 147, 43, 0.8)" }}>
        <Text style={{ fontSize: 28 }}>시크하고 도도한</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>가을 딥 톤</Text>
        <Text style={{ fontSize: 28 }}>Autumn Deep Tone</Text>
      </Banner>
      <Banner style={{ backgroundColor: "#c0392b", height: 180 }}>
        <Describe>'가을 웜 톤'은 저명도의 어둡고</Describe>
        <Describe>음영있는 색이 잘 어울리는 타입입니다.</Describe>
        <Describe>'가을 웜 톤'의 장점은 진한 스킨톤 덕분에</Describe>
        <Describe>섹시하고 관능적인 매력을 뽐낼 수 있다는 것입니다.</Describe>
        <Describe style={{ marginTop: 20 }}>
          다만, 청순하고 소녀 같은 메이크업과는
        </Describe>
        <Describe>다소 거리가 있어 장단점이 확실한 톤입니다...</Describe>
      </Banner>
      <Banner style={{ height: 120 }}>
        <Text style={{ fontSize: 24 }}>당신의</Text>
        <Text style={{ fontSize: 24 }}>
          <Text style={{ fontWeight: "bold" }}>가을 딥 톤</Text>의 특징
        </Text>
      </Banner>
      <Block
        style={{ backgroundColor: "#e58e26" }}
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
                "https://www.ifamily.co.kr/image/arda/result/graph_autumn_wd.jpg",
            }}
            style={{
              width: constants.width * 0.9,
              height: 337,
              resizeMode: "contain",
            }}
          />
          <View style={{ paddingVertical: 20 }}>
            <Text>
              당신과 조화를 이루는 색은 노란기나 붉은 기가 도는 진한색입니다.
            </Text>
            <Text>
              '가을 딥 톤'은 흰빛이 섞인 고명도의 파스텔 톤 보다는 붉은빛이 섞인
              저명도의 어두운 컬러가 잘어울립니다.
            </Text>
          </View>
          <Image
            source={{
              uri:
                "https://www.ifamily.co.kr/image/arda/result/palette_autumn_wd.jpg",
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
        style={{ backgroundColor: "#218c74" }}
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
            <Text>- 컬러</Text>
            <Text>
              붉은빛이 도는 딥한 오렌지 브라운 컬러의 염색이 잘 어울립니다.
            </Text>
            <Text style={{ marginTop: 20 }}>
              - 스타일링 굵은 웨이브가 들어간 긴 머리는 무게감 있으면서 안정된
              분위기를 연출해줍니다.
            </Text>
            <Text style={{ fontWeight: "bold", marginTop: 30 }}>2. 패션</Text>
            <Text>가을 뮤트톤보다 채도가 높은 컬러의 옷이 어울립니다. </Text>
            <Text>
              짙은 브라운 컬러나 버건디 컬러의 메머이드라인 드레스를 입으면 한층
              더 성숙해 보일 것입니다.
            </Text>
            <Text>
              단색의 옷에 레오파드나 호피무늬 같은 과감한 패턴의 악세서리로
              포인트를 주는 것도 좋습니다.
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
              uri: "https://www.ifamily.co.kr/image/icolor/fashion_awd.png",
            }}
          />
        </View>
      ) : null}
      <Block
        style={{ backgroundColor: "#2c2c54" }}
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
              {" "}
              옅은 색부터 깊은 색까지 두루두루 어울려 ‘색조의 여왕’이라고 불리는
              가을웜톤이지만, 흰 기가 강한 파스텔 색상은 소화하기 어려워요. 이런
              색을 사용하면 이목구비와 조화를 이루지 못하고 얼굴이 칙칙해 보일
              수 있어요. 겨울과 봄 브라이트 계열의 비비드한 컬러도 주의해주세요.
              형광기가 강하고 채도 높은 원색을 이용한 스타일링은 색깔만 둥둥
              떠보일 수 있어요.
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
              uri: "https://www.ifamily.co.kr/image/icolor/hc_autumn.png",
            }}
          />
          <View style={{ marginTop: 30, width: "100%" }}>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              헤어
            </Text>
            <Text>
              - 바이올렛, 블루계열, 오렌지, 블론드, 화이트 블론드는 피하는 것이
              좋아요.
            </Text>
            <Text
              style={{ fontWeight: "bold", marginTop: 30, marginBottom: 20 }}
            >
              패션
            </Text>
            <Text>
              - 액세서리는 실버보다는 골드나 로즈골드 색상을 선택하는 것이
              좋아요.
            </Text>
            <Text>
              - 레오파드, 체크, 페이즐리 패턴을 이용한 히피나 빈티지 스타일이 잘
              어울려요.
            </Text>
            <Text>
              - 옷 소재로 스웨이드나 레더 소재가 좋고, 트위드, 에나멜 소재는
              피하는 것이좋아요. 광택나는 소재보다는 벨벳과 같은무광택 소재가
              고급스러운 느낌을 살려줘요.
            </Text>
          </View>
        </View>
      ) : null}
    </Conatiner>
  );
};
