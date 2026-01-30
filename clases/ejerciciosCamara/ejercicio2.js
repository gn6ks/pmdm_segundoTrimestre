import { useState, useRef } from "react";
import { StyleSheet, Text, View, Button, Image, Pressable, ScrollView } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

export default function Ejercicio2() {
  const [permission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState("back");
  const [photos, setPhotos] = useState([]); // Array to store all photos
  const [showCamera, setShowCamera] = useState(true); // Toggle between Camera and Gallery

  const camera = useRef(null);

  const takePicture = async () => {
    if (camera.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const img = await camera.current.takePictureAsync(options);
        setPhotos((prev) => [...prev, img.uri]);
      } catch (error) {
        console.log("Error taking picture:", error);
      }
    }
  };

  if (!permission) return <View style={styles.container} />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We need your permission to show the camera</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );
  }

  // --- Stacked Gallery Mode ---
  if (!showCamera) {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {photos.map((uri, index) => (
            <Image key={index} source={{ uri: uri }} style={styles.stackedImage} />
          ))}
        </ScrollView>
        <View style={styles.previewButtons}>
          <Button title="Back to Camera" onPress={() => setShowCamera(true)} />
          <Button title="Clear All" color="red" onPress={() => setPhotos([])} />
        </View>
      </View>
    );
  }

  // --- Camera Mode ---
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} ref={camera} facing={type}>
        <View style={styles.controlsContainer}>
          
          <Pressable style={styles.flipButton} onPress={() => setType(type === "back" ? "front" : "back")}>
            <MaterialIcons name="flip-camera-android" size={32} color="white" />
          </Pressable>

          {/* Button to switch to Gallery */}
          {photos.length > 0 && (
            <Pressable style={styles.galleryButton} onPress={() => setShowCamera(false)}>
              <MaterialIcons name="photo-library" size={40} color="white" />
              <Text style={{color: 'white'}}>{photos.length}</Text>
            </Pressable>
          )}

          <Pressable onPress={takePicture} style={styles.shutterButton}>
            <MaterialIcons name="camera" size={80} color="white" />
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 100,
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  stackedImage: {
    width: 300,
    height: 400,
    marginBottom: 20, // This creates the "stacked" look
    borderRadius: 10,
    backgroundColor: '#333'
  },
  previewButtons: {
    padding: 20,
    backgroundColor: "white",
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  controlsContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },
  shutterButton: {
    marginBottom: 10,
  },
  flipButton: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  galleryButton: {
    position: "absolute",
    bottom: 50,
    left: 30,
    alignItems: 'center'
  }
});