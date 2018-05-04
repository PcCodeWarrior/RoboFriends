/**
 * Created by tom on 3/2/2018.
 */
import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox  from '../components/SearchBox';
// import {robots} from './robots';  no longer using now getting data from a url
import Scroll from '../components/Scroll';
import './App.css'
import axios from 'axios';


class App extends Component {

    state = {
                 robots: [],
                 searchfield: ''
             };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
             .then(users => this.setState({robots: users.data}));

    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    };

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>(robot.name.toLowerCase().includes(searchfield.toLowerCase())));
        return !robots.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
    }
}

export default App;
