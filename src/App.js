import {useState} from 'react';
import { ColoredText } from './components/colored-text';
import './App.css';
import 'animate.css';

import { TodoPriority } from './components/priority';
import { TextInput } from './components/text-input';
import { TextBox } from './components/text-box';
import Button from './components/button';
import { HttpView } from './components/http-view';

function App() {
  const [testComponent, setTestComponent] = useState('ColoredText');
  const [showButtonData, setShowButtonData] = useState(false);
  const [showHttpView, setShowHttpView] = useState(false);
  const onOptionChanged = e => {
    setTestComponent(e.target.value);
  };
  let exampleComponent = null;
  switch(testComponent){
    case 'ColoredText':
      exampleComponent = <ColoredText/>;
      break;
    case 'TodoPriority':
      exampleComponent = <TodoPriority/>;
      break;
    case 'TextInput':
      exampleComponent = <TextInput isValid={true} isRecommended={true}/>;
      break;
    case 'TextBox':
      exampleComponent = <TextBox mode="info">
        <p>Here is some nested content</p>
      </TextBox>;
      break;
  }
  const buttonClicked = () => {
    setShowButtonData(!showButtonData);
  };
  const toggleView = () => {
    setShowHttpView(!showHttpView);
  };
  return (
    <div className="App">
      <header className="App-header">
      
        <Button onClick={toggleView}>Toggle View</Button>
        {showHttpView ? 
        <HttpView/>
        :<>
          <Button onClick={buttonClicked}>Hey, a button!</Button>
          {showButtonData && <p>Button clicked.</p>}

          <h2 className='animate__animated animate__bounce'>Example components</h2>
          <div>
            <input type="radio" name="examples" value="ColoredText" id="ColoredText" onChange={onOptionChanged} checked={testComponent === 'ColoredText'} />
            <label style={{marginLeft: '25px'}} htmlFor="regular">Colored Text</label>
          </div>
          <div>
            <input type="radio" name="examples" value="TodoPriority" id="TodoPriority" onChange={onOptionChanged} checked={testComponent === 'TodoPriority'} />
            <label style={{marginLeft: '25px'}} htmlFor="regular">Todo Priority</label>
          </div>
          <div>
            <input type="radio" name="examples" value="TextInput" id="TextInput" onChange={onOptionChanged} checked={testComponent === 'TextInput'} />
            <label style={{marginLeft: '25px'}} htmlFor="regular">Text Input</label>
          </div>
          <div>
            <input type="radio" name="examples" value="TextBox" id="TextBox" onChange={onOptionChanged} checked={testComponent === 'TextBox'} />
            <label style={{marginLeft: '25px'}} htmlFor="regular">Text Box</label>
          </div>
          {exampleComponent}
        </>}
      </header>
    </div>
  );
}

export default App;
