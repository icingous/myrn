import { useCallback } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { colors } from "../../constants/colors";

const Cart = ({ navigation }) => {
  const goBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={goBack}
      >
        <View style={styles.centeredView}>
          <Text style={styles.header}>Shopping Cart</Text>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello Traveler!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={goBack}
            >
              <Text style={styles.textStyle}>Hide Cart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  header: {
    fontSize: 32,
    color: colors.dark,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Cart;
