import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from 'react-native';

import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonHeader from '../../components/CommonHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FONT from '../../utils/font';

const COLORS = {
  primary: '#2B1247',
  background: '#F5F5F5',
  white: '#FFFFFF',
  text: '#222222',
  grey: '#777777',
  border: '#E5E5E5',
  danger: '#E53935',
};

const dummyNotifications = [
  {
    id: '1',
    title: 'New Order Received',
    message: 'Table 5 placed a new order.',
    time: '10:30 AM',
    read: false,
    selected: false,
  },
  {
    id: '2',
    title: 'Payment Received',
    message: 'Invoice INV-1023 paid successfully.',
    time: '09:40 AM',
    read: true,
    selected: false,
  },
  {
    id: '3',
    title: 'Low Stock Alert',
    message: 'Coffee Powder stock is below limit.',
    time: 'Yesterday',
    read: false,
    selected: false,
  },
  {
    id: '4',
    title: 'New Customer Added',
    message: 'Rahul Kumar has been added.',
    time: 'Yesterday',
    read: true,
    selected: false,
  },
];

export default function NotificationListScreen({navigation}) {
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [alertType, setAlertType] = useState('success');
const [alertCallback, setAlertCallback] = useState(null);
const [deleteId, setDeleteId] = useState(null);

const deleteNotification = id => {
  setDeleteId(id);
  setAlertTitle('Delete Notification');
  setAlertMessage('Are you sure you want to delete this notification?');
  setAlertType('warning');

  setAlertCallback(() => () => {
    setNotifications(prev => prev.filter(item => item.id !== id));
  });

  setAlertVisible(true);
};
  const [notifications, setNotifications] =
    useState(dummyNotifications);

  const [search, setSearch] = useState('');

  const [refreshing, setRefreshing] =
    useState(false);

  // Pull Refresh

  const onRefresh = () => {

    setRefreshing(true);

    setTimeout(() => {

      setRefreshing(false);

    }, 1500);

  };

  // Search

  const filteredNotifications =
    notifications.filter(item =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.message
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

  // Read Single

  const markRead = id => {

    setNotifications(prev =>
      prev.map(item =>
        item.id === id
          ? {...item, read: true}
          : item,
      ),
    );

  };

  // Mark All Read

  const markAllRead = () => {

    setNotifications(prev =>
      prev.map(item => ({
        ...item,
        read: true,
      })),
    );

  };

  // Select Single

  const toggleSelection = id => {

    setNotifications(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              selected: !item.selected,
            }
          : item,
      ),
    );

  };

  // Select All

  const selectAll = () => {

    setNotifications(prev =>
      prev.map(item => ({
        ...item,
        selected: true,
      })),
    );

  };
// const deleteNotification = id => {

//   Alert.alert(
//     'Delete Notification',
//     'Are you sure you want to delete this notification?',
//     [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Delete',
//         style: 'destructive',
//         onPress: () => {
//           setNotifications(prev =>
//             prev.filter(item => item.id !== id),
//           );
//         },
//       },
//     ],
//   );

// };
const deleteSelected = () => {
  setAlertTitle('Delete Notifications');
  setAlertMessage(
    `Delete ${selectedCount} selected notifications?`,
  );
  setAlertType('warning');

  setAlertCallback(() => () => {
    setNotifications(prev =>
      prev.filter(item => !item.selected),
    );
  });

  setAlertVisible(true);
};
// const deleteSelected = () => {

//   Alert.alert(
//     'Delete Notifications',
//     `Delete ${selectedCount} selected notifications?`,
//     [
//       {
//         text: 'Cancel',
//         style: 'cancel',
//       },
//       {
//         text: 'Delete',
//         style: 'destructive',
//         onPress: () => {
//           setNotifications(prev =>
//             prev.filter(item => !item.selected),
//           );
//         },
//       },
//     ],
//   );

// };
  // Unselect All

  const unselectAll = () => {

    setNotifications(prev =>
      prev.map(item => ({
        ...item,
        selected: false,
      })),
    );

  };

  // Delete Single

//   const deleteNotification = id => {

//     setNotifications(prev =>
//       prev.filter(item => item.id !== id),
//     );

//   };

  // Delete Selected

//   const deleteSelected = () => {

//     setNotifications(prev =>
//       prev.filter(item => !item.selected),
//     );

//   };

  const selectedCount =
    notifications.filter(
      item => item.selected,
    ).length;
      const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={() => markRead(item.id)}
      onLongPress={() =>
        toggleSelection(item.id)
      }>

      {/* Checkbox */}

      <TouchableOpacity
        onPress={() =>
          toggleSelection(item.id)
        }>

        <Icon
          name={
            item.selected
              ? 'check-box'
              : 'check-box-outline-blank'
          }
          size={24}
          color={COLORS.primary}
        />

      </TouchableOpacity>

      {/* Content */}

      <View style={styles.content}>

        <View style={styles.titleRow}>

          {!item.read && (
            <View style={styles.dot} />
          )}

          <Text
            style={[
              styles.title,
              !item.read && {
                fontFamily: FONT.Bold,
              },
            ]}>

            {item.title}

          </Text>

        </View>

        <Text style={styles.message}>
          {item.message}
        </Text>

        <Text style={styles.time}>
          {item.time}
        </Text>

      </View>

      {/* Delete */}

      <TouchableOpacity
        onPress={() =>
          deleteNotification(item.id)
        }>

        <Icon
          name="delete"
          size={22}
          color={COLORS.danger}
        />

      </TouchableOpacity>

    </TouchableOpacity>
  );

  return (
<View style={{ flex: 1, backgroundColor:COLORS.primary }}>
    
    <CommonHeader
  title="Notifications"
 navigation={navigation}

/>
    <View style={styles.container}>

      {/* <Header
        navigation={navigation}
        title="Notifications"
      /> */}

      {/* Search */}

      {/* <View style={styles.searchBox}>

        <Icon
          name="search"
          size={22}
          color="#777"
        />

        <TextInput
          placeholder="Search Notifications"
          placeholderTextColor="#888"
          value={search}
          onChangeText={setSearch}
          style={styles.input}
        />

      </View> */}

      {/* Action Bar */}

      <View style={styles.actionBar}>

        <TouchableOpacity
          onPress={selectAll}>

          <Text style={styles.actionText}>
            Select All
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={unselectAll}>

          <Text style={styles.actionText}>
            Unselect
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={markAllRead}>

          <Text style={styles.actionText}>
            Mark All Read
          </Text>

        </TouchableOpacity>

      </View>

      {/* Delete Selected */}

      {selectedCount > 0 && (

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={deleteSelected}>

          <Icon
            name="delete"
            size={22}
            color="#FFF"
          />

          <Text style={styles.deleteText}>
            Delete Selected ({selectedCount})
          </Text>

        </TouchableOpacity>

      )}

      {/* List */}

      <FlatList
        data={filteredNotifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        ListEmptyComponent={() => (

          <View style={styles.empty}>

            <Icon
              name="notifications-none"
              size={90}
              color="#BBBBBB"
            />

            <Text style={styles.emptyTitle}>
              No Notifications
            </Text>

            <Text style={styles.emptySub}>
              You're all caught up.
            </Text>

          </View>

        )}
        contentContainerStyle={{
          paddingBottom: hp('5%'),
          flexGrow: 1,
        }}
      />

    </View>
    </View>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Search

  searchBox: {
    marginHorizontal: wp('4%'),
    marginTop: hp('2%'),
    marginBottom: hp('1.5%'),
    backgroundColor: COLORS.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('4%'),
    height: hp('6.5%'),
  },

  input: {
    flex: 1,
    marginLeft: wp('3%'),
    color: COLORS.text,
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
  },

  // Action Bar

  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    marginTop:hp('2%')
  },

  actionText: {
    color: COLORS.primary,
    fontFamily: FONT.SemiBold,
    fontSize: wp('3.8%'),
  },

  // Delete Selected

  deleteButton: {
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.5%'),
    height: hp('6%'),
    backgroundColor: COLORS.danger,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteText: {
    color: COLORS.white,
    marginLeft: wp('2%'),
    fontFamily: FONT.Bold,
    fontSize: wp('4%'),
  },

  // Notification Card

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: wp('4%'),
    marginBottom: hp('1.3%'),
    padding: wp('4%'),
    borderRadius: 14,
    elevation: 2,
  },

  content: {
    flex: 1,
    marginHorizontal: wp('3%'),
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#FF3B30',
    marginRight: wp('2%'),
  },

  title: {
    color: COLORS.text,
    fontFamily: FONT.Medium,
    fontSize: wp('4.2%'),
  },

  message: {
    marginTop: hp('0.5%'),
    color: COLORS.grey,
    fontFamily: FONT.Regular,
    fontSize: wp('3.6%'),
    lineHeight: hp('2.6%'),
  },

  time: {
    marginTop: hp('0.8%'),
    color: '#999',
    fontFamily: FONT.Regular,
    fontSize: wp('3.3%'),
  },

  // Empty

  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('8%'),
    marginTop: hp('10%'),
  },

  emptyTitle: {
    marginTop: hp('2%'),
    color: COLORS.text,
    fontFamily: FONT.Bold,
    fontSize: wp('5.5%'),
  },

  emptySub: {
    marginTop: hp('1%'),
    color: COLORS.grey,
    textAlign: 'center',
    fontFamily: FONT.Regular,
    fontSize: wp('4%'),
    lineHeight: hp('3%'),
  },
});