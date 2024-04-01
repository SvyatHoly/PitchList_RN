import React, {useState} from 'react';

import {Card} from './app/Card/Card';
import {SafeAreaView} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import CardsSwipe from './app/CardSwipe/CardSwipe';

const cardsData = [
  {src: require('./assets/video1.mp4')},
  {src: require('./assets/video2.mp4')},
  {src: require('./assets/video3.mp4')},
  {src: require('./assets/video4.mp4')},
];

function App(): React.JSX.Element {
  const [reset, setReset] = useState(false);
  const resetFunc = () => {
    setReset(val => !val);
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView>
        <Container>
          <CardsSwipe
            cards={cardsData}
            renderCard={card => (
              <CardContainer>
                <Card source={card.src} reset={reset} />
              </CardContainer>
            )}
            onSwipeEnd={resetFunc}
          />
        </Container>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.View`
  width: 100%;
  height: 100%;
`;

export default App;
