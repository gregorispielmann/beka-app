import React from 'react';
import { BlankView } from '../../components/BlankView';
import { Button } from 'react-native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export function StartScreen() {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <BlankView>
      <Button
        title="Go to New Home"
        onPress={() => navigation.navigate('NewHome')}
      />
    </BlankView>
  );
}
