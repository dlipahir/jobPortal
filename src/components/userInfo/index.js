import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achieve';


const TypeName = styled.Text`
  color: white;
  font-family: 'playfairBold';
  font-size: 19px;
  padding: 15px;
  text-align: center;
  background-color: black;
  margin-top: 15px;
  border-radius: 10px;
  letter-spacing: 0.5px;
`;
const TypeCont = styled.TouchableOpacity``;

const UserInfo = () => {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}>
      <TypeCont>
        <TypeName>Add Education</TypeName>
      </TypeCont>
      <Education/>
      <TypeCont>
        <TypeName>Add Experience</TypeName>
      </TypeCont>
      <Experience/>
      <TypeCont>
        <TypeName>Add Achievements</TypeName>
      </TypeCont>
      <Achievements/>
    </ScrollView>
  );
};

export default UserInfo;
