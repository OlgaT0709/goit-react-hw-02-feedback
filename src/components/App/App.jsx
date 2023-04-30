import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Container } from './App.styled';
import data from '../../data/data.json';

import {FeedbackOptions} from '../FeedbackOptions';
import {Statistics} from '../Statistics';
import {Notification } from '../Notification';
import {Section} from '../Section';

export class App extends Component {

  static defaultProps = {
    initialGood: Number(data.initialGood),
    initialNeutral: Number(data.initialNeutral),
    initialBad: Number(data.initialBad),
  };

 
  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
              
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  }

  onClickBtn = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

 countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const totalFeedback = good + bad + neutral;

    return totalFeedback;
  }
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentage = Math.round((good * 100) / this.countTotalFeedback());

    return positiveFeedbackPercentage;
  }


  render() {
    console.log(this.constructor.defaultProps);
    const { good, bad, neutral } = this.state;
    
    return (
      <Container>
        <Section title="Please, leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onClickBtn} />      
        </Section> 

        
        {this.countTotalFeedback() ? ( 
          <>
            <Section title="Statistics">
              <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />
            </Section>  
          </>) : (
          <Notification message="There is no feedback" />
          )
        }
      </Container>
    );
  }
}


