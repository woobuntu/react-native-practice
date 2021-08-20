import React from "react";
import { View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View>
        <TextInput
          placeholder="Course Goal"
          style={{ borderBottomColor: "black", borderWidth: 1, padding: 10 }}
        />
        <Button title="ADD" onPress={() => {}} />
      </View>
    </View>
  );
}
