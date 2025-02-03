import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Create = ({ data, setdata }) => {
  const [anaajname, setanaajname] = useState("");
  const [quantity, setquantity] = useState("");

  const handleSetData = () => {
    if (anaajname && quantity) {
      const newItem = {
        id: data.length + 1,
        anaajname: anaajname,
        quantity: quantity,
        unit: "kg",
      };
      setdata([...data, newItem]);
      alert("Stock Added Successfully");
      setanaajname("");
      setquantity("");
    } else {
      alert("Please fill in both Item Name and Quantity.");
    }
  };

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id));
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        onChangeText={(text) => setanaajname(text)}
        value={anaajname}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        keyboardType="numeric"
        onChangeText={(text) => setquantity(text)}
        value={quantity}
      />
      <Button title="Submit" style={styles.button} onPress={handleSetData} />

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 10,
            textAlign: "center",
          }}
        >
          All Items in Stock
        </Text>
        <View style={styles.itemContainer}>
          <Text style={styles.heading}>Items</Text>
          <Text style={styles.heading}>Quantity</Text>
          <Text style={styles.heading}>Actions</Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={[
                  styles.headingContainer,
                  {
                    backgroundColor: item.quantity < 10 ? "#bf3b30" : "#0fa418",
                  },
                ]}
              >
                <Text style={{ flex: 1 }}>{item.anaajname}</Text>
                <Text style={{ flex: 1, textAlign: "center" }}>
                  {item.quantity}
                </Text>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <TouchableOpacity onPress={() => handleEdit(item.id)}>
                    <Text style={{ color: "blue" }}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Text style={{ color: "red" }}>Delete</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
};

// Define handleEdit and handleDelete functions
const handleEdit = (id) => {
  // Assuming handleEdit is not implemented yet
};

export default Create;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    margin: 12,
  },
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
