import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() }, // Використовуйте id замість key
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    value={enteredGoalText}
                    onChangeText={goalInputHandler}
                />
                <Button title='Add Goal' onPress={addGoalHandler} />
            </View>

            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item) => item.id} // Використовуємо id
                    renderItem={(itemData) => (
                        <GoalItem text={itemData.item.text} />
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
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
    goalsContainer: {
        flex: 5,
    },
});

/////////////////
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
///////////////////////////
// import React from 'react';
// import { Text, View } from 'react-native';

// export default function App() {
//     return (
//         <View
//             style={{
//                 padding: 50,
//                 flexDirection: 'row',
//                 width: '80%',
//                 height: 300,
//                 justifyContent: 'space-around',
//                 alignItems: 'center',
//             }}
//         >
//             <
//                 style={{
//                     backgroundColor: 'red',
//                     flex: 2,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: 50,
//                     height: 250,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Text>1</Text>
//             </>
//             <View
//                 style={{
//                     backgroundColor: 'blue',
//                     flex: 2,
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: 50,
//                 }}
//             >
//                 <Text>2</Text>
//             </View>
//             <View
//                 style={{
//                     backgroundColor: 'green',

//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     width: 50,
//                 }}
//             >
//                 <Text>3</Text>
//             </View>
//         </View>
//     );
// }
