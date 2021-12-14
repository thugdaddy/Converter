import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedbackBase,
} from "react-native";

export default function App() {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [textbox, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://helios-i.mashable.com/imagery/articles/00apgKgIAO4EnFfjOgCApRe/hero-image.fill.size_1248x702.v1619086604.jpg",
        }}
        style={{ width: 300, height: 200 }}
      />
      <Text style={styles.jkl}>1.00 USD = 4.65 DOGE</Text>
      <StatusBar style="auto" />
      <SafeAreaView>
        <TextInput
          style={styles.input}
          placeholder="USD"
          onChangeText={(textbox) => setText(textbox)}
          value={textbox}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={textbox * 4.65}
          placeholder="DOGE"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffabab",
    alignItems: "center",
    justifyContent: "center",
  },
  jkl: {
    fontSize: 23,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
