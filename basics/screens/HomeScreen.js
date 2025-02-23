import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/logo.jpg")} style={styles.logo} />
        <Text style={styles.companyName}>the baya company</Text>
        <TouchableOpacity>
          <Image source={require("../assets/bell.png")} style={styles.bellIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Timeline")}>
          <Icon name="timeline" size={30} color="green" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Timeline</Text>
          <Text style={styles.cardSubtitle}>The Baya Victoria</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Projects")}>
          <Icon name="work" size={30} color="violet" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Projects</Text>
          <Text style={styles.cardSubtitle}>5 Projects</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ScheduleVisit")}>
          <Icon name="event" size={30} color="orange" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Schedule a Visit</Text>
          <Text style={styles.cardSubtitle}>Choose Time To Visit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Profile")}>
          <Icon name="person" size={30} color="purple" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardSubtitle}>Edit Your Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Settings")}>
          <Icon name="settings" size={30} color="red" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>Settings</Text>
          <Text style={styles.cardSubtitle}>Select Your Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("History")}>
          <Icon name="history" size={30} color="grey" style={styles.cardIcon} />
          <Text style={styles.cardTitle}>History</Text>
          <Text style={styles.cardSubtitle}>Your Recent Work</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  companyName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkgreen",
    flex: 1,
    marginLeft: 10,
  },
  bellIcon: {
    width: 45,
    height: 45,
    resizeMode: "contain",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    width: "48%",
    padding: 35,
    height: 175,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  cardIcon: {
    marginBottom: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});

export default HomeScreen;
