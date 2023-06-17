import React from 'react';
import { BlankView } from '../../components/BlankView';
import { Button, Text, View } from 'react-native';
import { styles } from './NewHomeScreen.style';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function NewHomeScreen() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <BlankView>
      <View style={styles.container}>
        <Text>You're at New Home</Text>
        <Button
          title="Go back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </BlankView>
  );
}
