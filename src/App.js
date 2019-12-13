import React from 'react';
import './App.css';

const data = [

  { id: 'Crickets', letter: 'A', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Crickets%20(Awkward%20Silence)%20-%20Gaming%20Sound%20Effect%20(HD).mp3' },
  
  { id: 'Drumroll', letter: 'S', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Drum%20Roll%20-%20Gaming%20Sound%20Effect%20(HD).mp3' },
  
  { id: 'Gibberish', letter: 'D', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Hu%20Waa%20Waa%20-%20Gaming%20Sound%20Effect%20(HD).mp3' },
   
  { id: 'Cant believe', letter: 'F', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/I%20can_t%20believe%20you%20done%20this%20Sound%20Effect.mp3' },
   
  { id: 'Law and Order', letter: 'G', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Law%20and%20Order%20Sound%20Effect.mp3' },
  
  { id: 'Nope', letter: 'H', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Nope%20(Construction%20Worker%20TF2)%20-%20Gaming%20Sound%20Effect%20(HD).mp3' },
   
  { id: 'Trombone', letter: 'J', src: 'https://raw.githubusercontent.com/Naiviv/drumkit/master/public/Sad%20Trombone%20-%20Gaming%20Sound%20Effect%20(HD).mp3' }
  
]

class DrumPad extends React.Component {
 
  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
 componentWillUnmount() {
   document.removeEventListener('keydown', this.handleKeydown)
 }
  
  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }
 
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  
  render() {
    return (
      <div 
          className='drum-pad' 
          id={this.props.id}
          onClick={this.handleClick}
      >
        <h1>{this.props.letter}</h1>
        <audio id={this.props.letter}
               className='clip'
               src={this.props.src}
               ref={ref => this.audio = ref}
          ></audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display: 'Click or Press a Key'
    }
  }
  
  handleDisplay = display => this.setState({ display })
  
  render(){
    return(
    <div id='drum-machine'>
        <div id='display'>{this.state.display}</div>
        
        <div id='drum-pads'>{data.map(d => (
          <DrumPad
            key={d.id}
            id={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />   
         ))}</div>
    </div>
    )
  }
}

// Run it
ReactDOM.render(
    <App/>,
    document.getElementById("app")
)


export default App;
