import { View, Button } from "react-native";
import { Audio } from "expo-av";
import { useState } from "react";

export default function Ejercicio2() {
  const [recording, setRecording] = useState(null); // grabación actual
  const [recordings, setRecordings] = useState([]); // array de URIs
  const [currentIndex, setCurrentIndex] = useState(0); // índice actual
  const [lastUri, setLastUri] = useState(null); // para guardar la ultima grabacion

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY,
      );

      setRecording(recording);
    } catch (err) {
      console.error(err);
    }
  }

  // si no hay audio en marcha no hace nada, si hay lo para se guarda el uri y recording pasa a null
  async function stopRecording() {
    if (!recording) return;

    await recording.stopAndUnloadAsync();
    setLastUri(recording.getURI());
    setRecording(null);
  }

  // se hace un push de lastUri y el indice se actualiza
  function saveRecording() {
    if (!lastUri) return;

    setRecordings((prev) => [...prev, lastUri]);
    setCurrentIndex(recordings.length);
  }

  // poner el indice de carrousel al siguiente numero disponible de % entre los que haya
  function nextAudio() {
    if (recordings.length === 0) return;

    const next = (currentIndex + 1) % recordings.length;
    setCurrentIndex(next);
  }

  // poner el indice de carrousel al anterior numero disponible % de entre los que haya
  function prevAudio() {
    if (recordings.length === 0) return;

    const prev = (currentIndex - 1 + recordings.length) % recordings.length;
    setCurrentIndex(prev);
  }

  // se hace un playAsync de la biblioteca de recordings con el currentIndex
  async function playRecording() {
    if (recordings.length === 0) return;

    const { sound } = await Audio.Sound.createAsync({
      uri: recordings[currentIndex],
    });

    await sound.playAsync();
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {recording ? (
        <Button title="Stop recording" onPress={stopRecording} />
      ) : (
        <Button title="Start recording" onPress={startRecording} />
      )}

      <Button title="save recording" onPress={saveRecording} />
      <Button title="Play recording" onPress={playRecording} />
      <Button title="Anterior" onPress={prevAudio} />
      <Button title="Siguiente" onPress={nextAudio} />
    </View>
  );
}
