import { Button, Text } from "@rneui/base";
import { View } from "react-native";
import DetailsPage from "../Components/DetailsPage";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
      }}
    >
      {/* <DetailsPage /> */}

      <Link href="/LandingPage">Go to Landing Page</Link>
    </View>
  );
}
