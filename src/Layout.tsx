import {View, Text, ScrollView} from 'react-native';
import React, {ReactNode} from 'react';
import {Box} from '@gluestack-ui/themed';

const Layout = ({children}: {children: ReactNode}) => {
  return (
    <Box flex={1} bg="$black" h="100%">
      <ScrollView>{children}</ScrollView>
    </Box>
  );
};

export default Layout;
