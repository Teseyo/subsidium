import React from 'react'
import { Steps, Button, message } from 'antd';
import './../css/App.css'

const { Step } = Steps;

const steps = [
  {
    title: 'Первый день',
    content: 'Открытие ',
    
  },
  {
    title: 'Второй день',
    content: 'Second-content',
  },
  {
    title: 'Третий день',
    content: 'Last-content',
  },
  {
    title: 'Четвертый день',
    content: 'Rofl-content',
  },
  {
    title: 'Пятый день',
    content: 'Rofl-content',
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current } = this.state;
    return (
      <div style={{margin:'100px'}}>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content" style={{margin:'10px'}}>{steps[current].content}</div>
        <div className="steps-action" style={{margin:'10px'}}>
          {/* {current < steps.length - 1 && (
            <Button type="primary" style={{backgroundColor:'light blue'}} onClick={() => this.next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
              Previous
            </Button>
          )} */}
        </div>
      </div>
    );
  }
}