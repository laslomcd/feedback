import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Header from './components/Header';
import FeedBackItem from './components/FeedbackItem'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'



function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>

  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string
}

export default App;
