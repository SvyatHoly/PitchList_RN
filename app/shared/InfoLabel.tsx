import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

interface Props {
  title: string;
  description: string;
}

export const InfoLabel: React.FC<Props> = ({title, description}) => {
  return (
    <VStack>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </VStack>
  );
};

const VStack = styled.View`
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Title = styled(Text)`
  font-size: 12px;
  color: gray;
`;

const Description = styled(Text)`
  font-size: 16px;
  color: white;
`;
