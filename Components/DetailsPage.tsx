import { Link } from "expo-router";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Button } from "@rneui/themed";

import { useCustomerStore } from "../store";

const DetailsPage = () => {
  // const [name, setName] = useState("");
  // const [gst, useGst] = useState("");
  // const [phone, usePhone] = useState("");

  // const [date, setDate] = useState<Date>(
  //   new Date(new Date().setHours(0, 0, 0, 0))
  // );

  const { name, setName, gst, useGst, phone, usePhone, date, setDate } =
    useCustomerStore();

  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
    console.log("Toggle Date Picker");
  };

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") {
      toggleDatePicker();
      return;
    }

    if (event.type === "set") {
      setShowPicker(false);
      setDate(selectedDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDate(selectedDate);
      }
    } else {
      toggleDatePicker();
    }
  };

  console.log(showPicker);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text>Party Name </Text>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter Party Name"
        />
        <Text>Party Gst Number (Optional) </Text>
        <TextInput
          style={styles.textInput}
          value={gst}
          onChangeText={(text) => useGst(text)}
        />
        <Text>Party Name </Text>
        <TextInput
          style={styles.textInput}
          value={phone}
          onChangeText={(text) => usePhone(text)}
          textContentType="telephoneNumber"
        />
        <Text>Phone Number</Text>
        <TextInput style={styles.textInput} />

        <View>
          <Text>Set Date</Text>

          {!showPicker && (
            <Pressable onPress={toggleDatePicker} style={{}}>
              <TextInput
                style={styles.textInput}
                value={date ? date.toDateString() : ""}
                placeholder="Select Date"
                onPressIn={toggleDatePicker}
              />
            </Pressable>
          )}

          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </View>

      <Button
        onPress={() => {
          console.log("Button Pressed");
        }}
      >
        Save
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  overlayStyle: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#00000066",
  },
  headerStyle: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "#CDCDCD",
    borderBottomWidth: 1,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  inputContainerStyle: {
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#CAD3DF",
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingRight: 10,
    height: 50,
  },
  placeholderStyle: {
    // fontFamily: "Gill Sans",
    fontSize: 16,
    color: "#CDCDCD",
    marginHorizontal: 10,
  },
  textStyle: {
    // fontFamily: "Gill Sans",
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default DetailsPage;
