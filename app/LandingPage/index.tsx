import React, { useState } from "react";
import { Tab, Text, TabView } from "@rneui/themed";
import { ListItem } from "@rneui/themed";
import { View } from "react-native";
import { Avatar, Icon } from "@rneui/base";
import { ListItemAccordion } from "@rneui/base/dist/ListItem/ListItem.Accordion";

import { FAB } from "@rneui/themed";

export default function Page() {
  const [index, setIndex] = React.useState(0);

  const roomList = [
    {
      name: "Room 1",
    },
    {
      name: "Room 2",
    },
  ];

  const accordionItem = [
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
  ];
  const [expanded, setExpanded] = useState(
    new Array(accordionItem.length).fill(false)
  );

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
                      // Create a new array with the same values as the old expanded state
                      const newExpanded = [...expanded];
                      // Toggle the expanded state for the current accordion item
                      newExpanded[i] = !newExpanded[i];
                      // Update the expanded state
                      setExpanded(newExpanded);
                    }}
                  >
                    {l.item.map((item, i: React.Key) => (
                      <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                          <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                      </ListItem>
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
      <FAB
        icon={<Icon name="add" />}
        title="Add a Category"
        placement="right"
        onPress={() => console.log("Add")}
        color="grey"
      />
    </>
  );
}
