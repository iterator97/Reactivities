import React from "react";
import axios from "axios";
import { Header, Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
class App extends React.Component {
    state = {
        values: []
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/values')
            .then(response =>{
                console.log(response);
                this.setState({
                    values: response.data
                })
            })
    }

    render() {
        return(
            <div>
                <Header as='h2'>
                    <Icon name='users' />
                    <Header.Content>Reactivity</Header.Content>
                </Header>
                <List>
                    {this.state.values.map((value: any)=>(
                <List.Item key={value.name}>{value.name}</List.Item>
            ))}
                </List>
            </div>
        )
    }
}

export  default App;