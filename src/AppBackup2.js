import React, {Component} from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {

    state = {
        persons: [
            {name: 'Fabio', age: 46},
            {name: 'Flavio', age: 42},
            {name: 'Este', age: 41}

        ],
        otherState: 'teste',
        showPersons: false

    }

    switchNameHandler = (newName) => {
        //console.log('click');
        //DON´T DO THIS: this.state.persons[0].name = 'Fabio Galante';

        this.setState({
            persons: [
                {name: newName, age: 46},
                {name: 'Flavio', age: 42},
                {name: 'Este', age: 41}
            ],

            otherState: 'teste2'
        })
    };

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        console.log(doesShow);
        this.setState({showPersons: !doesShow});
    }

    nameChangeHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Fabio Mans', age: 46},
                {name: event.target.value, age: 42},
                {name: 'Estela', age: 41}
            ],

            otherState: 'teste2'
        })

    }

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

                    <Person
                        click={this.switchNameHandler.bind(this, 'Galante')}
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}/>

                    <Person
                        changed={this.nameChangeHandler}
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}/>


                    <Person
                        changed={this.nameChangeHandler}
                        name={this.state.persons[2].name}
                        age={this.state.persons[2].age}/>

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
