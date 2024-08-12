import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, View, Text, Button } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen({
  title,
  uri,
  overview,
  popularity,
  vote_average,
}) {
  return (
    <View>
      <Text>TV Shows</Text>
      <View>
        <Image source={{ uri: uri }} />

        <Text>{title}</Text>
        <View>
          {" "}
          <Text>{vote_average}</Text>
          <Text>{popularity}</Text>
        </View>
      </View>

      <View>
        <Text>Overview</Text>
        <Text>{overview}</Text>
      </View>

      <Button>Discover</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
