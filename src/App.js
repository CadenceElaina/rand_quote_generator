import React from 'react';
import './App.css';
import axios from 'axios';
class App extends React.Component {
    state = {
        advice: ''
    };

    componentDidMount() {
        this.fetchAdvice();
        console.log("COMPONENT DID MOUNT");
    }

    fetchAdvice = () => {
        axios.get('	https://api.adviceslip.com/advice')
            .then((response) => {
                //console.log(response.data.slip.advice);
                //Destructure
                const { advice } = response.data.slip;
                const { id } = response.data.slip;
                console.log(advice);
                //this.setState({ advice: advice})
                this.setState({ advice });
                this.setState({ id });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        const { advice } = this.state;
        const { id } = this.state;
        return (
            /*    <h1>{advice}</h1> */
            <div className="app">
                <div className='card'>
                    <h1 className='heading'>"{advice}" <br></br>- ID: {id} </h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>
                            GIVE ME ADVICE!
                        </span>
                    </button>
                    <footer>from <a href='https://api.adviceslip.com/'>https://api.adviceslip.com/</a></footer>
                </div>

            </div>
        )
    }
}

export default App;