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

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 10px;
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

  return (
    <ScrollView>
      <Container>
        <Text>결과</Text>
        <Text>봄: {res.spring}%</Text>
        <Text>여름: {res.summer}%</Text>
        <Text>가을: {res.fall}%</Text>
        <Text>겨울: {res.winter}%</Text>
        <Text>====================</Text>
        <Text>
          가장 높은 비율: {max1.maxStr} : {max1.max}
        </Text>
        <Text>
          그 다음 높은 비율: {max2.maxStr} : {max2.max}
        </Text>
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
