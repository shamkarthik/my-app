/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { config } from '@gluestack-ui/themed';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {
  Button,
  GluestackUIProvider,
  Box,
  Text,
  Image,
} from '@gluestack-ui/themed';
import Layout from './src/Layout';
import Home from './src/Home';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <GluestackUIProvider config={config.theme}>
        <Box
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
          height="100%">
            <Home/>
        </Box>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

export default App;
