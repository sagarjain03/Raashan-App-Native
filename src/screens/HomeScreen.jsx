import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
import React from "react";
import { useState } from "react";
import AllItems from "./AllItems";
import LowStock from "./LowStock";
import Create from "./Create";




const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setdata] = useState([
    {
      "id": 1,
      "anaajname": "Wheat",
      "quantity": 50,
      "unit": "kg"
    },
    {
      "id": 2,
      "anaajname": "Rice",
      "quantity": 8,
      "unit": "kg"
    },
    {
      "id": 3,
      "anaajname": "Barley",
      "quantity": 20,
      "unit": "kg"
    },
    {
      "id": 4,
      "anaajname": "Maize",
      "quantity": 25,
      "unit": "kg"
    },
    {
      "id": 5,
      "anaajname": "Oats",
      "quantity": 15,
      "unit": "kg"
    },
    {
      "id": 6,
      "anaajname": "Lentils",
      "quantity": 10,
      "unit": "kg"
    },
    {
      "id": 7,
      "anaajname": "Chickpeas",
      "quantity": 40,
      "unit": "kg"
    },
    {
      "id": 8,
      "anaajname": "Millets",
      "quantity": 35,
      "unit": "kg"
    }
  ]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, { backgroundColor: view === 0 ? 'green' : null }]} onPress={() => setView(0)}>
          <Text style={[styles.buttonText, { color: view === 0 ? 'white' : 'green' }]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: view === 1 ? 'green' : null }]} onPress={() => setView(1)}>
          <Text style={[styles.buttonText, { color: view === 1 ? 'white' : 'green' }]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, { backgroundColor: view === 2 ? 'green' : null }]} onPress={() => setView(2)}>
          <Text style={[styles.buttonText, { color: view === 2 ? 'white' : 'green' }]}>Create</Text>
        </Pressable>
      </View>
  
      {/* Move rendering inside the return */}
      {view === 0 && <AllItems data= {data}/>}
      {view === 1 && <LowStock data= {data.filter(item => item.quantity < 10)}/>}
      {view === 2 && <Create data={data} setdata={setdata}/>}
    </View>
  );
  
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#dadada",
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderWidth: 0.8,
    borderColor: 'green',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonText: {
    
    fontSize: 16,
    color: 'green',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  }
});
