import { StyleSheet, Text, View } from "react-native";
import withScreenContainer from "../../components/hoc/withScreenContainer";
import { colors } from "../../constants/colors";

const More = () => {
  return (
    <View>
      <Text style={styles.text}>More</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.light,
  },
});

export default withScreenContainer(More);
