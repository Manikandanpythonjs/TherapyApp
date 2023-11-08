import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
export default function ChatbotScreen() {
  return (
    <View>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?w=740&t=st=1698583828~exp=1698584428~hmac=35c7963633aff95c7f5fb72afc4f22e230b32e1e0b63bb32ac50feb433022666",
        }}
        style={{
          width: "100%",
          height: 300,
          resizeMode: "contain",
          marginTop: -50,
        }}
      />

      <View
        style={{
          marginTop: -50,
          backgroundColor: "#9CEFC8",
          paddingHorizontal: 10,
          paddingVertical: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: "#333",
            fontWeight: "600",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          अपनी समस्या से संबंधित कुछ भी पूछें। एक शक्तिशाली आवाज सहायक
        </Text>
      </View>
      <View style={{ marginTop: 230, justifyContent: "center" }}>
        <Entypo
          style={{
            width: "100%",
            textAlign: "center",
          }}
          name="mic"
          size={50}
          color="dodgerblue"
        />
      </View>
    </View>
  );
}
