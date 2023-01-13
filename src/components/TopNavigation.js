import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const NaviCont = styled.View`
  height: 50px;
  position: absolute;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;

const TopNavigation = () => {
  const {goBack} = useNavigation();
  return (
    <NaviCont>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('../assets/images/undo.png')}
          style={{tintColor: 'white', marginRight: 20}}
        />
      </TouchableOpacity>
    </NaviCont>
  );
};

export default TopNavigation;
