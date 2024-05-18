import { useMemo, useContext } from "react";
import { Share, StyleSheet } from "react-native";
import ColorSchemeContext from "../../store/color-theme-context/colorThemeContext";
import { colors } from "../../constants/colors";

const useTour = (route) => {
  const { image, oldPrice, price, like } = route.params;
  const { isSchemeLight } = useContext(ColorSchemeContext) || {};

  const s = useMemo(
    () =>
      StyleSheet.create({
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
        cardDescription: {
          color: isSchemeLight ? colors.dark : colors.light,
          fontSize: 16,
        },
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
        icons: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        },
        cardIcon: {
          width: 32,
          height: 32,
        },
        shareIcon: {
          width: 28,
          height: 28,
        },
        cardIsLiked: {
          stroke: "red",
          fill: "red",
        },
        cardIsDisliked: {
          stroke: colors.secondary,
          fill: "transparent",
        },
        shareIconProps: {
          stroke: colors.secondary,
          fill: "transparent",
        },
        price: {
          fontSize: 20,
          color: isSchemeLight ? colors.dark : colors.extra,
        },
        newPrice: {
          fontSize: 20,
          fontWeight: "bold",
          color: isSchemeLight ? colors.dark : colors.extra,
        },
        oldPrice: {
          fontSize: 20,
          textDecorationLine: "line-through",
          color: colors.secondary,
        },
      }),
    [isSchemeLight]
  );

  const likeProps = like ? s.cardIsLiked : s.cardIsDisliked;
  const priceStyle = oldPrice ? s.newPrice : s.price;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return { s, image, price, oldPrice, onShare, likeProps, priceStyle };
};

export default useTour;
