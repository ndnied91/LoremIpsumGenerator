import { useState } from 'react';
import { getData } from './LoremIpsumGen';

const App = () => {
  const initialState = {
    paragraphs: {
      name: 'paragraphs',
      max: 100,
      min: 1,
      value: 1,
    },

    wordsPerSentence: {
      name: 'wordsPerSentence',
      max: 16,
      min: 4,
      value: 4,
    },

    sentencesPerParagraph: {
      name: 'sentencesPerParagraph',
      max: 8,
      min: 4,
      value: 4,
    },
  };

  const [data, setData] = useState([]);
  const [selection, setSelection] = useState(initialState.paragraphs);

  const handleSelectChange = (e) => {
    setSelection(initialState[e.target.value]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(getData(selection));
  };

  const handleChange = (e) => {
    selection.value = e.target.value;
    setSelection({ ...selection });
  };

  const formatNames = (name) => {
    switch (name) {
      case 'paragraphs':
        return 'Paragraphs';

      case 'sentencesPerParagraph':
        return 'Sentences Per Paragraph';

      case 'wordsPerSentence':
        return 'Words Per Sentence';

      default:
        return [];
    }
  };

  return (
    <section className="container">
      <h3>Lorem Ipsum Generator</h3>

      <form className="lorem-form" onSubmit={handleSubmit}>
        <section className="options">
          <div className="section-container">
            <label htmlFor="selection">Pick format:</label>

            <select
              onChange={handleSelectChange}
              name="selectMenu"
              className="dropdown"
            >
              <option name="selection" value={'paragraphs'}>
                Paragraphs
              </option>
              <option
                name="sentencesPerParagraph"
                value={'sentencesPerParagraph'}
              >
                Sentences Per Paragraph
              </option>
              <option name="wordsPerSentence" value={'wordsPerSentence'}>
                Words Per Sentence
              </option>
            </select>
          </div>
          <div className="section-container">
            <label htmlFor="amount">{formatNames(selection.name)}</label>
            <input
              type="number"
              className="form-input"
              min={selection.min}
              max={selection.max}
              id={selection.name}
              name={selection.name}
              value={selection.value}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </section>

        <button className="btn" type="submit">
          {' '}
          Generate{' '}
        </button>
      </form>

      {/* render the data */}
      {data.length > 0 ? (
        <article className="lorem-text">
          {data.map((i, index) => {
            return (
              <div className="item" key={index}>
                {' '}
                {i}
              </div>
            );
          })}
        </article>
      ) : null}
    </section>
  );
};
export default App;
