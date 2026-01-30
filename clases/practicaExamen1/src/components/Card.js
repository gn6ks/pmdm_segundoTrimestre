import { Text, Pressable, StyleSheet } from 'react-native';

export default Card = (props) => {
  return (
    <Pressable style={styles.mark} onPress={props.onCharacters}>
      <Text style={styles.text}>{props.episode}</Text>
      <Text style={styles.text}>{props.airDate}</Text>
      <Text style={styles.text}>{props.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  mark: {
    borderColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
});
