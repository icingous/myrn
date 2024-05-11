import ScreenContainer from "../ScreenContainer";

export default (Screen) => (props) =>
  (
    <ScreenContainer>
      <Screen {...props} />
    </ScreenContainer>
  );
