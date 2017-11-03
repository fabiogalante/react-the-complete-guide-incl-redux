import React, {Component} from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {

    state = {
        persons: [
            {id: '1', name: 'Fabio', age: 46},
            {id: '2', name: 'Flavio', age: 42},
            {id: '3', name: 'Este', age: 41}
        ],
        otherState: 'teste',
        showPersons: false
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        console.log(doesShow);
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        // const person = this.state.persons.find(x => x.id === id);
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        this.setState({persons: persons})
    };


    render() {
        // Inline style
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons === true) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangeHandler(event, person.id)}
                        />
                    })};
                </div>
            );
        }

        return (
            <div className="App">
                <button
                    style={style}
                    //onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name
                    //Passado por referência, sem parenteses
                    onClick={this.togglePersonHandler}>Toggle
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
