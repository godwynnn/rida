import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
import Index from './src'
import { registerRootComponent } from 'expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { PaperProvider } from 'react-native-paper';


export default function App() {
  return (



    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <PaperProvider>

          
          <Index />
        
          </PaperProvider>

        </Provider>
      </BottomSheetModalProvider>

    </GestureHandlerRootView>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

registerRootComponent(App)