import React from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withNavigation } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';

const AppHeader = (props) => {
    return(
        <SafeAreaProvider>
            <Header 
              backgroundColor = '#5C96B6'
              
              centerComponent = {{
                  text: props.title,
                  style: { fontFamily: 'big caslon', textAlign: 'center', fontSize: 30, padding: 5 }
              }}
              
              leftComponent = { <Icon 
                                  name = 'bars'
                                  type = 'font-awesome'
                                  color = '#696969'
                                  style = {{ paddingLeft: 15, paddingTop: 10}}
                                  onPress = {()=>{
                                      props.navigation.dispatch(DrawerActions.toggleDrawer());
                                  }} /> } />
        </SafeAreaProvider>
    )
}

export default withNavigation(AppHeader);