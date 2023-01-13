import {View, Text, TextInput} from 'react-native';
import React, {useEffect} from 'react';
import styled from 'styled-components';

const InputCont = styled.View`
  width: ${props => props.width || 100}%;
  /* background-color: #999; */
`;
const Input = styled.TextInput`
  font-size: 15px;
  border-bottom-width: 2px;
  border-bottom-color: black;
  font-family: 'pop';
  padding: 10px;
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 0px;
`;
const ErrorTitle = styled.Text`
  font-size: 10px;
  color: red;
  margin-bottom: 0px;
  right: 0;
  //background-color: cyan;
  text-align: right;
`;

const validation = (text, type) => {
  if (!text) return {error: true, errorText: 'Required'};
  var regName = /^[a-zA-z]+([\s][a-zA-Z]+)*$/; //for sentance only space and alpha
  var regnumber = /^\d+$/;
  if (type.includes('Required')) {
    return {error: false};
  }
  if (type.includes('AlphaSpace')) {
    console.log('alphaspace yes');
    if (!regName.test(text)) {
      return {error: true, errorText: 'only characters'};
    } else {
      return {error: false, errorText: ''};
    }
  }
  if (type.includes('Number')) {
    if (!regnumber.test(text)) {
      return {error: true, errorText: 'only number allowed'};
    } else {
      return {error: false, errorText: ''};
    }
  }

  return {error: true, errorText: 'Unvalid'};
};

const InputComp = ({
  width,
  placeholder,
  value,
  setValue,
  check,
  type = ['Required'],
  keyboard="default"
}) => {
  const validate = text => {
    const data = validation(text, type);
    setValue({text, ...data});
  };

  return (
    <InputCont width={width}>
      <Input
        style={{
          borderBottomColor: check ? (value.error ? 'red' : 'black') : 'black',
        }}
        keyboardType={keyboard}
        placeholder={placeholder}
        cursorColor={'black'}
        value={value?.text || ''}
        onChangeText={text => {
          validate(text);
        }}
      />

      {<ErrorTitle>{check ? value?.errorText : ''}</ErrorTitle>}
    </InputCont>
  );
};

export default InputComp;
