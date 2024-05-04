import { Alert, Modal, StyleSheet, View, TouchableOpacity } from "react-native";

const CustomModal = ({ visible, setVisible, children }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setVisible(!visible);
        }}
      >
        <TouchableOpacity
          style={styles.modalTouchable}
          activeOpacity={1}
          onPressIn={() => {
            setVisible(false);
          }}
        >
          <View style={styles.backdrop}>
            <TouchableOpacity
              style={styles.modalBackdropTouchable}
              activeOpacity={1}
            >
              {children}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    flexBasis: "50%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "rgba(100, 100, 100, 0.5)",
  },
  modalTouchable: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackdropTouchable: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
});

export default CustomModal;
