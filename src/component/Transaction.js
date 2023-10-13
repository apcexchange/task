import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const TransactionsList = ({date, data, icon, iconStyle, narration}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.list}>
        {data?.map((item, index) => {
          return (
            <>
              <TouchableOpacity onPress={() => {}} key={item.id}>
                <View
                  style={[
                    styles.listItem,
                    {justifyContent: 'space-between', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginRight: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        backgroundColor: '#e1e1e1',
                        borderRadius: 50,
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginRight: 8,
                      }}>
                      <Image
                        source={icon}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.title}>{item?.title}</Text>
                      <Text style={styles.title2}>{item?.time}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[styles.amount, iconStyle]}>
                      {item?.type === 'credit' ? '+' : '-'}
                      {item?.amount} USD
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
};
export const TransactionsList3 = ({date, data, icon, iconStyle, narration}) => {
  // console.log(
  //   '🚀 ~ file: Transaction.js:65 ~ TransactionsList3 ~ data:////',
  //   data?.[0],
  // );
  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.list3}>
        {data?.map((item, index) => {
          return (
            <>
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => {}}
                key={`${date}-${index}`}>
                <View
                  style={[
                    styles.listItem,
                    {justifyContent: 'space-between', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginRight: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        backgroundColor: '#e1e1e1',
                        borderRadius: 50,
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginRight: 8,
                      }}>
                      <Image
                        source={icon}
                        style={styles.icon3}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.title}>{item?.data[0]?.title}</Text>
                      <Text style={styles.title2}>{item?.data[0]?.time}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={[styles.amount, iconStyle]}>
                      {item?.data[0]?.type === 'credit' ? '+' : '-'}N
                      {item?.data[0]?.amount}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  height: 1,
                  width: '100%',
                  backgroundColor: '#e1e1e1',
                  marginVertical: 10,
                }}
              />
            </>
          );
        })}
      </View>
    </View>
  );
};
export const TransactionsList2 = ({date, data, icon, iconStyle, narration}) => {
  return (
    <View style={styles.container2}>
      <Text style={styles.dateText}>{date}</Text>
      <View style={styles.list2}>
        {data?.map((item, index) => {
          return (
            <>
              <TouchableOpacity style={{}} onPress={() => {}} key={item.id}>
                <View
                  style={[
                    styles.listItem,
                    {justifyContent: 'space-between', alignItems: 'center'},
                  ]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginRight: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: 50,
                        width: 50,
                        backgroundColor: 'rgba(160, 217, 166, 0.5)',
                        borderRadius: 50,
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginRight: 8,
                        paddingVertical: 10,
                      }}>
                      <Image
                        source={icon}
                        style={styles.icon}
                        resizeMode="contain"
                      />
                    </View>
                    <View>
                      <Text style={styles.title}>{item?.title}</Text>
                      <Text style={styles.title2}>{item?.time}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#E2E2E2',
                      padding: 15,
                      borderRadius: 100,
                    }}>
                    <Text style={[styles.amount2, iconStyle]}>L2</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    width: '100%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container2: {
    //flex: 1,
    width: '100%',
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  list: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  list3: {
    width: '100%',
    // marginVertical: 10,
    // backgroundColor: 'red',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  list2: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    paddingVertical: 9,
    paddingHorizontal: 12,
    borderRadius: 6,

    borderWidth: 2,
    borderColor: 'rgba(160, 217, 166, 0.8)',
  },
  listItem: {
    // padding: 10,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 8,
    tintColor: 'white',
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  icon3: {
    marginTop: 8,
    // tintColor: 'white',
    width: 35,
    height: 35,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 10,
  },
  icon2: {
    // marginTop: 8,
    // tintColor: 'white',
    width: 35,
    height: 35,
    alignSelf: 'center',
  },
  dateText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: '100%',
    marginTop: 5,
    color: '#888',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  title2: {
    fontSize: 10,
    // fontWeight: 'bold',
    marginLeft: 5,
  },
  narration: {
    fontSize: 12,
  },
  amount: {},
  amount2: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
  },
});
