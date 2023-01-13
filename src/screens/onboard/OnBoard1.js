import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

const Container = styled.View`
  background-color: black;
  height: 100%;
`;
const Upper = styled.View`
  margin-left: 20px;
  height: 70%;
  overflow: hidden;
`;
const Lower = styled(Animated.View)`
  height: 30%;
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* transform: translateY(250px); */
`;
const TitleCont = styled.View`
  overflow: hidden;
`;
const Title = styled(Animated.Text)`
  color: white;
  font-family: 'playfairBold';
  font-size: 90px;
`;
const SubTitle = styled.Text`
  color: black;
  font-family: 'pop';
  font-size: 20px;
`;
const TypeName = styled.Text`
  color: white;
  font-family: 'playfairBold';
  font-size: 19px;
  padding: 15px;
  text-align: center;
  background-color: black;
  margin-top: 20px;
  border-radius: 10px;
  letter-spacing: 0.5px;
`;
const TypeCont = styled.TouchableOpacity``;

const OnBoard1 = () => {
  const navigation = useNavigation();

  const offset = useRef(new Animated.Value(100)).current;
  const slideup = useRef(new Animated.Value(250)).current;

  const stylelower = {
    transform: [{translateY: offset}],
  };
  const styleslideup = {
    transform: [{translateY: slideup}],
  };

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(offset, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
      Animated.timing(slideup, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, []),
  );

  const onPresshandler = () => {
    Animated.parallel([
      Animated.timing(offset, {
        toValue: 100,
        duration: 700,
        easing: Easing.bezier(0.65, 0, 0.35, 1),
        useNativeDriver: true,
      }),
      Animated.timing(slideup, {
        toValue: 250,
        duration: 700,
        easing: Easing.bezier(0.65, 0, 0.35, 1),
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      navigation.navigate('OnBoard2');
    });
    navigation.navigate('OnBoard2');
  };

  return (
    <Container>
      <Upper>
        <TitleCont>
          <Title style={stylelower}>Let ' s</Title>
        </TitleCont>
        <TitleCont>
          <Title style={stylelower}>set you</Title>
        </TitleCont>
        <TitleCont>
          <Title style={stylelower}>up for</Title>
        </TitleCont>
        <TitleCont>
          <Title style={stylelower}>success</Title>
        </TitleCont>
      </Upper>
      <Lower style={styleslideup}>
        <SubTitle>I am a..</SubTitle>
        <TypeCont onPress={onPresshandler}>
          <TypeName>Recruit</TypeName>
        </TypeCont>
        <TypeCont onPress={onPresshandler}>
          <TypeName>Recruiter</TypeName>
        </TypeCont>
      </Lower>
    </Container>
  );
};

export default OnBoard1;
