// /**
//  * name: main-navigator.tsx
//  * desc: This file contains the main stack navigator.
//  */

// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { WelcomeScreen } from 'screens';
// import { BottomTabs } from '..';

// /**
//  * type checking.
//  */
// export type InitialRouteName = 'Welcome' | 'App';

// /**
//  * create stack navigator instance.
//  */
// const MainStack = createStackNavigator();

// /**
//  * A function component that shows the main stack navigator.
//  */
// function MainStackNavigator({ initialRouteName }: { initialRouteName: InitialRouteName }) {
//     return (
//         <MainStack.Navigator
//             initialRouteName={initialRouteName}
//             headerMode='none'
//         >
//             <MainStack.Screen
//                 name={'Auth'}
//                 component={WelcomeScreen}
//             />

//             <MainStack.Screen
//                 name={'App'}
//                 component={BottomTabs}
//             />
//         </MainStack.Navigator>
//     );
// };

// /**
//  * export as default.
//  */
// export default MainStackNavigator;