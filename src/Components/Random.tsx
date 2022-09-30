import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export const Random = ({ route, navigation }: any) => {
  const handleBack = () => {
    navigation.navigate("Home", {
      paramKey: "",
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        {/* <View> */}
        <View style={styles.Row}>
          <Text style={styles.Lable}>Name :- </Text>
          <Text style={styles.Text}>{route.params.paramKey.name}</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Lable}>URL</Text>
          <Text style={styles.Text}>{route.params.paramKey.nasa_jpl_url}</Text>
        </View>
        <View style={styles.Row}>
          <Text style={styles.Lable}>Hazardous</Text>
          <Text style={styles.Text}>
            {route.params.paramKey.is_potentially_hazardous_asteroid === true
              ? "true"
              : "false"}
          </Text>
        </View>
      </View>
      <Button title="Back" onPress={handleBack}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  table: {
    height: 300,
    width: 300,
  },
  Row: {
    borderRadius: 10,
    backgroundColor: "rgb(240, 238, 235)",
    shadowColor: "rgb(33,150,243)",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  Lable: {
    color: "red",
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
  Text: {
    flexDirection: "row",
    color: "gray",
    borderBottomWidth: 1,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
  },
  Button: {
    width: 300,
  },
});

export default Random;
