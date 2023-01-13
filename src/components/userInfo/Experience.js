import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styled from 'styled-components';
const Container = styled.View``;
const Input = styled.TextInput`
  font-size: 15px;
  border-bottom-width: 2px;
  font-family: 'pop';
  padding: 7px;
  margin: 0px;
  width: ${props => props.width || 100}%;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${props => props.width || 100}%;
`;
const TypeName = styled.Text`
  color: white;
  font-family: 'pop';
  font-size: 13px;
  padding: 10px;
  text-align: center;
  background-color: black;
  margin-top: 15px;
  border-radius: 10px;
  letter-spacing: 0.5px;
`;
const TypeCont = styled.TouchableOpacity`
  width: ${props => props.width || 100}%;
`;
const Experience = () => {
  return (
    <Container>
      <Row>
        <Input width={30} placeholder="Job Role" />
        <Input width={30} placeholder="Start Year" />
        <Input width={30} placeholder="Tenure" />
      </Row>
      <Row>
        <Input width={60} placeholder="Comapny" />
        <Input width={30} placeholder="Stipend" />
      </Row>
      <Row>
        <Input width={40} placeholder="Verifer Name" />
        <Input width={50} placeholder="Verifer Number" />
      </Row>
      
      <Row>
        <TypeCont width={80}>
          <TypeName>Save</TypeName>
        </TypeCont>
        <TypeCont width={15}>
          <TypeName>X</TypeName>
        </TypeCont>
      </Row>
    </Container>
  );
};

export default Experience;
