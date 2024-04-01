import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import PlayIcon from '../../assets/icons/Play.png';
import PauseIcon from '../../assets/icons/Pause.png';
import styled from 'styled-components/native';

interface Props {
  onPress: () => void;
  isPlaying: boolean;
}

export const PlayButton: React.FC<Props> = ({isPlaying, onPress}) => {
  return (
    <StyledOpacity onPress={onPress}>
      <StyledIcon source={isPlaying ? PauseIcon : PlayIcon} />
    </StyledOpacity>
  );
};

const StyledOpacity = styled(TouchableOpacity)`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: 'rgba(0, 0, 0, 0.2)';
  justify-content: center;
  align-items: center;
`;

const StyledIcon = styled(Image)`
  width: 25px;
  height: 25px;
`;
