import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import SignIn from '../screens/auth/signIn';
import AppContainer from './AppContainer';

export default function AuthContainer() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '13981871691-ptc1fc8931d1m2dh0nb2g9irprq6dvsl.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Get the users ID token
      //  const {idToken} = await GoogleSignin.signIn();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      const {idToken} = userInfo;
      console.log(idToken);
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (err) {
      console.log(err);
    }
  }

  auth().onAuthStateChanged(user => {
    if (user) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  });

  if (authenticated) {
    return <AppContainer />;
  }

  return <SignIn onGoogleButtonPress={onGoogleButtonPress} />;
}
