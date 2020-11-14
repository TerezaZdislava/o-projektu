import React from 'react';
import './App.css';
import { Formik } from 'formik';

const questions = [
  {
    question: 'Co je dnes za den?',
    choices: [
      { option: 'A', answer: 'Pondeli' },
      { option: 'B', answer: 'Ctrvtek' },
    ],
  },
  {
    question: 'Jaky je mesic',
    choices: [
      { option: 'A', answer: 'leden' },
      { option: 'B', answer: 'listopad' },
    ],
  },
];

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  userSelection(length) {
    const initialValues = [];
    for (let i = 0; i < length; i++) {
      initialValues.push({ question: i, answer: '' });
    }

    return initialValues;
  }

  componentDidMount() {
    // Fetch all the questions and set state
    this.setState({ questions });
  }

  render() {
    const { questions } = this.state;
    const userSelection = { answers: this.userSelection(questions.length) };
    console.log(userSelection);

    return (
      <Formik enableReinitialize={true} initialValues={userSelection}>
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            {questions.map((q, index) => (
              <div className="card" key={index}>
                {/* <div className="card-header">Hádej</div> */}
                <div className="card-body">
                  <h6 className="card-title">{q.question}</h6>
                  <div className="question-choices px-2">
                    {q.choices.map((choice) => (
                      <div className="form-check" key={choice.option}>
                        <input
                          type="radio"
                          id={choice.option}
                          className="form-check-input"
                          name={`answers[${index}].answer`}
                          value={choice.option}
                          checked={
                            values.answers && values.answers[index]
                              ? values.answers[index].answer === choice.option
                              : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label
                          className="form-check-label clickable"
                          htmlFor={choice.option}
                        >
                          <span className="mr-2">{choice.option} )</span>{' '}
                          {choice.answer}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              onClick={() => {
                const odpovedi = ['B', 'A'];
                let vysledek = 0;
                for (let i = 0; i < odpovedi.length; i++) {
                  if (values.answers[i].answer === odpovedi[i]) {
                    vysledek++;
                  }
                }
                console.log(vysledek);
                alert('Získali jste celkem ' + vysledek + ' bodů 🎉');
              }}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    );
  }
}

function App() {
  return (
    <div>
      <Questions />
    </div>
  );
}

export default App;

// zdroje kodu:
// https://formik.org/docs/overview
// https://codesandbox.io/s/gifted-brown-xemxi?file=/src/App.js:2405-2429
