import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.itemContainer}>
        <Text style={styles.heading}>Items</Text>
        <Text style={styles.heading}>Quantity</Text>
        <Text style={styles.heading}>Unit</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[styles.headingContainer, { backgroundColor: item.quantity<10  ? "#bf3b30" : "#0fa418" }] }>
              <Text style={{ flex: 1 }}>{item.anaajname}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{item.quantity}</Text>
              <Text style={{ flex: 1, textAlign: 'right' }}>{item.unit}</Text>
            </View>
          );
        }}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    gap: 10,
    
  },
  heading: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
