import React from 'react';
import styled from 'styled-components/native';
import {InfoLabel} from '../shared/InfoLabel';
import {Text} from 'react-native';

export const CardDescription = () => {
  return (
    <VStack>
      <HStack>
        <InfoLabel title={'Ready to invest'} description={'$300 k'} />
        <InfoLabel title={'Exits'} description={'17'} />
        <InfoLabel title={'This year'} description={'6 deals'} />
        <InfoLabel title={'This year invest.'} description={'$7 k'} />
      </HStack>
      <SomeText>
        Fund Future’s venture capital and emerging companies team brings a high
        level of experience to...
      </SomeText>
    </VStack>
  );
};

const HStack = styled.View`
  flex-direction: row;
  gap: 15px;
`;

const VStack = styled.View`
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
`;

const SomeText = styled(Text)`
  color: white;
  font-size: 16px;
`;
