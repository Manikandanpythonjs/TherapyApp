import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LettersContainer from "../Components/LettersContainer";
export default function HindiLettersAndWords() {
  const consonants = [
    "क (ka)",
    "ख (kha)",
    "ग (ga)",
    "घ (gha)",
    "ङ (nga)",
    "च (cha)",
    "छ (chha)",
    "ज (ja)",
    "झ (jha)",
    "ञ (nya)",
    "ट (ṭa)",
    "ठ (ṭha)",
    "ड (ḍa)",
    "ढ (ḍha)",
    "ण (ṇa)",
    "त (ta)",
    "थ (tha)",
    "द (da)",
    "ध (dha)",
    "न (na)",
    "प (pa)",
    "फ (pha)",
    "ब (ba)",
    "भ (bha)",
    "म (ma)",
    "य (ya)",
    "र (ra)",
    "ल (la)",
    "व (va)",
    "श (sha)",
    "ष (ṣa)",
    "स (sa)",
    "ह (ha)",
    "क्ष (kṣa)",
    "त्र (tra)",
    "ज्ञ (gya)",
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 25, fontWeight: "600" }}>Learning</Text>
          <View style={{ alignItems: "center" }}>
            <Image
              style={{ width: "100%", height: 300, resizeMode: "contain" }}
              source={{
                uri: "https://img.freepik.com/free-vector/hindi-alphabets-frame-hindi-diwas-event-day-vector_1017-45768.jpg?w=740&t=st=1698568643~exp=1698569243~hmac=7f286881f3f5ccce2a288a5d1c94570b7f145a993e178de71d9186be211ff918",
              }}
            />
          </View>

          <View>
            <Text style={{ marginBottom: 5, fontSize: 25, fontWeight: "bold" }}>
              ध्वनि के साथ हिंदी अक्षर
            </Text>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 30,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              स्वर
            </Text>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <LettersContainer letter={"ॠ (rī)"} />
                <LettersContainer letter={"ए (e)"} />
                <LettersContainer letter={"ऐ (ai)"} />
                <LettersContainer letter={"ओ (o)"} />
                <LettersContainer letter={"औ (au)"} />
                <LettersContainer letter={"अं (am)"} />
              </View>
            </ScrollView>
            <View style={{ marginTop: 20 }} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <LettersContainer letter={"अ  (a)"} />
                <LettersContainer letter={"आ (aa)"} />
                <LettersContainer letter={"इ  (i)"} />
                <LettersContainer letter={"ई (ii)"} />
                <LettersContainer letter={"उ (u)"} />
                <LettersContainer letter={"ऊ (uu)"} />
                <LettersContainer letter={"ऋ (ri)"} />
              </View>
            </ScrollView>
            <Text
              style={{
                marginLeft: 10,
                fontSize: 30,
                fontWeight: "600",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              व्यंजन
            </Text>

            <View style={{ flexDirection: "row", gap: 25, flexWrap: "wrap" }}>
              {consonants.map((consonant, index) => (
                <LettersContainer key={index} letter={consonant} />
              ))}
            </View>

            {/* क (ka) */}
            {/* ख (kha)
ग (ga)
घ (gha)
ङ (nga)
च (cha)
छ (chha)
ज (ja)
झ (jha)
ञ (nya)
ट (ṭa)
ठ (ṭha)
ड (ḍa)
ढ (ḍha)
ण (ṇa)
त (ta)
थ (tha)
द (da)
ध (dha)
न (na)
प (pa)
फ (pha)
ब (ba)
भ (bha)
म (ma)
य (ya)
र (ra)
ल (la)
व (va)
श (sha)
ष (ṣa)
स (sa)
ह (ha)
क्ष (kṣa) - Used for foreign words and compound words.
त्र (tra) - Used for foreign words and compound words.
ज्ञ (gya) - Used for foreign words and compound words. */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
