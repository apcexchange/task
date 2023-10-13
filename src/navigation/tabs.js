import React, {useState} from 'react';
import {View} from 'react-native-animatable';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Payment from '../screen/Payment';
import Business from '../screen/Business';
import Invoice from '../screen/Invoice';
import Virtual from '../screen/Virtual';
import {Image, Text, TouchableOpacity} from 'react-native';
import homeIcon from '../assets/icons/home.png';
import payment from '../assets/icons/payment.png';
import business from '../assets/icons/business.png';
import virtual from '../assets/icons/virtual.png';
import invoice from '../assets/icons/invoice.png';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  const [focuse, setFocuse] = useState(false);

  const CustomButton = ({children, onPress}) => {
    const pressed = () => {
      setFocuse(true);
    };
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          top: -20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 65,
            height: 65,
            borderRadius: 35,
            backgroundColor: '#C6145E',
          }}>
          {children}
        </View>

        <Text style={{color: '#e1e1e1e1'}}>Business</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarItemStyle: {
            borderTopColor: '#C6145E',
            borderTopWidth: 2,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={homeIcon}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#C6145E' : '#e1e1e1e1',
                }}
                // tintColor
              />
              <Text style={{color: focused && '#C6145E'}}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarItemStyle: focuse && {
            borderTopColor: '#C6145E',
            borderTopWidth: 2,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={() => setFocuse(!focuse)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={payment}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && '#C6145E',
                }}
                // tintColor
              />
              <Text style={{color: focused ? '#C6145E' : '#e1e1e1e1'}}>
                Payments
              </Text>
            </View>
            // </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Business"
        component={Business}
        options={{
          tabBarItemStyle: focuse && {
            borderTopColor: '#C6145E',
            borderTopWidth: 2,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={business}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: '#fff',
                }}
                // tintColor
              />
            </View>
          ),

          tabBarButton: props => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Invoice"
        component={Invoice}
        options={{
          tabBarItemStyle: focuse && {
            borderTopColor: '#C6145E',
            borderTopWidth: 2,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={() => setFocuse(!focuse)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={invoice}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && '#C6145E',
                }}
                // tintColor
              />
              <Text style={{color: focused ? '#C6145E' : '#e1e1e1e1'}}>
                Invoice
              </Text>
            </View>
            // </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Virtual"
        component={Virtual}
        options={{
          tabBarItemStyle: focuse && {
            borderTopColor: '#C6145E',
            borderTopWidth: 2,
            elevation: 0,
          },
          tabBarIcon: ({focused}) => (
            // <TouchableOpacity onPress={() => setFocuse(!focuse)}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={virtual}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused && '#C6145E',
                }}
                // tintColor
              />
              <Text style={{color: focused ? '#C6145E' : '#e1e1e1e1'}}>
                Virtual
              </Text>
            </View>
            // </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
