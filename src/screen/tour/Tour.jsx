import { useCallback } from "react";
import { Image, Text, View } from "react-native";
import { LikeIcon, ShareIcon } from "../../components/icons";
import withScreenContainer from "../../components/hoc/withScreenContainer";
import { CustomPressable } from "../../components";
import { iconButtonRipple } from "../../constants/styles";
import useTour from "./useTour";

const Tour = ({ navigation, route }) => {
  const { s, image, price, oldPrice, onShare, likeProps, priceStyle } =
    useTour(route);

  const navigateToCart = useCallback(
    () => navigation.navigate("Cart"),
    [navigation]
  );

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
          <View style={s.icons}>
            <CustomPressable
              onPress={onShare}
              android_ripple={iconButtonRipple}
            >
              <View style={s.shareIcon}>
                <ShareIcon {...s.shareIconProps} />
              </View>
            </CustomPressable>
            <View style={s.cardIcon}>
              <LikeIcon {...likeProps} />
            </View>
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
              onPress={navigateToCart}
            >
              <Text style={s.buyPrompt}>Buy</Text>
            </CustomPressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default withScreenContainer(Tour);
