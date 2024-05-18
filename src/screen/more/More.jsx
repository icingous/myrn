import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { CustomPressable } from "../../components";
import {
  iconButton,
  iconButtonRipple,
  toolIconProps,
} from "../../constants/styles";
import { CloseIcon } from "../../components/icons";

const More = ({ navigation }) => {
  const close = () => {
    navigation.goBack();
  };

  return (
    <Modal visible={true} style={styles.modalView}>
      <View style={styles.backdrop}>
        <View style={styles.header}>
          <Text style={styles.filtersHeader}>Filters</Text>
          <CustomPressable
            style={iconButton}
            onPress={close}
            android_ripple={iconButtonRipple}
          >
            <CloseIcon {...toolIconProps} />
          </CustomPressable>
        </View>
        <View style={styles.form}>
          {/* <View style={styles.formItem}>
            <Checkbox value={values.newOnly} onValueChange={onNewOnlyChange} />
            <Text style={styles.formLabel}>only new</Text>
          </View> */}
          <Pressable
            style={[styles.button, styles.buttonClose, styles.buttonSubmit]}
            onPress={close}
          >
            <Text style={styles.text}>Bye, bye!</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: "red",
    opacity: 0.5,
  },
  modalView: {
    marginBottom: 0,
    // backgroundColor: "lightgrey",
    padding: 10,
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filtersHeader: {
    fontSize: 30,
    marginBottom: 24,
  },
  form: {
    gap: 16,
  },
  formItem: {
    flexDirection: "row",
    gap: 10,
  },
  formLabel: {
    fontSize: 14,
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
  buttonSubmit: {
    marginTop: 24,
  },
});

export default More;
