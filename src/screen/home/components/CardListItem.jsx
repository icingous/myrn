import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CustomPressable } from "../../../components";
import { LikeIcon, ShoppingCartIcon } from "../../../components/icons";
import { colors } from "../../../constants/colors";

const Card = ({ data, index }) => {
  const { title, like, oldPrice, price, isNew } = data;
  const likeProps = like ? s.cardIsLiked : s.cardIsDisliked;
  const priceStyle = oldPrice ? s.newPrice : s.price;
  const cardRipple = {
    color: colors.light,
    borderless: false,
    radius: 75,
    foreground: true,
  };

  const imageUri = `https://picsum.photos/200.webp?random=${index}`;
  const navigation = useNavigation();
  const navigateToCardData = () =>
    navigation.navigate("Tour", { ...data, image: imageUri });

  return (
    <View style={s.card}>
      <CustomPressable android_ripple={cardRipple} onPress={navigateToCardData}>
        <Image source={{ uri: imageUri }} style={s.cardImage} />
      </CustomPressable>
      {isNew && (
        <View style={s.newBadge}>
          <Text style={s.newBadgeText}>New</Text>
        </View>
      )}
      <View style={s.cardDetails}>
        <View style={s.cardInfo}>
          <View style={s.cardHeader}>
            <Text style={s.cardTitle}>{title}</Text>
            <View style={s.cardIcon}>
              <LikeIcon {...likeProps} />
            </View>
          </View>
          <View style={s.cardPricing}>
            <Text style={priceStyle}>{`${
              oldPrice ? "new price" : "price"
            }: $${price}`}</Text>
            {oldPrice && (
              <Text style={s.oldPrice}>{`old price: $${oldPrice}`}</Text>
            )}
          </View>
        </View>
        <View style={s.cardTotal}>
          <Text numberOfLines={1} style={s.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum earum ut possimus voluptatem impedit quis vel beatae quod
            laborum.
          </Text>
          <View style={s.cardBuy}>
            <Text style={s.buyPrompt}>Buy</Text>
            <View style={s.cardIcon}>
              <ShoppingCartIcon stroke="grey" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 122,
    marginBottom: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    shadowColor: "#FFF",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.34,
    shadowRadius: 3,
    elevation: 4,
    backgroundColor: colors.dark,
  },
  newBadge: {
    position: "absolute",
    top: 4,
    left: 94,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 14,
    backgroundColor: "orange",
  },
  newBadgeText: {
    fontSize: 10,
    color: "white",
  },
  cardImage: {
    height: 100,
    width: 100,
    borderRadius: 5,
  },
  cardDetails: {
    flex: 1,
    gap: 5,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  cardInfo: { paddingLeft: 12, flex: 1 },
  cardTitle: {
    fontSize: 20,
    textTransform: "uppercase",
    color: "bisque",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardPricing: {},
  cardTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    gap: 10,
  },
  cardDescription: { color: "lightgrey", fontSize: 12, flex: 1 },
  cardBuy: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
    padding: 0,
  },
  buyPrompt: {
    color: colors.light,
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
  price: { color: "bisque" },
  newPrice: { fontWeight: "bold", color: "white" },
  oldPrice: { textDecorationLine: "line-through", color: "grey" },
});

export default Card;
