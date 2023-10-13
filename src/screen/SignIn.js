import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Defs, Path, Stop} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import bg from '../assets/images/background.png';
import logo from '../assets/images/logo.png';
import phone from '../assets/images/phone.png';
import gogle from '../assets/images/gogle.png';
import List from '../component/List';

const SignIn = ({navigation}) => {
  const gradientColor = ['#A54189', '#EE3A3E', '#F79431'];

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.9}}>
        <ImageBackground
          source={bg}
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height / 2.49,
          }}
          resizeMode="contain">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Image
              source={logo}
              style={{height: 80, width: 80, marginLeft: 20}}
              resizeMode="contain"
            />

            <Text
              style={{
                color: '#fff',
                marginRight: 20,
                fontWeight: '600',
                // letterSpacing: 1.1,
                fontSize: 16,
              }}>
              Sign in
            </Text>
          </View>

          <View style={{alignItems: 'center', marginTop: -5}}>
            <Image source={phone} style={{marginRight: 55}} />
          </View>
        </ImageBackground>
      </View>

      <View style={{flex: 0.4, marginTop: -20}}>
        <List title={'Business bank account'} animation="bounce" />
        <List title={'Up to N1M in loans'} animation="bounceInDown" />
        <List title={'Send invoices'} animation="bounceInUp" />
        <List
          title={'POS for offline sale and more'}
          animation="bounceInLeft"
        />
      </View>
      <View style={{flex: 0.28, marginTop: -20}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            backgroundColor: '#000',
            width: '85%',
            justifyContent: 'center',
            alignSelf: 'center',
            height: 60,
            borderRadius: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={gogle}
            style={{marginRight: 20, height: 25, width: 25}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff', fontSize: 17}}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Tabs')}
          style={{
            width: '85%',
            justifyContent: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 18}}>
            Continue with email
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
