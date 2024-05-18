import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CustomPressable } from "../../../components";
import { LikeIcon, ShoppingCartIcon } from "../../../components/icons";
import { colors } from "../../../constants/colors";
import ColorSchemeContext from "../../../store/color-theme-context/colorThemeContext";

const Card = ({ data }) => {
  const { isSchemeLight } = useContext(ColorSchemeContext) || {};
  const { title, like, oldPrice, price, isNew } = data;
  const likeProps = like ? s.cardIsLiked : s.cardIsDisliked;
  const priceStyle = oldPrice
    ? [s.newPrice, isSchemeLight ? s.newPriceLight : s.newPriceDark]
    : isSchemeLight
    ? s.priceLight
    : s.priceDark;
  const cardRipple = {
    color: colors.light,
    borderless: false,
    radius: 75,
    foreground: true,
  };
  const navigation = useNavigation();
  const navigateToCardData = () => navigation.navigate("Tour", data);

  return (
    <View style={[s.card, isSchemeLight ? s.cardLight : s.cardDark]}>
      <CustomPressable android_ripple={cardRipple} onPress={navigateToCardData}>
        <Image source={{ uri: data.image }} style={s.cardImage} />
      </CustomPressable>
      {isNew && (
        <View style={s.newBadge}>
          <Text style={s.newBadgeText}>New</Text>
        </View>
      )}
      <View style={s.cardDetails}>
        <View style={s.cardInfo}>
          <View style={s.cardHeader}>
            <Text
              style={[
                s.cardTitle,
                isSchemeLight ? s.cardTitleLight : s.cardTitleDark,
              ]}
            >
              {title}
            </Text>
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
          <Text
            numberOfLines={1}
            style={[
              s.cardDescription,
              isSchemeLight ? s.cardDescriptionLight : s.cardDescriptionDark,
            ]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            harum earum ut possimus voluptatem impedit quis vel beatae quod
            laborum.
          </Text>
          <View style={s.cardBuy}>
            <Text style={isSchemeLight ? s.buyPromptLight : s.buyPromptDark}>
              Buy
            </Text>
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
    borderColor: colors.secondary,
    borderRadius: 10,
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 4,
  },
  cardLight: {
    backgroundColor: colors.primary,
    shadowColor: colors.dark,
  },
  cardDark: {
    backgroundColor: colors.dark,
    shadowColor: colors.extra,
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
    backgroundColor: colors.warning,
  },
  newBadgeText: {
    fontSize: 10,
    color: colors.extra,
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
  },
  cardTitleLight: {
    color: colors.dark,
  },
  cardTitleDark: {
    color: colors.primary,
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
  cardDescription: { fontSize: 12, flex: 1 },
  cardDescriptionLight: { color: colors.secondary },
  cardDescriptionDark: { color: colors.light },
  cardBuy: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
    padding: 0,
  },
  buyPromptLight: {
    color: colors.secondary,
  },
  buyPromptDark: {
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
    stroke: colors.secondary,
    fill: "transparent",
  },
  priceLight: { color: colors.dark },
  priceDark: { color: colors.primary },
  newPrice: { fontWeight: "bold" },
  newPriceLight: {
    color: colors.dark,
  },
  newPriceDark: {
    color: colors.extra,
  },
  oldPrice: { textDecorationLine: "line-through", color: colors.secondary },
});

export default Card;
