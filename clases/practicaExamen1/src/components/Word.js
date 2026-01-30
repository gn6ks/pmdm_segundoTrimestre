import { Text, Pressable, StyleSheet } from 'react-native';

export default Word = (props) => {
  return (
    <Pressable style={styles.mark}>
      <Text onPress={props.play} style={styles.text}>
        Click to listen
      </Text>
      <Text onPress={props.back} style={styles.text}>
        {props.name}
      </Text>
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
