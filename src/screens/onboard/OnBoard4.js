import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef} from 'react';
import styled from 'styled-components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import {TopNavigation, Dots, UserInfo} from '../../components/Components';

const Container = styled.View`
  background-color: black;
  height: 100%;
`;
const Upper = styled.View`
  margin-left: 20px;
  height: 40%;
  justify-content: center;
`;
const Lower = styled(Animated.View)`
  height: 60%;
  background-color: white;
  padding: 20px;
  margin: 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-around;
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

const Input = styled.TextInput`
  font-size: 15px;
  border-bottom-width: 2px;
  font-family: 'pop';
  padding: 10px;
  margin: 0px;
  width: ${props => props.width || 100}%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const OnBoard4 = () => {
  const navigation = useNavigation();
  const offset = useRef(new Animated.Value(100)).current;
  const slideup = useRef(new Animated.Value(1000)).current;

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
        toValue: 1000,
        duration: 700,
        easing: Easing.bezier(0.65, 0, 0.35, 1),
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {});
  };

  return (
    <Container>
      <TopNavigation />
      <Upper>
        <TitleCont>
          <Title style={stylelower}>Last</Title>
        </TitleCont>
        <TitleCont>
          <Title style={stylelower}>bits</Title>
        </TitleCont>
      </Upper>
      <Lower style={styleslideup}>
        <View style={{flex:1}}>
          <UserInfo />
        </View>
        <View>
          <TypeCont>
            <TypeName>Next</TypeName>
          </TypeCont>
          <Dots item={4} selected={3} />
        </View>
      </Lower>
    </Container>
  );
};

export default OnBoard4;
