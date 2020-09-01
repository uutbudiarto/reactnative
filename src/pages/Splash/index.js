import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';

const Splash = () => {
  return (
    <View style={styles.container}>
      <ILLogo />
      <Text style={styles.title}>MY REPORT</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
container : {
  backgroundColor:"#000",
  flex : 1,alignItems: 'center',
  justifyContent: 'center'
},
title : {
  fontSize:20,
  fontWeight :"600",
  color: '#C2A45D',marginTop: 20
}
})
