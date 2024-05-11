import { Image, StyleSheet, Text, View } from "react-native";
import { LikeIcon } from "../../components/icons";
import withScreenContainer from "../../components/hoc/withScreenContainer";
import { colors } from "../../constants/colors";
import { CustomPressable } from "../../components";
import { iconButtonRipple } from "../../constants/styles";

const Tour = ({ navigation, route }) => {
  const { image, oldPrice, price, like } = route.params;
  const likeProps = like ? s.cardIsLiked : s.cardIsDisliked;
  const priceStyle = oldPrice ? s.newPrice : s.price;

  return (
    <View style={s.container}>
      <Image style={s.image} source={{ uri: image }} />
      <View style={s.cardDetails}>
        <View style={s.cardInfo}>
          <View style={s.cardPricing}>
            <Text style={priceStyle}>{`${
              oldPrice ? "new price" : "price"
            }: $${price}`}</Text>
            {oldPrice && (
              <Text style={s.oldPrice}>{`old price: $${oldPrice}`}</Text>
            )}
          </View>
          <View style={s.cardIcon}>
            <LikeIcon {...likeProps} />
          </View>
        </View>
        <View style={s.cardTotal}>
          <View>
            <Text style={s.cardDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              harum earum ut possimus voluptatem impedit quis vel beatae quod
              laborum.
            </Text>
          </View>
          <View style={s.cardBuy}>
            <CustomPressable
              style={{
                backgroundColor: "steelblue",
                paddingVertical: 4,
                paddingHorizontal: 20,
              }}
              android_ripple={{
                ...iconButtonRipple,
                radius: 50,
                borderless: false,
              }}
              onPress={() => navigation.navigate("Cart")}
            >
              <Text style={s.buyPrompt}>Buy</Text>
            </CustomPressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    gap: 20,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  cardDetails: {
    flex: 1,
    gap: 15,
    alignItems: "stretch",
  },
  cardInfo: {
    paddingLeft: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPricing: {
    fontSize: 20,
  },
  cardTotal: {
    gap: 10,
  },
  cardDescription: { color: "lightgrey", fontSize: 16 },
  cardBuy: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    padding: 0,
  },
  buyPrompt: {
    fontSize: 24,
    color: colors.extra,
    textTransform: "uppercase",
  },
  cardIcon: {
    width: 32,
    height: 32,
  },
  cardIsLiked: {
    stroke: "red",
    fill: "red",
  },
  cardIsDisliked: {
    stroke: "grey",
    fill: "transparent",
  },
  price: { fontSize: 20, color: "bisque" },
  newPrice: { fontSize: 20, fontWeight: "bold", color: "white" },
  oldPrice: { fontSize: 20, textDecorationLine: "line-through", color: "grey" },
});

export default withScreenContainer(Tour);
