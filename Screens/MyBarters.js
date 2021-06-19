import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

import AppHeader from '../components/AppHeader';

export default class MyBarters extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      allBarters: [],
      userId: firebase.auth().currentUser.email
    }

    this.requestRef = null;
  }


  getAllBarters = () => {
    this.requestRef = db.collection('all_barters')
    .where('reciprocated_by','==',this.state.userId)
    .onSnapshot( (snapshot)=>{
      var allBarters = snapshot.docs.map( (document)=> document.data() )
      this.setState({
        allBarters: allBarters
      })
    })
  }


  componentDidMount(){
    this.getAllBarters();
  }


  componentWillUnmount(){
    this.requestRef();
  }


  keyExtractor = (item, index) => index.toString();


  renderItem = ({i, item}) => {
    return(
        <ListItem key = {i} bottomDivider >
          <ListItem.Content>

            <View style = {styles.container}>

              <View style = {styles.leftElement}> 
                <Icon name = 'address-card' type = 'font-awesome' color = '#696969'/>
              </View>

              <View>
                <ListItem.Title style = {styles.title}>{item.object_name}</ListItem.Title>
          
                <ListItem.Subtitle style = {{ fontFamily: 'big caslon' }}>
                  { "Initiated By: " + item.initiated_by + "\nStatus: " + item.request_status }
                </ListItem.Subtitle>
              </View>

            </View>

            <View style = {styles.rightElement}>
                <TouchableOpacity style = {styles.button}>
                   <Text style = {{ fontFamily: 'big caslon', color: '#FFF' }}>BARTER</Text>
                </TouchableOpacity>
            </View>

          </ListItem.Content>
        </ListItem>
    )
  }


  render(){
    return(
      <View>
        <AppHeader title = "My Barters" />

        <View>
          {
            this.state.allBarters === 0 ?
            (
              <View>
                <Text>List of All Barters</Text>
              </View>
            ) 
            : (
              <FlatList 
                keyExtractor = {this.keyExtractor}
                data = {this.state.allBarters}
                renderItem = {this.renderItem}
              />
            )
          }
        </View>

      </View>
    )
  }

}


const styles = StyleSheet.create({

  container: {
    flex: 2,
    flexDirection: 'row'
  },

  title: {
    fontFamily: 'big caslon',
    fontSize: 18,
    fontWeight: 'bold'
  },

  leftElement: {
    marginTop: 10,
    marginRight: 20
  },

  button: {
    backgroundColor: '#B8897E',
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 10,
    marginLeft: 44
  }

})