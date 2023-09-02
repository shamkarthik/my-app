import { View, Text } from 'react-native'
import React from 'react'
import { Input } from '@gluestack-ui/themed'

const Home = () => {
  return (
      <Input
  variant="outline"
  size="md"
  isDisabled={false}
  isInvalid={false}
  isReadOnly={false}
>
  <InputField placeholder="Enter Text here" />
</Input>
  )
}

export default Home