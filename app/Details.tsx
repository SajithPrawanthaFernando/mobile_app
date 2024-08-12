import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default function TabTwoScreen({
  title,
  uri,
  overview,
  popularity,
  vote_average,
  navigateBack,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TV Shows</Text>
      <View style={styles.contentContainer}>
        <Image source={{ uri: uri }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.statsContainer}>
          <Text style={styles.voteAverage}>Vote Avg: {vote_average}</Text>
          <Text style={styles.popularity}>Popularity: {popularity}</Text>
        </View>
      </View>

      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigateBack}>
        <Text style={styles.buttonText}>Discover</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#333",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  voteAverage: {
    fontSize: 14,
    color: "#ff6347", // Tomato color for vote average
  },
  popularity: {
    fontSize: 14,
    color: "#333",
  },
  overviewContainer: {
    marginBottom: 16,
  },
  overviewTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  overviewText: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#b8312f", // Matching the "Discover" button color in the mockup
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
