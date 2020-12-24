import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text, Root, Container, Item, Input, Card, CardItem } from 'native-base';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';



const Stack = createStackNavigator();


class HomeScreen extends Component{
  render(){
  return (
    <Root>
      <Container style={styles.container}>
      <Text>Dryden Picolo!</Text>
      </Container>
      <Container style={styles.button}>
      <Button onPress={() => this.props.navigation.navigate('TeamScreen')}>
          <Text>Start a new game!</Text>
        </Button>
      </Container>
    </Root>
  );
  }
}


class TeamScreen extends Component{
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: [],
      nameInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  }
  handleSubmit = (event) => {
    console.log(this.state.nameInput);
    this.setState({
      teamMembers:[...this.state.teamMembers, this.state.nameInput],
      nameInput: ''});
  }
  render(){
    const teamMembers = this.state.teamMembers.map((teamMember) => {
      return (
          <Text key={teamMember}>{teamMember}</Text>
      )
    })

    return (
        <Root>
        <Container style={styles.container}>
        <Text>Add your teammates!</Text>
        </Container>
        <Container style={styles.input}>
        { teamMembers }
        </Container>
        <Container style={styles.input}>
        <Item rounded>
        <Input placeholder='eg: Nemo Ma' value={this.state.nameInput} onChangeText={val => this.setState({ nameInput: val })}/>
        </Item>
        </Container>
        <Container style={styles.button}>
        <View>
        <Button onPress={this.handleSubmit}>
        <Text>Add teammate</Text>
        </Button>
        </View>
        <View>
        <Button onPress={() => this.props.navigation.navigate('ChooseGameScreen')}>
        <Text>Start Game</Text>
        </Button>
        </View>
        </Container>
        </Root>
    );
  }
}


class CardScreen extends Component{
  render(){
    return (
        <Root>
        <Container style={styles.container}>
        <View>
        <Card>
        <CardItem>
        <Text>This is the Task</Text>
        </CardItem>
        </Card>
        </View>
        <View>
        <Button onPress={() => this.props.navigation.navigate('CardScreen')}>
        <Text>Next Task</Text>
        </Button>
        </View>
        </Container>
        </Root>
    );
  }
}

class ChooseGameScreen extends Component{
  render(){
    return (
        <Root>
        <Container style={styles.container}>
        <Text>Choose Game Mode</Text>
        </Container>
        <Container style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('CardScreen')}>
        <Text>Regular</Text>
        </Button>
        </Container>
        <Container style={styles.button}>
        <Button onPress={() => this.props.navigation.navigate('CardScreen')}>
        <Text>Special Mode</Text>
        </Button>
        </Container>
        </Root>
    );
  }
}


export default function App() {
  return (
      <NavigationContainer theme={MyTheme}>
      <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={withNavigation(HomeScreen)} />
      <Stack.Screen name="TeamScreen" component={withNavigation(TeamScreen)} />
      <Stack.Screen name="ChooseGameScreen" component={withNavigation(ChooseGameScreen)} />
      <Stack.Screen name="CardScreen" component={withNavigation(CardScreen)} />
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 85)',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 20
  },
  button: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 10
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingBottom: 0
  }
});
