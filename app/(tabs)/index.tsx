import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Details from "@/app/Details";

export default function HomeScreen() {
  const [fetchedData, setFetchedData] = useState(null);
  const navigation = useNavigation();
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);

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
        setFetchedData(data.results);
      })
      .catch((err) => console.error(err));
  }, []);

  const handlePress = (item) => {
    setSelectedItem(item);
    setCurrentScreen("details");
  };

  const navigateBack = () => {
    setCurrentScreen("home");
  };

  if (currentScreen === "details" && selectedItem) {
    return (
      <Details
        title={selectedItem.title}
        uri={`https://image.tmdb.org/t/p/original/${selectedItem.poster_path}`}
        overview={selectedItem.overview}
        popularity={selectedItem.popularity}
        vote_average={selectedItem.vote_average}
        navigateBack={navigateBack}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movies</Text>
      {fetchedData && (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {fetchedData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => handlePress(item)}
            >
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#f8f9fa",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
