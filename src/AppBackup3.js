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


    metodoSlice = () => {

        var myFish = ["angel", "clown", "mandarin", "surgeon"];

        //remove 0 elementos a partir do índice 2, e insere "drum"
        var removed = myFish.splice(2, 0, "drum");
        //myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
        //removed é [], nenhum elemento removido

        //remove 1 elemento do índice 3
        removed = myFish.splice(3, 1);
        //myFish é ["angel", "clown", "drum", "surgeon"]
        //removed é ["mandarim"]

        //remove 1 elemento a partir do índice 2, e insere "trumpet"
        removed = myFish.splice(2, 1, "trumpet");
        //myFish é ["angel", "clown", "trumpet", "surgeon"]
        //removed é ["drum"]

        //remove 2 elementos a partir do índice 0, e insere "parrot", "anemone" e "blue"
        removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
        //myFish é ["parrot", "anemone", "blue", "trumpet", "surgeon"]
        //removed é ["angel", "clown"]

        //remove 2 elementos a partir do indice 3
        removed = myFish.splice(3, Number.MAX_VALUE);
        //myFish é ["parrot", "anemone", "blue"]
        //removed é ["trumpet", "surgeon"]

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
    deletePersonHandler = (personIndex) => {

        const persons = this.state.persons;
        persons.splice(personIndex, 1);
        this.setState({persons: persons});

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
                        />

                    })}

                    {/*<Person*/}
                    {/*click={this.switchNameHandler.bind(this, 'Galante')}*/}
                    {/*name={this.state.persons[0].name}*/}
                    {/*age={this.state.persons[0].age}/>*/}

                    {/*<Person*/}
                    {/*changed={this.nameChangeHandler}*/}
                    {/*name={this.state.persons[1].name}*/}
                    {/*age={this.state.persons[1].age}/>*/}


                    {/*<Person*/}
                    {/*changed={this.nameChangeHandler}*/}
                    {/*name={this.state.persons[2].name}*/}
                    {/*age={this.state.persons[2].age}/>*/}

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
