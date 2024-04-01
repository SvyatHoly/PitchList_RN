import React, {useEffect, useState} from 'react';
import {VideoPlayer} from '../shared/VideoPlayer';
import {PlayButton} from '../shared/PlayButton';
import styled from 'styled-components/native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {CardDescription} from './CardDescription';

interface Props {
  source: string;
  reset: boolean;
}

export const Card: React.FC<Props> = ({source, reset}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const offset = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    offset.value = 0;
    opacity.value = 1;
    setIsPlaying(false);
  }, [reset]);

  const animatedStyles1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: offset.value}],
    };
  });

  const animatedStyles2 = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const buttonCallback = () => {
    const newState = !isPlaying;

    opacity.value = withTiming(newState ? 0 : 1, {duration: 1000});
    offset.value = withTiming(newState ? 250 : 0, {duration: 500});
    setIsPlaying(newState);
  };

  return (
    <Container>
      <VideoPlayer source={source} isPlaying={isPlaying} />
      <Animated.View
        style={[{position: 'absolute', top: 450}, animatedStyles2]}>
        <CardDescription />
      </Animated.View>

      <Animated.View style={[{position: 'absolute'}, animatedStyles1]}>
        <PlayButton onPress={buttonCallback} isPlaying={isPlaying} />
      </Animated.View>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
