import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import PositionLevel from "./PositionLevel";
import PictureLevel from "./PictureLevel";
import ChatbotScreen from "./ChatbotScreen";
import OpencvMonitoring from "./OpencvMonitoring";
export default function AssisstantScreen() {
  const [selectedButton, setSelectedButton] = useState("ChatBot");
  const [users, setUsers] = useState([]);
  // const { userId, setUserId } = useContext(UserType);
  const handleButtonclick = (tabname) => {
    setSelectedButton(tabname);
  };

  // useEffect(() => {
  //   const fetchusers = async () => {
  //     const token = await AsyncStorage.getItem("authToken");
  //     const decodeToken = jwtDecode(token);
  //     const userId = decodeToken.userId;

  //     setUserId(userId);
  //     axios
  //       .get(`http://192.168.43.191:5000/user/${userId}`)
  //       .then((response) => {
  //         setUsers(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   fetchusers();
  // }, [users]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 20, marginTop: 20 }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Assisstant</Text>
          <View
            style={{
              marginTop: 20,
              gap: 15,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              onPress={() => handleButtonclick("ChatBot")}
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  borderWidth: 0.7,
                },

                selectedButton === "ChatBot"
                  ? { backgroundColor: "dodgerblue" }
                  : null,
              ]}
            >
              <Text
                style={[
                  {
                    textAlign: "center",
                    fontWeight: "bold",
                  },

                  selectedButton === "ChatBot"
                    ? { color: "white" }
                    : { color: "black" },
                ]}
              >
                Chat Bot
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleButtonclick("Ai Monitoring")}
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  borderWidth: 0.7,
                },

                selectedButton === "Ai Monitoring"
                  ? { backgroundColor: "dodgerblue" }
                  : null,
              ]}
            >
              <Text
                style={[
                  {
                    textAlign: "center",
                    fontWeight: "bold",
                  },

                  selectedButton === "Ai Monitoring"
                    ? { color: "white" }
                    : { color: "black" },
                ]}
              >
                Ai Monitoring
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedButton === "ChatBot" && (
              <View style={{ marginTop: 40 }}>
                <ChatbotScreen />
              </View>
            )}

            {selectedButton === "Ai Monitoring" && (
              <View style={{ marginTop: 40 }}>
                <OpencvMonitoring />
              </View>
            )}
          </ScrollView>
        </View>
      </ScrollView>
      <StatusBar
        animated
        translucent
        networkActivityIndicatorVisible
        style="dark"
      />
    </SafeAreaView>
  );
}
