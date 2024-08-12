import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TabTwoScreen from "@/app/(tabs)/explore"

export default function HomeScreen() {
  const [fetchedData, setFetchedData] = useState(null);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Movies</Text>
      {fetchedData && (
        <ScrollView>
          {fetchedData.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
              <Text>First Name: {item.firstName}</Text>
            </View>
          ))
          <TabTwoScreen title={item.title}
          uri={item.uri}
          overview={item.overview}
          popularity={item.popularity}
          vote_average={item.vote_average}
          />}
          
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#495057",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#495057",
  },
  cardImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8,
  },
});
