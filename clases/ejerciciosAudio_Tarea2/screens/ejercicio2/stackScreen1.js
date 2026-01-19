import { View, TextInput, Button } from "react-native";
import { useState, useContext } from "react";
import Context from "../../context/context";

import { SelectList } from "react-native-dropdown-select-list";

export default function StackScreen1(props) {
  // EJERCICIO 3 -- Audios segun un TextInput
  // const { setAudio } = useContext(Context);
  // const [inputText, setInputText] = useState("");

  // const library = {
  //   audio1: require("../../audio/audio.mp3"),
  //   audio2: require("../../audio/audio2.mp3"),
  // };

  // const loadAudio = () => {
  //   const key = inputText.toLowerCase().trim();
  //   const selectedAudio = library[key];

  //   if (selectedAudio) {
  //     setAudio(selectedAudio);
  //     props.navigation.navigate("StackScreen2");
  //   } else {
  //     alert("Audio no encontrado. Escribe 'audio1' o 'audio2'");
  //   }
  // };

  //  return (
  //   <View style={{ padding: 50 }}>
  //     <TextInput
  //       placeholder="Escribe 'audio1' o 'audio2'..."
  //       onChangeText={(text) => setInputText(text)}
  //       value={inputText}
  //       style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
  //     />
  //     <Button title="Cargar y Navegar" onPress={loadAudio} />
  //   </View>
  // );

  // EJERCICIO 4 -- Seleccionar audios segun aparecen en un componente SelectList que muestra las opciones
  const { setAudio } = useContext(Context);
  const [selected, setSelected] = useState("");

  const audioLibrary = {
    audio1: require("../../audio/audio.mp3"),
    audio2: require("../../audio/audio2.mp3"),
  };

  const audioOptions = [
    { key: "audio1", value: "Audio 1" },
    { key: "audio2", value: "Audio 2" },
  ];

  const loadAudio = () => {
    const selectedAudio = audioLibrary[selected];

    if (selectedAudio) {
      setAudio(selectedAudio);
      props.navigation.navigate("StackScreen2");
    } else {
      alert("Selecciona un audio");
    }
  };

  return (
    <View style={{ padding: 50 }}>
      <SelectList
        data={audioOptions}
        setSelected={setSelected}
        save="key"
        searchPlaceholder="Buscar audio"
      />

      <Button title="Cargar y Navegar" onPress={loadAudio} />
    </View>
  );
}
