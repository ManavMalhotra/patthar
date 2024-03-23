import { Button, ButtonGroup, Tab, TabView, Text } from "@rneui/base";
import { TextInput, View } from "react-native";
import DetailsPage from "../Components/DetailsPage";
import { Link } from "expo-router";
import { useState } from "react";
import { Image } from "expo-image";

export default function Page() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        containerStyle={{
          backgroundColor: "black",
        }}
        variant="primary"
      >
        <Tab.Item title="1" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="2" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="3" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="4" titleStyle={{ fontSize: 12 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 20,
              justifyContent: "space-between",
            }}
          >
            <Text h4>Calculate Area of room - 1/2</Text>
            <Image
              source={require("../assets/polygon.svg")}
              style={{
                width: 200,
                height: 200,
                alignSelf: "center",
              }}
            />

            <View>
              <View>
                <Text h4>Length Of the room (In Ft)</Text>
                <TextInput
                  placeholder="Enter Length of the room"
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    marginVertical: 10,
                    fontSize: 20,
                  }}
                />
              </View>
              <View>
                <Text h4>Breadth Of the room (In Ft)</Text>
                <TextInput
                  placeholder="Enter Breadth of the room"
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    marginVertical: 10,
                    fontSize: 20,
                  }}
                />
              </View>
              <View>
                <Text h4>Height Of the room (In Ft)</Text>
                <TextInput
                  placeholder="Enter Height of the room"
                  style={{
                    borderRadius: 5,
                    padding: 5,
                    marginVertical: 10,
                    fontSize: 20,
                  }}
                />
              </View>
            </View>
            <Button
              onPress={() => {
                setIndex(index + 1);
              }}
            >
              Continue
            </Button>
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <View
            style={{
              flex: 1,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            <Text h4>Select Tile Size</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text>Tile Size (In ft)</Text>
                <TextInput placeholder="Enter Height of the room" style={{}} />
              </View>
              <View>
                <View>
                  <Text>No of Tiles in box</Text>
                  <TextInput
                    placeholder="Enter Height of the room"
                    style={{}}
                  />
                </View>
              </View>
            </View>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>

      {/* <DetailsPage />
      <Text h1>Details Page</Text>

      <Link href="/LandingPage">Go to Landing Page</Link> */}
    </>
  );
}
