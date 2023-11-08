import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import PositionLevel from "./PositionLevel";
import PictureLevel from "./PictureLevel";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import jwtDecode from "jwt-decode";
// import { UserType } from "../Constant/UserContext";
// import UsersComponent from "../Components/UsersComponent";

export default function ActivityScreen() {
  const [selectedButton, setSelectedButton] = useState("Position Level");
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
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Activity</Text>
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
              onPress={() => handleButtonclick("Position Level")}
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  borderWidth: 0.7,
                },

                selectedButton === "Position Level"
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

                  selectedButton === "Position Level"
                    ? { color: "white" }
                    : { color: "black" },
                ]}
              >
                Position Level
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonclick("Phoneme Level")}
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  borderWidth: 0.7,
                },

                selectedButton === "Phoneme Level"
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

                  selectedButton === "Phoneme Level"
                    ? { color: "white" }
                    : { color: "black" },
                ]}
              >
                Phoneme Level
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleButtonclick("Picture Level")}
              style={[
                {
                  flex: 1,
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  borderWidth: 0.7,
                },

                selectedButton === "Picture Level"
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

                  selectedButton === "Picture Level"
                    ? { color: "white" }
                    : { color: "black" },
                ]}
              >
                Picture Level
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {selectedButton === "Position Level" && (
              <View style={{ marginTop: 40 }}>
                <PositionLevel />
              </View>
            )}

            {selectedButton === "Picture Level" && (
              <View style={{ marginTop: 40 }}>
                <PictureLevel
                  name={"कमल"}
                  image={
                    "https://img.freepik.com/free-vector/realistic-bunch-lotus-flowers_1284-24651.jpg?w=740&t=st=1698581189~exp=1698581789~hmac=dcca925349562d1ee95d7f54d47196a63d13f4b7ec53b519b5d208ff3e33ffba"
                  }
                />
                <PictureLevel
                  name={"चम्मच"}
                  image={
                    "https://img.freepik.com/free-vector/sticker-spoon-kitchenware-white-background_1308-67037.jpg?w=826&t=st=1698582519~exp=1698583119~hmac=21b641a2150a0aecd66f5496bfaebb7c75601c300dfaf0baee05a81ddb6c9e82"
                  }
                />
                <PictureLevel
                  name={"छतरी"}
                  image={
                    "https://img.freepik.com/free-psd/weather-icon-element-isolated_23-2150364233.jpg?w=740&t=st=1698582576~exp=1698583176~hmac=495ad207e7ad85e7005550e10ed93eb3f4026a12e39fbe8400737b89358f61ff"
                  }
                />
                <PictureLevel
                  name={"टमाटर"}
                  image={
                    "https://img.freepik.com/free-vector/red-tomato-with-happy-face_1308-99743.jpg?w=740&t=st=1698582619~exp=1698583219~hmac=8ecc756697c3481ca457e9aa4ad864e497b54077280944090d560eaa1b7022cb"
                  }
                />
                <PictureLevel
                  name={"थन"}
                  image={
                    "https://img.freepik.com/free-vector/dairy-cow-sticking-tongue-out-cartoon-character_1308-99974.jpg?w=900&t=st=1698582684~exp=1698583284~hmac=768c998f730859bbb69cd3c31e1a1358f3bfbb198873ee04f71d0609f54a471c"
                  }
                />
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
