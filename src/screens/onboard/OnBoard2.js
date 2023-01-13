import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  Easing,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

import {TopNavigation, Dots} from '../../components/Components';
import InputComp from '../../components/textinput';

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
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;


const OnBoard2 = () => {
  const initial = {
    text: '',
    error: true,
    errorText: 'Required',
  };
  const [name, setName] = useState(initial);
  const [age, setAge] = useState(initial);
  const [phone, setPhone] = useState(initial);
  const [home, setHome] = useState(initial);
  const [country, setCountry] = useState(initial);
  const [check, setCheck] = useState(false);
  console.log(name);

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
    if (name.error || age.error || phone.error || home.error || country.error) {
      setCheck(true);
    } else {
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
      ]).start(({finished}) => {
        navigation.navigate('OnBoard3');
      });
    }
  };

  return (
    <Container>
      <TopNavigation />
      <Upper>
        <TitleCont>
          <Title style={stylelower}>Basics</Title>
        </TitleCont>
        <TitleCont>
          <Title style={stylelower}>First</Title>
        </TitleCont>
      </Upper>
      <Lower style={styleslideup}>
        <View>
          <InputComp
            placeholder={'Full Name'}
            value={name}
            setValue={setName}
            check={check}
            type={['AlphaSpace']}
          />
          <Row>
            <InputComp
              width={30}
              placeholder={'Age'}
              value={age}
              setValue={setAge}
              check={check}
              type={['Number']}
              keyboard="numeric"
            />
            <InputComp
              width={60}
              placeholder={'Phone Number'}
              value={phone}
              setValue={setPhone}
              check={check}
              type={['Number']}
              keyboard="numeric"
            />
          </Row>
          <Row>
            <InputComp
              width={45}
              placeholder={'Home City'}
              value={home}
              setValue={setHome}
              check={check}
              type={['AlphaSpace']}
            />
            <InputComp
              width={50}
              placeholder={'Country'}
              value={country}
              setValue={setCountry}
              check={check}
              type={['AlphaSpace']}
            />
          </Row>
        </View>
        <View>
          <TypeCont onPress={onPresshandler}>
            <TypeName>Next</TypeName>
          </TypeCont>
          <Dots item={4} selected={1} />
        </View>
      </Lower>
    </Container>
  );
};

export default OnBoard2;
