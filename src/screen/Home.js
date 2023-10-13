import React, {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TopTabs from '../component/TopTabs';
import {TransactionsList, TransactionsList2} from '../component/Transaction';

const title = ['Accounts', 'Cards', 'Loans', 'Savings'];

const transactions = [
  {
    date: '',
    data: [
      {
        narration: 'Transfer from prospa',
        title: ' Transfer from prospa',
        amount: '1.33',
        type: 'debit',
        time: 'Today 8:40am',
      },
    ],
  },
];
const points = [
  {
    date: '',
    data: [
      {
        narration: 'Transfer from prospa',
        title: ' 625,856',
        amount: '1.33',
        type: 'debit',
        time: 'Points Balance',
      },
    ],
  },
];

const Home = () => {
  const [activeRankingList, setActiveRankingList] = useState('Accounts');

  const moneyFormat = (amount, nairaStyle, koboStyle) => {
    const formattedAmount = parseFloat(amount).toFixed(2);
    const parts = formattedAmount.split('.');
    const naira = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Add commas as thousands separators
    const kobo = parts[1];

    return (
      <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
        <Text style={nairaStyle}>₦{naira}</Text>
        <Text style={koboStyle}>.{kobo}</Text>
      </View>
    );
  };
  const nairaStyle = {fontSize: 22, color: '#000', fontWeight: '700'};
  const koboStyle = {fontSize: 12, color: '#222'};
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#e1e1e1'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: 5,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          paddingBottom: 15,
        }}>
        <View style={{flex: 1, padding: 10, marginTop: 0}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#777',
                  height: 50,
                  width: 50,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="person-outline" size={30} color="#fff" />
              </View>
              <Text style={{color: '#000', marginLeft: 10, marginRight: 5}}>
                DailyBread Ltd
              </Text>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={25}
                color="#222"
              />
            </View>
            <View
              style={{
                backgroundColor: 'rgba(245, 20, 20, 0.1)',
                height: 30,
                width: 100,
                borderRadius: 30,
                flexDirection: 'row',
                //   justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{color: 'red', marginLeft: 10}}>Support</Text>
              </View>
              <View>
                <Image
                  source={require('../assets/images/information.png')}
                  resizeMode="contain"
                  style={{height: 20, width: 20, marginLeft: 10}}
                />
              </View>
            </View>
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
                marginTop: 30,
              }}>
              {title.map(title => {
                return (
                  <TopTabs
                    style={
                      {
                        // Adjust the elevation value for the shadow effect
                      }
                    }
                    label={title}
                    active={title === activeRankingList}
                    onPress={() => {
                      if (activeRankingList !== title) {
                        setActiveRankingList(title);
                      }
                    }}
                  />
                );
              })}
            </View>
          </ScrollView>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <Text>{moneyFormat(22250000.98, nairaStyle, koboStyle)}</Text>
              <Text>Available balance</Text>
            </View>
            <View style={{backgroundColor: '#eee', borderRadius: 25}}>
              <Text style={{color: 'red', padding: 5}}>View accounts</Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              flex: 1,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(245, 20, 20, 0.1)',
                width: '48%',
                borderRadius: 10,
                padding: 10,
              }}>
              <Text style={{textAlign: 'center', color: 'red'}}>
                Transfer funds
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#eee',
                borderRadius: 10,
                width: '48%',
                padding: 10,
              }}>
              <Text style={{textAlign: 'center'}}>Share account</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <View>
              <Text style={{textAlign: 'center', color: '#000'}}>
                Transactions
              </Text>
            </View>
            <View>
              <Text style={{textAlign: 'center', color: 'red'}}>View all</Text>
            </View>
          </View>
          <View style={{marginTop: -20}}>
            {transactions.map((t, i) => {
              return (
                <>
                  <TransactionsList
                    key={i}
                    date={t?.date}
                    data={t.data}
                    icon={require('../assets/icons/payment.png')}
                  />
                </>
              );
            })}
          </View>
        </View>
      </View>

      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View>
            <Text style={{textAlign: 'center', color: '#000'}}>
              Your points
            </Text>
          </View>
          <View>
            <Text style={{textAlign: 'center', color: 'red'}}>View more</Text>
          </View>
        </View>
        <View style={{marginTop: -20}}>
          {points.map((t, i) => {
            return (
              <>
                <TransactionsList2
                  key={i}
                  date={t?.date}
                  data={t.data}
                  icon={require('../assets/images/trophy.png')}
                />
              </>
            );
          })}
        </View>
      </View>

      <View style={{padding: 10}}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#000',
            marginLeft: 10,
          }}>
          Essentials
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Image source={require('../assets/images/Essentials.png')} />
          <Image source={require('../assets/images/Spent.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
