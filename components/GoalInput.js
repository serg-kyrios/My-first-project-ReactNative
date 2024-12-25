import { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    // Обробник зміни тексту
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    // Обробник додавання мети
    function addGoalHandler() {
        if (enteredGoalText.trim().length === 0) return; // Перевірка на порожній текст
        props.onAddGoal(enteredGoalText); // Передача тексту до батьківського компонента
        setEnteredGoalText(''); // Очищення текстового поля
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your course goal!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    );
}
export default GoalInput;

const styles = StyleSheet.create({
    goalsContainer: {
        flex: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
    },
});
