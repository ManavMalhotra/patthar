import React, { useEffect, useState } from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import { ListItem } from "@rneui/themed";
import { TextInput, View } from "react-native";
import { Avatar, Button, Icon, Overlay } from "@rneui/base";
import { ListItemAccordion } from "@rneui/base/dist/ListItem/ListItem.Accordion";

import { FAB } from "@rneui/themed";
import { Link } from "expo-router";

export default function Page() {
  const [index, setIndex] = React.useState(0);

  const [accordionItem, setAccordionItem] = useState([
    {
      title: "Rooms",
      item: [
        {
          title: "Room 1",
        },
        {
          title: "Room 2",
        },
      ],
    },
    {
      title: "Bathrooms",
      item: [
        {
          title: "Bathroom 1",
        },
        {
          title: "Bathroom 2",
        },
      ],
    },
  ]);

  const [expanded, setExpanded] = useState(
    new Array(accordionItem.length).fill(false)
  );

  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => setShowOverlay(!showOverlay);

  const [categoryName, setCategoryName] = useState("");
  const addCategory = () => {
    console.log("Category Name", categoryName);

    const newAccordionItem = [...accordionItem];
    newAccordionItem.push({
      title: categoryName,
      item: [],
    });
    setAccordionItem(newAccordionItem);
    toggleOverlay();
  };

  useEffect(() => {
    console.log("Accordion Item", accordionItem);
  }, [accordionItem]);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Title Categories" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="All Sheets" titleStyle={{ fontSize: 12 }} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        {/* Title Categories */}
        <TabView.Item style={{ width: "100%" }}>
          <View>
            <TabView.Item style={{ width: "100%" }}>
              <View>
                {/* Accordion Item  */}
                {accordionItem.map((l, i) => (
                  <ListItem.Accordion
                    key={i}
                    content={
                      <>
                        <ListItem.Content>
                          <ListItem.Title>{l.title}</ListItem.Title>
                        </ListItem.Content>
                      </>
                    }
                    isExpanded={expanded[i]}
                    onPress={() => {
                      const newExpanded = [...expanded];
                      newExpanded[i] = !newExpanded[i];
                      setExpanded(newExpanded);
                    }}
                  >
                    {l.item.map((item, i: React.Key) => (
                      <Link href="/category/test" key={i}>
                        <ListItem
                          key={i}
                          bottomDivider
                          containerStyle={{
                            paddingHorizontal: 32,
                          }}
                        >
                          <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                          </ListItem.Content>
                          <ListItem.Chevron />
                        </ListItem>
                      </Link>
                    ))}
                  </ListItem.Accordion>
                ))}
              </View>
            </TabView.Item>
          </View>
        </TabView.Item>
        {/* All Sheets */}
        <TabView.Item style={{ width: "100%" }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
      </TabView>

      <Overlay
        isVisible={showOverlay}
        onBackdropPress={toggleOverlay}
        overlayStyle={{
          backgroundColor: "white",
          borderRadius: 8,
          width: "90%",
        }}
      >
        <View style={{ padding: 20 }}>
          <Text h3>Add Category</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 5,
              padding: 5,
              marginVertical: 10,
            }}
            placeholder="Enter Category Name"
            onChange={(e) => {
              setCategoryName(e.nativeEvent.text);
            }}
          />

          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              gap: 8,
            }}
          >
            <Button
              onPress={() => {
                console.log("Button Pressed");
              }}
              containerStyle={{
                width: "50%",
              }}
            >
              Cancel
            </Button>
            <Button
              onPress={addCategory}
              containerStyle={{
                width: "50%",
              }}
            >
              Save
            </Button>
          </View>
        </View>
      </Overlay>

      <FAB
        icon={<Icon name="add" />}
        title="Add a Category"
        placement="right"
        onPress={toggleOverlay}
        color="grey"
      />
    </>
  );
}
