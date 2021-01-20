

class App extends React.Component {

    state = {
        score: 0,
        category: '',
        points: 0,
        clue: '',
        answer: '',
        qCount: 0,
        isRevealed: false

    }


    getQuestion = () => {
           //retrieves info from url as a string
           this.state.score
           fetch('http://jservice.io/api/random')
               // .then(function that relies on fetch)
               .then((response) => {
                   return response.json();
               }) //retrieves the info from the json object
               .then((json) => {
                   // json[0] is the object we are targetting
                   console.log(json[0]);
                   const data = json[0];
                  // adds the question and add to question count
                   this.setState({
                       qCount: this.state.qCount + 1,
                       category: data.category.title,
                       points: data.value,
                       clue: data.question,
                       answer: data.answer
                   })
               })
       }


       // decreases the score by the point value of the question
       Decrease = () => {
           this.setState({
               score: this.state.score - this.state.points,
           })
       }

       // increases the score by the point value of the question
       Increase = () => {
           this.setState({
               score: this.state.score + this.state.points,
           })
       }
       // reset entire app and question count
       Reset = () => {
           this.setState({
             score: 0,
             category: '',
             points: 0,
             clue: '',
             answer: '',
             qCount: 0,
             isRevealed: false
           })
       }
       // reveals the answer by changing isRevealed to true
       returnAnswer = () => {
           this.setState({
               isRevealed: !this.state.isRevealed,
           })
       }


    render() {
        return (
            <div class = 'main'>
                <h1>Welcome to Jeopardy</h1><br/>
                <h2 id = "score">Score : {this.state.score}</h2>

                  {/* buttons only work if the the question and value is visible */}
                    <button
                        id = 'decrease'
                        onClick={this.Decrease}
                    >Decrease</button>
                    <button
                        id = 'increase'
                        onClick={this.Increase}
                    >Increase</button>
                    <button
                        id = 'reset'
                        onClick={this.Reset}
                    >Reset</button>

                    <br/><br/>
                    <h1>Let's Play</h1><br/>
                    <button
                        id='question'
                        onClick={this.getQuestion}
                    >Question</button>
                    <h2> Question #: {this.state.qCount} </h2>
                    <h2> Category: {this.state.category} </h2>
                    <h3> Points: {this.state.points} </h3>
                    <h3> Clue: {this.state.clue} </h3>

                    <button
                        id="answer"
                        onClick={this.returnAnswer}>
                     Click to Reveal Answer </button>
                    {this.state.isRevealed ? <h3> Answer: {this.state.answer} </h3> : ''}

            </div>
        )
    }
}



ReactDOM.render(
    <App />,
    document.querySelector('.container')
)
