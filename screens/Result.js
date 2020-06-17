import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FallDeep from "../components/FallDeep";
import FallSoft from "../components/FallSoft";
import FallWarm from "../components/FallWarm";
import SpringBright from "../components/SpringBright";
import SpringWarm from "../components/SpringWarm";
import SummerCool from "../components/SummerCool";
import SpringLight from "../components/SpringLight";
import SummerLight from "../components/SummerLight";
import SummerSoft from "../components/SummerSoft";
import WinterBright from "../components/WinterBright";
import WinterCool from "../components/WinterCool";
import WinterDeep from "../components/WinterDeep";
import { ScrollView, TouchableOpacity } from "react-native";
import constants from "../constants";
import { PieChart } from "react-native-chart-kit";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text``;

const ComponentView = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: skyblue;
`;

const BackBtn = styled.View`
  width: 100px;
  height: 30px;
  background-color: skyblue;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Block = styled.View`
  width: 25%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const BlockContainer = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  height: 40px;
  opacity: 0.8;
  border: 0.5px solid white;
`;

const Result = ({ route, navigation }) => {
  const { res } = route.params;
  // let res = { spring: 0, summer: 12, fall: 67, winter: 21 };

  const [fallDeep, setFallDeep] = useState(false);
  const [fallSoft, setFallSoft] = useState(false);
  const [fallWarm, setFallWarm] = useState(false);
  const [springBright, setSpringBright] = useState(false);
  const [springLight, setSpringLight] = useState(false);
  const [springWarm, setSpringWarm] = useState(false);
  const [summerCool, setSummerCool] = useState(false);
  const [summerLight, setSummerLight] = useState(false);
  const [summerSoft, setSummerSoft] = useState(false);
  const [winterBright, setWinterBright] = useState(false);
  const [winterCool, setWinterCool] = useState(false);
  const [winterDeep, setWinterDeep] = useState(false);

  const findMax = (ko) => {
    let max = 0;
    let maxIndex = 0;
    let maxStr = "";
    for (let i = 0; i < ko.length; i++) {
      if (max < ko[i][1]) {
        max = ko[i][1];
        maxStr = ko[i][0];
        maxIndex = i;
      }
    }
    return { max, maxIndex, maxStr };
  };

  const preprocessing = (res) => {
    let ko = Object.entries(res);
    const max1 = findMax(ko);
    ko.splice(max1.maxIndex, 1);
    const max2 = findMax(ko);
    ko.splice(max2.maxIndex, 1);

    return { max1, max2 };
  };

  const { max1, max2 } = preprocessing(res);

  const toneClassify = (max1, max2) => {
    // 비율에 따라 나눔
    if (max1.maxStr === "spring") {
      if (max1.max >= 90) {
        setSpringWarm(true);
        return;
      } else {
        if (max2.maxStr === "summer") {
          setSpringLight(true);
        } else if (max2.maxStr === "fall") {
          setSpringWarm(true);
        } else {
          setSpringBright(true);
        }
      }
    } else if (max1.maxStr === "summer") {
      if (max1.max >= 90) {
        setSummerCool(true);
        return;
      } else {
        if (max2.maxStr === "spring") {
          setSummerLight(true);
        } else if (max2.maxStr === "fall") {
          setSummerSoft(true);
        } else {
          setSummerCool(true);
        }
      }
    } else if (max1.maxStr === "fall") {
      if (max1.max >= 90) {
        setFallWarm(true);
        return;
      } else {
        if (max2.maxStr === "spring") {
          setFallWarm(true);
        } else if (max2.maxStr === "summer") {
          setFallSoft(true);
        } else {
          setFallDeep(true);
        }
      }
    } else {
      if (max1.max >= 90) {
        setWinterCool(true);
        return;
      } else {
        if (max2.maxStr === "spring") {
          setWinterBright(true);
        } else if (max2.maxStr === "summer") {
          setWinterCool(true);
        } else {
          setWinterDeep(true);
        }
      }
    }
  };

  useEffect(() => {
    toneClassify(max1, max2);
  }, []);

  const data = [
    {
      name: "봄",
      percentage: res.spring,
      color: "#fdcb6e",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "여름",
      percentage: res.summer,
      color: "#0984e3",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "가을",
      percentage: res.fall,
      color: "#e17055",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "겨울",
      percentage: res.winter,
      color: "silver",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView>
      <Container>
        <PieChart
          data={data}
          width={constants.width}
          height={220}
          chartConfig={{
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false, // optional
          }}
          accessor="percentage"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
        <BlockContainer>
          <Block style={{ backgroundColor: "#fdcb6e" }}>
            <Text style={{ fontWeight: "bold" }}>봄</Text>
          </Block>
          <Block style={{ backgroundColor: "#0984e3" }}>
            <Text style={{ fontWeight: "bold" }}>여름</Text>
          </Block>
          <Block style={{ backgroundColor: "#e17055" }}>
            <Text style={{ fontWeight: "bold" }}>가을</Text>
          </Block>
          <Block style={{ backgroundColor: "silver" }}>
            <Text style={{ fontWeight: "bold" }}>겨울</Text>
          </Block>
        </BlockContainer>
        <BlockContainer>
          <Block style={{ backgroundColor: "#fdcb6e" }}>
            <Text style={{ fontWeight: "bold" }}>{res.spring}%</Text>
          </Block>
          <Block style={{ backgroundColor: "#0984e3" }}>
            <Text style={{ fontWeight: "bold" }}>{res.summer}%</Text>
          </Block>
          <Block style={{ backgroundColor: "#e17055" }}>
            <Text style={{ fontWeight: "bold" }}>{res.fall}%</Text>
          </Block>
          <Block style={{ backgroundColor: "silver" }}>
            <Text style={{ fontWeight: "bold" }}>{res.winter}%</Text>
          </Block>
        </BlockContainer>
        <ComponentView>
          {fallDeep ? <FallDeep /> : null}
          {fallSoft ? <FallSoft /> : null}
          {fallWarm ? <FallWarm /> : null}
          {springBright ? <SpringBright /> : null}
          {springLight ? <SpringLight /> : null}
          {springWarm ? <SpringWarm /> : null}
          {summerCool ? <SummerCool /> : null}
          {summerLight ? <SummerLight /> : null}
          {summerSoft ? <SummerSoft /> : null}
          {winterBright ? <WinterBright /> : null}
          {winterCool ? <WinterCool /> : null}
          {winterDeep ? <WinterDeep /> : null}
        </ComponentView>
        <TouchableOpacity
          style={{ marginTop: 10 }}
          onPress={() => navigation.navigate("Home")}
        >
          <BackBtn>
            <Text>처음으로</Text>
          </BackBtn>
        </TouchableOpacity>
      </Container>
    </ScrollView>
  );
};

export default Result;
