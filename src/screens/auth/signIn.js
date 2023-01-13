import {View, Text, TextInput, Image, TouchableOpacity,Animated} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';

// import auth from '@react-native-firebase/auth';

// GoogleSignin.configure({
//   webClientId:
//     '13981871691-ptc1fc8931d1m2dh0nb2g9irprq6dvsl.apps.googleusercontent.com',
// });

const Container = styled.View`
  height: 100%;
  background-color: black;
`;
const Upper = styled.View`
  height: 80%;
  justify-content: center;
  margin-left: 30px;
`;
const TitleCont = styled(View)`
  overflow: hidden;
`;
const TitleInnerCont = styled.View``;
const Title = styled(Animated.Text)`
  font-size: 90px;
  color: white;
  font-family: 'playfair';

`;
const SubTitleCont = styled(Animated.View)`
  display: flex;
  flex-direction: row;

  overflow: hidden;
  transform: translateX(400px);
`;
const SubTitle = styled.Text`
  font-size: 20px;
  margin-right: 10px;
  color: white;
  font-family: 'playfair';
`;
const IconCont = styled.TouchableOpacity`
  height: 55px;
  width: 55px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;
const Lower = styled(Animated.View)`
  height: 20%;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left:20px;
  margin-right: 20px;
`;
const IconOuterCont = styled.View`
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  height: 75%;
`;

const Icon = styled.Image`
  height: 40px;
  width: 40px;
`;
const BottomText = styled.Text`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'playfair';
`;

const SignIn = ({onGoogleButtonPress}) => {
  const offset = useRef(new Animated.Value(200)).current;
  const slide = useRef(new Animated.Value(400)).current;
  const slideup = useRef(new Animated.Value(95)).current;

  const stylelower = {
    transform: [{translateY: offset}],
  };
  const styleslide = {
    transform: [{translateX: slide}],
  };
  const styleslideup = {
    transform: [{translateY: slideup}],
  };

  useEffect(() => {
    Animated.stagger(100, [
      Animated.timing(slideup, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(offset, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slide, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // const googleSignIn = async () => {
  //   console.log('yse');

  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     //setUser(userInfo);
  //     console.log(userInfo);

  //     const {idToken} = userInfo;

  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     const res = auth().signInWithCredential(googleCredential);

  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  return (
    <Container>
      <Upper>
        <TitleCont>
          <Title style={styleslideup}>Job</Title>
        </TitleCont>
        <TitleCont>
          <Title style={styleslideup}>Flow.</Title>
        </TitleCont>
        <SubTitleCont style={styleslide}>
          <SubTitle>Honest</SubTitle>
          <SubTitle>Optamized</SubTitle>
          <SubTitle>Opportunities</SubTitle>
        </SubTitleCont>
      </Upper>

      <Lower style={stylelower}>
        <IconOuterCont>
          <IconCont>
            <Icon source={images.github} />
          </IconCont>
          <IconCont>
            <Icon source={images.fb} />
          </IconCont>
          <IconCont>
            <Icon source={images.apple} />
          </IconCont>
          <IconCont>
            <Icon source={images.twitter} />
          </IconCont>
          <IconCont onPress={onGoogleButtonPress}>
            <Icon source={images.google} />
          </IconCont>
        </IconOuterCont>

        <BottomText>Made with Love, India</BottomText>
      </Lower>
    </Container>
  );
};

export default SignIn;

const images = {
  github: require('../../assets/images/github.png'),
  fb: require('../../assets/images/fb.png'),
  apple: require('../../assets/images/apple.png'),
  twitter: require('../../assets/images/twitter.png'),
  google: require('../../assets/images/google.png'),
};
