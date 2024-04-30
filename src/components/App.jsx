
import {useState} from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { Container } from "./App.styled";
import { Section } from './Section/Section';

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  const stateObj = {
    good: good,
    neutral: neutral,
    bad: bad
  }
  const onLeaveFeedback = el => {
        switch (el) {
          case 'good':
            setGood(prevState => prevState + 1);
            break;
          case 'neutral':
            setNeutral(prevState => prevState + 1);
            break;
          case 'bad':
            setBad(prevState => prevState + 1);
            break;
          default:
            return;
        }
    }; 

  const countTotalFeedback = good + neutral + bad;
  
  const countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);

  
  return (
    <div>
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(stateObj)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
          
        <Section>
          {countTotalFeedback
            ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
            : <Notification message="There is no feedback"></Notification>
          }
        
        </Section>
      
      </Container>
    </div>
  );
}
  
