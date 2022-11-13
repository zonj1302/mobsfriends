import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';



class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [],
			searchfield: ''
		}
	}

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => this.setState({ monsters: users}));
}


	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})	
	}

	render () {
		const { monsters, searchfield } = this.state;
		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchfield.toLowerCase());
		})
			 return !monsters.length ? <h1>Loading</h1> :
			 (
				<div className='tc'>
					<h1 className='f1'>mobsFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList monsters={filteredMonsters}/>
					</Scroll>	
				</div>	
			);
		}	
	}


export default App;