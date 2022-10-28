import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h1>Some Questions you should know:</h1> 
            <div>
            <div className='ques-part'>
<h2>How does React work?</h2>
<p>
React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.
</p>
            </div>
            <div className='ques-part'>
<h2>Difference between Props vs State:</h2>
<p>The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component.
    Props are read only and States changes can be asynchronous.
</p>
            </div>
            <div className='ques-part'>
<h2>function of useEffect: </h2>
<p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed, and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
    </div>
        </div>
    );
};

export default Question;