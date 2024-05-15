import {
  Alert,
  Appearance,
  Image,
  Pressable,
  Share,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  LikeIcon,
  ShareIcon,
  ShoppingCartIcon,
} from "../../../components/icons";
import { colors } from "../../../constants/colors";
import { iconButtonRipple } from "../../../constants/styles";
import { CustomPressable } from "../../../components";

const scheme = Appearance.getColorScheme();
const isSchemeLight = scheme === "light";

const Card = ({ data }) => {
  const { title, like, oldPrice, price, isNew, image } = data;
  const likeProps = like ? s.cardIsLiked : s.cardIsDisliked;
  const priceStyle = oldPrice ? s.newPrice : s.price;

  const onPressShoppingCart = () =>
    Alert.alert("Title", "Message", [
      { text: "OK", onPress: () => console.log("Alert.OK") },
      {
        text: "Cancel",
        onPress: () => console.log("Alert.Cancel"),
        style: "cancel",
      },
    ]);

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

  return (
    <View style={s.card}>
      <Image
        source={{
          uri: image,
        }}
        style={s.cardImage}
      />
      {isNew && (
        <View style={s.newBadge}>
          <Text style={s.newBadgeText}>New</Text>
        </View>
      )}
      <View style={s.cardDetails}>
        <View style={s.cardInfo}>
          <View style={s.cardHeader}>
            <Text style={s.cardTitle}>{title}</Text>
            <View style={s.cardIcons}>
              <CustomPressable
                onPress={onShare}
                android_ripple={iconButtonRipple}
              >
                <View style={s.shareIcon}>
                  <ShareIcon {...s.share} />
                </View>
              </CustomPressable>
              <View style={s.cardIcon}>
                <LikeIcon {...likeProps} />
              </View>
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
            <Pressable
              style={s.cardIcon}
              android_ripple={iconButtonRipple}
              onPress={onPressShoppingCart}
            >
              <ShoppingCartIcon stroke="grey" />
            </Pressable>
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
    backgroundColor: isSchemeLight ? colors.primary : colors.dark,
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
    color: isSchemeLight ? colors.dark : colors.primary,
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
  cardDescription: {
    color: isSchemeLight ? colors.secondary : colors.light,
    fontSize: 12,
    flex: 1,
  },
  cardBuy: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 5,
    padding: 0,
  },
  buyPrompt: {
    color: isSchemeLight ? colors.secondary : colors.light,
  },
  cardIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardIcon: {
    width: 32,
    height: 32,
  },
  shareIcon: {
    width: 26,
    height: 26,
  },
  cardIsLiked: {
    stroke: "red",
    fill: "red",
  },
  cardIsDisliked: {
    stroke: "grey",
    fill: "transparent",
  },
  share: {
    stroke: "grey",
    fill: "transparent",
  },
  price: { color: isSchemeLight ? colors.dark : colors.primary },
  newPrice: {
    fontWeight: "bold",
    color: isSchemeLight ? colors.dark : colors.extra,
  },
  oldPrice: { textDecorationLine: "line-through", color: colors.secondary },
});

export default Card;
