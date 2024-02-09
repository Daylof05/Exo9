import React from 'react';
import { View, Button } from 'react-native';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://ff2712b17982995e3cb60f6b6f68b2b8@o4506716881158144.ingest.sentry.io/4506716941189120',
});

const App = () => {
  const sendLog = () => {
    Sentry.captureMessage('Test Message from React Native', 'info');
  };
  const triggerError = () => {
    try {
      throw new Error('This is a test error from React Native');
    } catch (error) {
      Sentry.captureException(error);
    }
  };
  return (
    <View>
      <Button title="Send Log to Sentry" onPress={sendLog} />
      <Button title="Simulate error" onPress={triggerError} />
    </View>
  );
};
export default App; 
