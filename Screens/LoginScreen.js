import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LoginScreen extends React.Component {
  signInWithGoogleAsync = async () =>{
    try{
      const result = await Google.loginAsync({
        behaviour = "web",
        androidClientId : "342298703496-8avahvgs55fuoe3p5cvp3tjqfvbpe1gs.apps.googleusercontent.com",
        iosClientId : "342298703496-ppb4bj7vp0fco13uvp1sb34452rac8li.apps.googleusercontent.com",
        scopes : ['profile','email'],
      });
    }
  }
  
  render() {
    return (
      <View
      style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
      }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}