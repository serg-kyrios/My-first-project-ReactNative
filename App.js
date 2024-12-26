import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }
    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
        console.log('Delete goal');
    }

    return (
        <View style={styles.appContainer}>
            <Button
                title='Add New Goal'
                color='#a065ec'
                onPress={startAddGoalHandler}
            />
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => (
                        <GoalItem
                            text={itemData.item.text}
                            onDeleteItem={deleteGoalHandler}
                        />
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
