import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../../utils/font';
const OnboardingData = [
  {
    id: '1',
    image: require('../../assets/images/onboard.png'),
    title: 'Mobile Point of Sale',
    description:
      'Sell from a smartphone or tablet, issue printed or electronic receipts, accept multiple payment methods and more.',
  },
  {
    id: '2',
    image: require('../../assets/images/onboard.png'),
    title: 'Back Office',
    description:
      'Track your sales and inventory, manage employees and customers in a browser on any device.',
  },
  {
    id: '3',
    image: require('../../assets/images/onboard.png'),
    title: 'Complementary Apps',
    description:
      'Install SaraS Dashboard, Kitchen Display and Customer Display apps for more efficient business management.',
  },
];
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  black: '#222',
  gray: '#777',
  lightGray: '#D9D9D9',
};

const OnboardingScreen = ({navigation}) => {
  const flatListRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewRef = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const nextSlide = () => {
    if (currentIndex < OnboardingData.length - 1) {
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      navigation.replace('Main');
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({
        index: currentIndex - 1,
      });
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.page}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        // ref={flatListRef}
        // horizontal
        // pagingEnabled
        // showsHorizontalScrollIndicator={false}
        // data={OnboardingData}
        // renderItem={renderItem}
        // keyExtractor={item => item.id}
        // onViewableItemsChanged={onViewRef.current}
        // viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
  data={OnboardingData}
  horizontal
  pagingEnabled
  showsHorizontalScrollIndicator={false}
  keyExtractor={item => item.id}
  renderItem={renderItem}
  onViewableItemsChanged={onViewRef.current}
  viewabilityConfig={viewConfigRef.current}
  bounces={false}
  overScrollMode="never"
  decelerationRate="fast"
      />

      <View style={styles.bottom}>
        <TouchableOpacity
          disabled={currentIndex === 0}
          onPress={prevSlide}>
          <Text
            style={[
              styles.buttonText,
              currentIndex === 0 && {opacity: 0},
            ]}>
            BACK
          </Text>
        </TouchableOpacity>

        <View style={styles.dots}>
          {OnboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <View style={styles.rightButton}>
  <TouchableOpacity onPress={nextSlide}>
    <Text style={styles.buttonText}>
      {currentIndex === 2 ? 'DONE' : 'NEXT'}
    </Text>
  </TouchableOpacity>
</View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  rightButton: {
    marginTop: -hp('1%'),
  },

  page: {
    width: wp('100%'),
    alignItems: 'center',
    paddingHorizontal: wp('8%'),
    paddingTop: hp('8%'),
    paddingBottom: hp('12%'),
  },

  image: {
    width: wp('90%'),
    height: hp('32%'),
    marginTop: hp('3%'),
    marginBottom: hp('5%'),
  },

  title: {
    fontSize: wp('7.8%'),
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: hp('2%'),
    fontFamily: FONT.Bold,
  },

  description: {
    width: wp('86%'),
    fontSize: wp('5%'),
    color: COLORS.gray,
    textAlign: 'center',
    lineHeight: hp('4%'),
    fontFamily: FONT.Regular,
  },

  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: hp('5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('6%'),
  },

  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -hp('1%'),
  },

  dot: {
    width: wp('2.2%'),
    height: wp('2.2%'),
    borderRadius: wp('1.1%'),
    backgroundColor: '#D9D9D9',
    marginHorizontal: wp('1%'),
  },

  activeDot: {
    width: wp('3.3%'),
    height: wp('3.3%'),
    borderRadius: wp('1.65%'),
    backgroundColor: COLORS.primary,
  },

  buttonText: {
    color: COLORS.primary,
    fontSize: wp('5%'),
    marginTop: -hp('1%'),
    fontFamily: FONT.SemiBold,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.white,
//   },
// rightButton: {
//   marginTop: -hp('1%'), // Move slightly upward
// },
//   page: {
//     width: wp('100%'),
//     alignItems: 'center',
//     paddingHorizontal: wp('8%'),
//     paddingTop: hp('8%'),
//     paddingBottom: hp('12%'),
//   },

//   image: {
//     width: wp('90%'),
//     height: hp('32%'),
//     marginTop: hp('3%'),
//     marginBottom: hp('5%'),
//   },

//   title: {
//     fontSize: wp('7.8%'),
//     fontWeight: '700',
//     color: COLORS.black,
//     textAlign: 'center',
//     marginBottom: hp('2%'),
//   },

//   description: {
//     width: wp('86%'),
//     fontSize: wp('5%'),
//     color: COLORS.gray,
//     textAlign: 'center',
//     lineHeight: hp('4%'),
//   },

//   bottom: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: hp('5%'),
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: wp('6%'),
//   },

//   dots: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: -hp('1%'),
//   },

//   dot: {
//     width: wp('2.2%'),
//     height: wp('2.2%'),
//     borderRadius: wp('1.1%'),
//     backgroundColor: '#D9D9D9',
//     marginHorizontal: wp('1%'),
//   },

//   activeDot: {
//     width: wp('3.3%'),
//     height: wp('3.3%'),
//     borderRadius: wp('1.65%'),
//     backgroundColor: COLORS.primary,
//   },

//   buttonText: {
//   color: COLORS.primary,
//   fontSize: wp('5%'),
//   fontWeight: '600',
//   marginTop: -hp('1%'),
// },
// });
