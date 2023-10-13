import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Platform,
  ActivityIndicator,
  Text,
  StyleSheet,
} from 'react-native';
// import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import Ionicons from 'react-native-vector-icons/Ionicons';

export const BalanceCard = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showFigures, setShowFigures] = useState(false);
  const [showFiguresIcon, setShowFiguresIcon] = useState('eye-outline');
  const [isLoading, setIsLoading] = useState(true);

  const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

  const hideFigures = str => {
    let temp = str.replace(/\d/g, 'x');
    return temp;
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };
  const toggleFigures = () => {
    setShowFigures(!showFigures);
    setShowFiguresIcon(showFigures ? 'eye-outline' : 'eye-off-outline');
  };

  const addBusiness = () => {};

  const {width} = Dimensions.get('window');

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={data?.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={1}
        inactiveDotScale={0.9}
      />
    );
  };
  const renderContent = ({item, index}) => {
    let availableBalance = item?.balance || 0,
      overdraftAmount = item?.allowOverdraft
        ? `${item?.overdraftLimit}`
        : 'Not allowed',
      availableBalanceHidden = hideFigures(availableBalance),
      overdraftAmountHidden = item?.allowOverdraft
        ? hideFigures(overdraftAmount)
        : 'xxxxxxxx';

    return (
      <>
        {isLoading && (
          <ActivityIndicator
            size="large"
            color="gray"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        )}
        <ImageBackground
          source={''}
          style={{
            width: width - 2,
            paddingHorizontal: 20,
            paddingBottom: 18,
            paddingRight: 15,
            alignContent: 'center',
            marginLeft: -12,
            marginTop: -10,
          }}
          resizeMode="contain"
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}>
          <View style={styles.container} key={index}>
            <View style={styles.overviewRowIcon}>
              <View>
                <Text style={styles.descriptionText}>Available balance</Text>
                <Text style={styles.availableBalanceText}>
                  &#8358;
                  {showFigures ? availableBalance : availableBalanceHidden}
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={toggleFigures}>
                  <Ionicons
                    name={showFiguresIcon}
                    size={20}
                    style={styles.showFiguresIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={[
                styles.overviewRow,
                {
                  justifyContent: item?.allowOverdraft
                    ? 'space-between'
                    : 'flex-end',
                  alignItems: 'center',
                },
              ]}>
              {item?.allowOverdraft && (
                <View style={{marginTop: 10}}>
                  <Text style={[styles.descriptionText, {marginTop: -8}]}>
                    Overdraft amount
                  </Text>
                  {item?.allowOverdraft && showFigures && (
                    <Text style={styles.overdraftAmountText}>
                      &#8358;{overdraftAmount}
                    </Text>
                  )}
                  {item?.allowOverdraft && !showFigures && (
                    <Text style={styles.overdraftAmountText}>
                      &#8358;{overdraftAmountHidden}
                    </Text>
                  )}
                  {!item?.allowOverdraft && showFigures && (
                    <Text style={styles.overdraftAmountText}>
                      {overdraftAmount}
                    </Text>
                  )}
                  {!item?.allowOverdraft && !showFigures && (
                    <Text style={styles.overdraftAmountText}>
                      {overdraftAmountHidden}
                    </Text>
                  )}
                </View>
              )}
              <View
                style={{
                  marginTop: 10,
                  marginBottom: 8,
                  marginRight: 10,
                }}>
                <TouchableOpacity onPress={addBusiness}>
                  <Text style={styles.addBusinessText}>
                    <Ionicons
                      name="add"
                      size={15}
                      style={styles.addBusinessIcon}
                    />
                    Add business
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </>
    );
  };

  const carouselRef = useRef(null);

  return (
    <View style={{}}>
      <Carousel
        data={data}
        ref={carouselRef}
        autoplay={false}
        onSnapToItem={index => setActiveIndex(index)}
        renderItem={renderContent}
        sliderWidth={metrics.screenWidth}
        itemWidth={metrics.screenWidth}
        inactiveSlideOpacity={1}
      />
      <View style={{marginTop: -25}}>{renderPagination()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'ios' ? 20 : 10,
    // backgroundColor: colors.primaryColor,
    flex: 1,
    // width: '92%',
    borderRadius: 10,
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    // marginVertical: 10,
    // backgroundColor: 'blue',
    // marginRight: 10,
    // justifyContent: 'center',
    // alignSelf: 'center',Admin@123
  },
  descriptionText: {
    color: colors.white,
    // textAlign: 'justify',
    // fontSize: 14,
    marginLeft: 10,
    marginBottom: 2,

    // fontFamily: 'Gotham-Bold',
    // ...FONTS.body3,
  },
  availableBalanceText: {
    color: colors.white,
    // textAlign: 'center',
    marginLeft: 10,
    marginBottom: 8,
    ...FONTS.body3,
    fontSize: 21,
    fontWeight: '900',
  },
  overdraftAmountText: {
    color: colors.white,
    // textAlign: 'center',
    marginLeft: 10,

    ...FONTS.body3,
    fontSize: 20,
    fontWeight: '900',
  },
  paginationContainer: {
    // backgroundColor: 'blue',
    marginTop: -25,
    marginBottom: -20,
    zIndex: 0,
  },
  paginationDot: {
    backgroundColor: colors.black,
    width: 15,
    height: 6,
  },
  paginationInactiveDot: {
    backgroundColor: '#C4C4C4',
    width: 6,
    height: 6,
  },
  overviewRowIcon: {
    margin: 10,
    marginTop: 10,
    marginBottom: 1,
    flexDirection: 'row',
    // width: '90%',
    justifyContent: 'space-between',
  },
  overviewRow: {
    margin: 10,
    marginBottom: 1,
    flexDirection: 'row',
    // width: '90%',
  },
  showFiguresIcon: {
    marginTop: 5,
    color: colors.white,
    marginRight: 10,
  },
  addBusinessIcon: {
    marginTop: 5,
    color: colors.white,
  },
  addBusinessText: {
    marginTop: 20,
    color: colors.white,
    fontWeight: '700',
    marginLeft: 5,
    ...FONTS.body3,
    fontSize: 15,
  },
});
