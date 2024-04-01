import React from 'react';
import Video from 'react-native-video';
import styled from 'styled-components/native';

interface Props {
  source: string;
  isPlaying: boolean;
}

export const VideoPlayer: React.FC<Props> = ({source, isPlaying}) => {
  return (
    <Container>
      <StyledVideo
        source={source}
        paused={!isPlaying}
        repeat={true}
        controls={false}
        resizeMode="contain"
        useTextureView={false}
      />
    </Container>
  );
};

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const StyledVideo = styled(Video)`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;
