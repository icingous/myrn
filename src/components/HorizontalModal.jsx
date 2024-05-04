import { Alert, Modal, StyleSheet, View, TouchableOpacity } from 'react-native';

const HorizontalModal = ({ visible, setVisible, children }) => {
  return (
    <View style={styles.modalContainer}>
      <Modal
        animationType='fade'
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisible(!visible);
        }}
      >
        {/* <TouchableOpacity
          style={styles.modalTouchable}
          activeOpacity={1}
          onPressIn={() => {
            setVisible(false);
          }}
        > */}
        <View style={styles.backdrop}>
          {/* <TouchableOpacity
              style={styles.modalBackdropTouchable}
              activeOpacity={1}
            > */}
          {children}
          {/* </TouchableOpacity> */}
        </View>
        {/* </TouchableOpacity> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'stretch',
    // justifyContent: "center",
    // alignItems: "center",
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
  },
  // modalTouchable: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "flex-end",
  //   height: "100%",
  // },
  // modalBackdropTouchable: {
  //   flex: 1,
  //   width: "100%",
  //   justifyContent: "center",
  // },
});

export default HorizontalModal;
