import styled from 'styled-components';
import {Text, View} from 'react-native';

const DotCont = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;
const Dot = styled.View`
  height: 10px;
  width: 10px;
  background-color:${props=> props.select ? '#000':'#fff'};
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
`;

const Dots = ({item = 4, selected = 1}) => {
  return (
    <DotCont>
      {[...Array(item)].map((_, index) => (
        <Dot select={selected >= index+1} key={index}/>
      ))}
    </DotCont>
  );
};

export default Dots;
