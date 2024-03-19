import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

export default function Tab() {
  const NextScreen = () => {
    console.log("Next Screen");
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>Party Name </Text>
      <TextInput />
      <Text>Party Gst Number Optional </Text>
      <TextInput />
      <Text>Party Name </Text>
      <TextInput />
      <Text>Phone Number</Text>
      <TextInput />
      <Text>Set Date</Text>
      <TextInput />
      <Link href="landingpage">Save and Continue</Link>
    </View>
  );
}
