import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Header from '../../components/Header';
import HeaderSearch from '../../components/HeaderSearch';
import ProductGrid from '../../components/ProductGrid';
import CartSummary from '../../components/CartSummary';
import PaymentSection from '../../components/PaymentSection';
import BillActions from '../../components/BillActions';
import CustomAlert from '../../components/CustomAlert';
const PRODUCTS = [
  {
    id: '1',
    name: 'Coffee',
    barcode: '1001',
    price: 120,
  },
  {
    id: '2',
    name: 'Tea',
    barcode: '1002',
    price: 40,
  },
  {
    id: '3',
    name: 'Burger',
    barcode: '1003',
    price: 250,
  },
  {
    id: '4',
    name: 'Pizza',
    barcode: '1004',
    price: 450,
  },
];

export default function BillingScreen({navigation}) {
  const [search, setSearch] = useState('');

  const [cart, setCart] = useState([]);

  const [holdCart, setHoldCart] = useState([]);
const [alertVisible, setAlertVisible] = useState(false);
const [alertTitle, setAlertTitle] = useState('');
const [alertMessage, setAlertMessage] = useState('');
const [confirmText, setConfirmText] = useState('OK');
const [cancelText, setCancelText] = useState('');
const [onConfirm, setOnConfirm] = useState(() => () => {});
  // -----------------------
  // Add Product
  // -----------------------
const showAlert = (
  title,
  message,
  confirm = 'OK',
  cancel = '',
  onPress = () => {}
) => {
  setAlertTitle(title);
  setAlertMessage(message);
  setConfirmText(confirm);
  setCancelText(cancel);

  setOnConfirm(() => () => {
    setAlertVisible(false);
    onPress();
  });

  setAlertVisible(true);
};

const closeAlert = () => setAlertVisible(false);
  const addToCart = product => {
    const exist = cart.find(i => i.id === product.id);

    if (exist) {
      const updated = cart.map(i =>
        i.id === product.id
          ? {...i, qty: i.qty + 1}
          : i,
      );

      setCart(updated);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          qty: 1,
        },
      ]);
    }
  };

  const handleAddProduct = product => {
  console.log('Added Product:', product);
  addToCart(product);
};
const payCash = () => {
  showAlert(
    'Payment Successful',
    'Cash payment completed successfully.'
  );
};

const payUPI = () => {
  showAlert(
    'UPI Payment',
    'Redirecting to UPI payment...'
  );
};
const increaseQty = id => {
  setCart(prev =>
    prev.map(item =>
      item.id === id
        ? {...item, qty: item.qty + 1}
        : item,
    ),
  );
};

const decreaseQty = id => {
  setCart(prev =>
    prev
      .map(item =>
        item.id === id
          ? {...item, qty: item.qty - 1}
          : item,
      )
      .filter(item => item.qty > 0),
  );
};
  // -----------------------
  // Barcode Scanner
  // -----------------------

  const openScanner = () => {
    navigation.navigate('BarcodeScanner', {
      onScan: barcode => {
        searchProduct(barcode);
      },
    });
  };

  const searchProduct = barcode => {
  const product = PRODUCTS.find(
    item => item.barcode === barcode,
  );

  if (product) {
    addToCart(product);

    showAlert(
      'Success',
      `${product.name} added to cart`
    );
  } else {
    showAlert(
      'Product Not Found',
      'No product found.'
    );
  }
};

  // -----------------------
  // Hold Bill
  // -----------------------

  const holdBill = () => {
  if (cart.length === 0) {
    showAlert('Cart Empty', 'Please add items to the cart.');
    return;
  }

  setHoldCart(cart);
  setCart([]);

  showAlert(
    'Success',
    'Bill has been placed on Hold'
  );
};

  // -----------------------
  // Resume Bill
  // -----------------------

  const resumeBill = () => {
  if (holdCart.length === 0) {
    showAlert(
      'No Hold Bill Found',
      'There is no held bill.'
    );
    return;
  }

  setCart(holdCart);
  setHoldCart([]);

  showAlert(
    'Bill Restored',
    'Held bill restored successfully.'
  );
};

  // -----------------------
  // Cancel Bill
  // -----------------------

  const cancelBill = () => {
  showAlert(
    'Cancel Bill',
    'Are you sure?',
    'Yes',
    'No',
    () => setCart([])
  );
};

  // -----------------------
  // Print Bill
  // -----------------------

  const printBill = () => {
  showAlert(
    'Printer',
    'Bluetooth printer integration coming next.'
  );
};

  // -----------------------
  // WhatsApp
  // -----------------------

  const shareWhatsapp = () => {
  showAlert(
    'WhatsApp',
    'Invoice sharing will be implemented.'
  );
};

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        title="Billing"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <HeaderSearch
          search={search}
          setSearch={setSearch}
          onBarcodePress={openScanner}
        />

        <ProductGrid
          products={PRODUCTS.filter(item =>
            item.name
              .toLowerCase()
              .includes(search.toLowerCase()),
          )}
          onAdd={handleAddProduct}
        />

       <CartSummary
  cart={cart}
  increaseQty={increaseQty}
  decreaseQty={decreaseQty}
/>
<PaymentSection
  payCash={payCash}
  payUPI={payUPI}
/>

        <BillActions
          onHold={holdBill}
          onResume={resumeBill}
          onCancel={cancelBill}
          onPrint={printBill}
          onWhatsapp={shareWhatsapp}
        />
      </ScrollView>
      <CustomAlert
  visible={alertVisible}
  title={alertTitle}
  message={alertMessage}
  confirmText={confirmText}
  cancelText={cancelText}
  onCancel={closeAlert}
  onConfirm={onConfirm}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});