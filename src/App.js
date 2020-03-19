import React, { Component } from 'react';
import './App.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newItem: '',
			list: []
		};
	}

	// (1)
	updateInput = value => {
		this.setState({
			newItem: value
		});
	};

	// (2)
	addItem = () => {
		if (this.state.newItem === '') {
			alert('Please add Item');
			return;
		} else {
			const newItem = {
				id: Date.now(),
				value: this.state.newItem
			};
			const list = [...this.state.list];
			list.push(newItem);
			this.setState({
				list: list,
				newItem: ''
			});
		}
	};

	// (3)
	deleteItem = id => {
		const list = [...this.state.list];
		const listFiltered = list.filter(e => e.id !== id);
		this.setState({
			list: listFiltered
		});
	};

	render() {
		return (
			<div className='App'>
				<div className='type'>
					<h1 className='type--title'>All Task</h1>
					<div className='type--inputs'>
						<input
							type='text'
							placeholder='Type item here...'
							value={this.state.newItem}
							onChange={e => this.updateInput(e.target.value)}
						/>
						<button onClick={this.addItem}>Add</button>
					</div>
				</div>
				<div className='list'>
					<ul>
						{this.state.list.map(e => {
							return (
								<div className='list--item' key={e.id}>
									<li>{e.value}</li>
									<button
										onClick={() => this.deleteItem(e.id)}
									>
										X
									</button>
								</div>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
