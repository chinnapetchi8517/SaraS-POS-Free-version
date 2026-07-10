import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CustomAlert from '../../components/CustomAlert';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FONT from '../../utils/font';
const COLORS = {
  primary: '#2B1247',
  white: '#FFFFFF',
  background: '#F5F5F5',
  border: '#E5E5E5',
  text: '#222222',
  grey: '#777777',
  danger: '#E53935',
};

export default function CategoryListScreen({navigation}) {
  const [search, setSearch] = useState('');
const [alertConfig, setAlertConfig] = useState({
  visible: false,
  title: '',
  message: '',
  showCancel: false,
  onConfirm: null,
});
  const [categories, setCategories] = useState([
    {
      id: '1',
      name: 'Beverages',
      description: 'Tea, Coffee, Juice',
    },
    {
      id: '2',
      name: 'Fast Food',
      description: 'Pizza, Burger',
    },
    {
      id: '3',
      name: 'Snacks',
      description: 'Chips & Fries',
    },
    {
      id: '4',
      name: 'Desserts',
      description: 'Ice Cream & Cakes',
    },
  ]);

  const filteredCategories = categories.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const deleteCategory = id => {
  setAlertConfig({
    visible: true,
    title: 'Delete Category',
    message: 'Are you sure you want to delete this category?',
    showCancel: true,
    onConfirm: () => {
      setCategories(prev =>
        prev.filter(item => item.id !== id),
      );

      setAlertConfig({
        visible: true,
        title: 'Success',
        message: 'Category deleted successfully.',
        showCancel: false,
        onConfirm: () =>
          setAlertConfig(prev => ({
            ...prev,
            visible: false,
          })),
      });
    },
  });
};

  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Icon
            name="category"
            size={30}
            color={COLORS.primary}
          />
        </View>

        <View style={{flex: 1}}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('EditCategory', {
              category: item,
            })
          }>
          <Icon
            name="edit"
            size={22}
            color={COLORS.primary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() =>
            deleteCategory(item.id)
          }>
          <Icon
            name="delete"
            size={22}
            color={COLORS.danger}
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  const EmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Icon
        name="category"
        size={90}
        color="#CCCCCC"
      />

      <Text style={styles.emptyTitle}>
        No Categories Found
      </Text>

      <Text style={styles.emptySubtitle}>
        Tap + to create your first category.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search */}
<Header
        navigation={navigation}
        title="Category"
      />
      <View style={styles.searchBox}>
        <Icon
          name="search"
          size={22}
          color="#888"
        />

        <TextInput
          placeholder="Search Category"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />
      </View>

      {/* List */}

      <FlatList
        data={filteredCategories}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={EmptyComponent}
        contentContainerStyle={{
          paddingBottom: hp('12%'),
          flexGrow: 1,
        }}
      />

      {/* Floating Button */}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.fab}
        onPress={() =>
          navigation.navigate('AddCategory')
        }>
        <Icon
          name="add"
          color="#FFF"
          size={34}
        />
      </TouchableOpacity>
      <CustomAlert
  visible={alertConfig.visible}
  title={alertConfig.title}
  message={alertConfig.message}
  showCancel={alertConfig.showCancel}
  onCancel={() =>
    setAlertConfig(prev => ({
      ...prev,
      visible: false,
    }))
  }
  onConfirm={() => {
    setAlertConfig(prev => ({
      ...prev,
      visible: false,
    }));

    if (alertConfig.onConfirm) {
      alertConfig.onConfirm();
    }
  }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  searchBox: {
    margin: wp('4%'),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    height: hp('6.5%'),
  },

  // input: {
  //   flex: 1,
  //   marginLeft: wp('2%'),
  //   color: COLORS.text,
  //   fontSize: wp('4%'),
  // },

  card: {
    backgroundColor: COLORS.white,
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    borderRadius: 14,
    padding: wp('4%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },

  left: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  iconContainer: {
    width: wp('14%'),
    height: wp('14%'),
    borderRadius: wp('7%'),
    backgroundColor: '#EEE8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('4%'),
  },

  // name: {
  //   fontSize: wp('4.6%'),
  //   fontWeight: '700',
  //   color: COLORS.text,
  // },

  // description: {
  //   marginTop: hp('0.4%'),
  //   fontSize: wp('3.7%'),
  //   color: COLORS.grey,
  // },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  editButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#F3F0FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('2%'),
  },

  deleteButton: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFECEC',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fab: {
    position: 'absolute',
    right: wp('6%'),
    bottom: hp('3%'),
    width: wp('16%'),
    height: wp('16%'),
    borderRadius: wp('8%'),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('15%'),
    paddingHorizontal: wp('10%'),
  },

  // emptyTitle: {
  //   marginTop: hp('2%'),
  //   fontSize: wp('5.5%'),
  //   fontWeight: '700',
  //   color: COLORS.text,
  // },

  // emptySubtitle: {
  //   marginTop: hp('1%'),
  //   fontSize: wp('4%'),
  //   color: COLORS.grey,
  //   textAlign: 'center',
  //   lineHeight: hp('3%'),
  // },

  input: {
    flex: 1,
    marginLeft: wp('2%'),
    color: COLORS.text,
    fontSize: wp('4%'),
    fontFamily: FONT.Regular,
  },

  name: {
    fontSize: wp('4.6%'),
    color: COLORS.text,
    fontFamily: FONT.Bold,
  },

  description: {
    marginTop: hp('0.4%'),
    fontSize: wp('3.7%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
  },

  emptyTitle: {
    marginTop: hp('2%'),
    fontSize: wp('5.5%'),
    color: COLORS.text,
    fontFamily: FONT.Bold,
  },

  emptySubtitle: {
    marginTop: hp('1%'),
    fontSize: wp('4%'),
    color: COLORS.grey,
    textAlign: 'center',
    lineHeight: hp('3%'),
    fontFamily: FONT.Regular,
  },
});