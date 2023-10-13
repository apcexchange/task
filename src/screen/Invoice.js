import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BalanceCard} from '../component/BalanceCard';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import Feather from 'react-native-vector-icons/Feather';
import * as Progress from 'react-native-progress';
import {SearchBar} from '../component/SearchBar';
import {TransactionsList, TransactionsList3} from '../component/Transaction';

const colors = [
  {data: 'tomato', balance: 'N5,000,000.00', ledger: 'N4,948,00.00'},
  {data: 'thistle', balance: 'N2,948,00.00', ledger: 'N1,948,00.00'},
];

const transactions = [
  {
    date: '11 december 2021',
    icon: require('../assets/images/menu.png'),
    data: [
      {
        narration: 'Transfer from prospa',
        title: ' Transfer from prospa',
        amount: '200,000',
        type: 'debit',
        time: '8:40am',
      },
    ],
  },
  {
    date: '11 december 2021',
    icon: require('../assets/images/menu.png'),
    data: [
      {
        narration: 'Transfer from prospa',
        title: ' Transfer from Sandalily',
        amount: '1,000,000',
        type: 'debit',
        time: '8:40am',
      },
    ],
  },
  {
    date: '10 december 2021',
    icon: require('../assets/images/phoneIn.png'),

    data: [
      {
        narration: 'Mobile recharge|+23481...',
        title: ' Mobile recharge| +23481..',
        amount: '5,000',
        type: 'credit',
        time: '8:40am',
      },
    ],
  },
  {
    date: '10 december 2021',
    icon: require('../assets/images/phoneIn.png'),

    data: [
      {
        narration: 'Transfer from prospa',
        title: ' Transfer from jerry',
        amount: '3,300',
        type: 'credit',
        time: '8:40am',
      },
    ],
  },
  {
    date: '10 december 2021',
    icon: require('../assets/images/phoneIn.png'),

    data: [
      {
        narration: 'Transfer from prospa',
        title: ' Transfer from wuse',
        amount: '1,000',
        type: 'debit',
        time: '8:40am',
      },
    ],
  },
];

const groupTransactionsByDate = transactions => {
  const groupedTransactions = {};

  transactions.forEach(transaction => {
    const date = transaction.date;
    if (!groupedTransactions[date]) {
      groupedTransactions[date] = [];
    }
    groupedTransactions[date].push(transaction);
  });

  return groupedTransactions;
};

const groupedTransactions = groupTransactionsByDate(transactions);
console.log(
  '🚀 ~ file: Invoice.js:86 ~ groupedTransactions:',
  groupedTransactions,
);

const Invoice = () => {
  const [show, setShow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResults] = useState(groupedTransactions);

  const handleSearch = query => {
    setSearchQuery(query);
    const filteredItems = Object.keys(groupedTransactions)?.filter(item => {
      console.log('🚀 ~ file: Invoice.js:124 ~ filteredItems ~ item:', item);
      //   item.name.toLowerCase().includes(query.toLowerCase());
    });
    // setSearchResults(filteredItems);
  };

  return (
    <ScrollView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <MaterialIcons name="keyboard-arrow-left" size={25} color="#222" />
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Current Account
          </Text>
          <Text style={{color: 'red'}}>Options</Text>
        </View>
        <Text style={{textAlign: 'center'}}>7274640071</Text>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10}}
          onPress={() => setShow(!show)}>
          <Ionicons
            name={show ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color="red"
          />
        </TouchableOpacity>

        {/* <BalanceCard data={data} /> */}

        <View style={{flex: 1}}>
          <SwiperFlatList
            paginationActiveColor="rgba(
            201, 22, 85, 0.6)"
            autoplayDelay={2}
            autoplayLoop
            // index={2}
            showPagination
            data={colors}
            paginationStyleItem={{marginTop: 10}}
            renderItem={({item}) => (
              <View style={[styles.child, {height: 150}]}>
                <Text style={styles.text}>
                  {show ? item.balance : 'XX,XXX,XXX.XX'}
                </Text>
                <Text
                  style={{fontSize: 12, textAlign: 'center', marginBottom: 10}}>
                  Ledger balance
                </Text>
                <Text style={styles.text2}>
                  {show ? item.ledger : 'XX,XXX,XXX.XX'}
                </Text>
                <Text style={{fontSize: 14, textAlign: 'center'}}>
                  Available balnace
                </Text>
              </View>
            )}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 30,
            width: '70%',
            alignSelf: 'center',
          }}>
          <View>
            <View
              style={{
                height: 50,
                height: 50,
                backgroundColor: '#e1e1e1',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <Image
                source={require('../assets/icons/payment.png')}
                style={{marginTop: 10}}
              />
            </View>
            <Text style={{marginTop: 10, fontSize: 13}}>Transfer</Text>
          </View>

          <View>
            <View
              style={{
                height: 50,
                height: 50,
                backgroundColor: '#e1e1e1',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <Feather name="book-open" size={25} style={{padding: 10}} />
            </View>
            <Text style={{marginTop: 10, fontSize: 12}}>Bookkeeper</Text>
          </View>

          <View>
            <View
              style={{
                height: 50,
                height: 50,
                backgroundColor: '#e1e1e1',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                borderRadius: 25,
              }}>
              <Feather name="star" size={25} style={{padding: 10}} />
            </View>
            <Text style={{marginTop: 10, fontSize: 13}}>Upgrade</Text>
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <View style={{alignSelf: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text>Money in</Text>
              <Text style={{fontWeight: '700'}}>N20,000</Text>
            </View>
            <Progress.Bar
              progress={0.3}
              width={Dimensions.get('window').width - 30}
              color="#6b60db"
            />
          </View>
          <View style={{alignSelf: 'center', marginVertical: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text>Money out</Text>
              <Text style={{fontWeight: '700'}}>N20,000</Text>
            </View>
            <Progress.Bar
              progress={0.7}
              width={Dimensions.get('window').width - 30}
              color="#db609e"
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 5,
              }}>
              <Text>Wallet balance</Text>
              <Text style={{fontWeight: '700'}}>N20,000</Text>
            </View>
            <Progress.Bar
              progress={0.5}
              width={Dimensions.get('window').width - 30}
              color="#6e6569"
            />
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <SearchBar
            placeholder="Search transaction"
            onChangeText={querry => {
              handleSearch(querry);
              setSearchQuery(querry);
            }}
            onSubmit={query => handleSearch(query)}
          />

          {Object.keys(searchResult)?.map(date => {
            return (
              <TransactionsList3
                data={groupedTransactions[date]}
                date={date}
                icon={groupedTransactions[date][0].icon} // Assuming the icon is the same for all transactions on the same date
                key={date}
              />
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center', marginTop: -20},
  text: {fontSize: 20, textAlign: 'center', fontWeight: '900', color: '#000'},
  text2: {fontSize: 16, textAlign: 'center', fontWeight: '900', color: 'green'},
});

export default Invoice;
