import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    // Деструктуруємо text з пропсів
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: 'khaki' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem} // Додаємо стиль для натискання IOS
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        //padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: '#fff',
        padding: 8,
    },
});
