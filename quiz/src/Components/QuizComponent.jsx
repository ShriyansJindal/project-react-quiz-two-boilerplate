import React from 'react'
import quiz from "../resources/quizQuestion"

export default class QuizComponent extends React.Component {
  constructor(){
    super()
    this.state={
      questions:quiz,
      current:0
    }
  }
  render() {
    let {questions,current} = this.state
    let handleNext =()=>{
      this.setState({current:current+1})
    }
    let handlePrev =()=>{
      this.setState({current:current-1})
    }
    let handleQuit =()=>{
      // alert("Are you sure you want to quit ?")
      let shouldQuit = window.confirm('Are you sure you want to quit?');
      if (shouldQuit) {
        window.close();
      }
    }
    return (
      <div className='container'>
        <div className="quiz-box">
        <h1>Question</h1>
        <p className='current-number'>{current+1} of 15</p>
        <h3 className='Questions'>{questions[current].question} </h3>
        <div className="options">
          <button>{questions[current].optionA}</button>
          <button>{questions[current].optionB}</button>
          <button>{questions[current].optionC}</button>
          <button>{questions[current].optionD}</button>

        </div>
        <div className="change-page">
          <button className='Previous'disabled={current==0} onClick={handlePrev} >Previous</button>
          <button className='next' onClick={handleNext} disabled={current==14}>Next</button>
          <button className='quit' onClick={handleQuit}>Quit</button>
        </div>
        </div>

        </div>
    )
  }
}
