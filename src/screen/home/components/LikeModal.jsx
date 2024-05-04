import { Pressable, StyleSheet, Text, View } from "react-native";
import { CustomModal } from "../../../components";

const LikeModal = ({ close, visible, setVisible }) => {
  return (
    <CustomModal visible={visible} setVisible={setVisible}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Hello World!</Text>
        <Pressable style={[styles.button, styles.buttonClose]} onPress={close}>
          <Text style={styles.text}>Hide Modal</Text>
        </Pressable>
      </View>
    </CustomModal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    marginBottom: 0,
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default LikeModal;
