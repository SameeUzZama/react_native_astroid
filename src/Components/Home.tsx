import React from "react";
import axios from "axios";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState, useEffect } from "react";

export const Home = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [astData, setAstData] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setName(val);
  };

  const handleSubmit = async (asteriodID: any) => {
    const AsteroidData = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/neo/${asteriodID}?api_key=orXtejXUJzLUGNPvhpVeSkNe5G5Nba1EbVTDBCJv`
    );

    await navigation.navigate("Random", {
      paramKey: AsteroidData?.data,
    });
  };

  const handleRamdomId = async () => {
    let maxNumber = 19;
    let randomNumber = Math.floor(Math.random() * maxNumber + 1);
    const asteriodID = astData[randomNumber]?.id;
    handleSubmit(asteriodID);
  };

  const allData = async () => {
    const apiDetails = await axios.get(
      "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=orXtejXUJzLUGNPvhpVeSkNe5G5Nba1EbVTDBCJv"
    );
    setAstData(apiDetails?.data?.near_earth_objects);
  };

  useEffect(() => {
    allData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.View}>
        <TextInput
          style={styles.Input}
          placeholder="Enter Astroid ID"
          value={name}
          onChange={(e: any) => handleChange(e)}
        />
        <Button
          title="Submit"
          disabled={!name}
          onPress={() => handleSubmit(name)}
        ></Button>
        <Button title="Random Asteroid id" onPress={handleRamdomId}></Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  View: {
    height: 200,
    justifyContent: "space-around",
  },
  Input: {
    marginVertical: 20,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  Button: {
    marginVertical: 20,
  },
});

export default Home;
