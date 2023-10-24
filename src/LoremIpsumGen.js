import { LoremIpsum } from 'lorem-ipsum';

export const getData = ({ name, value }) => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  let res = '';

  switch (name) {
    case 'paragraphs':
      let response = lorem.generateParagraphs(parseInt(value)).split('\n');
      return response;

    case 'sentencesPerParagraph':
      return [lorem.generateSentences(parseInt(value))];

    case 'wordsPerSentence':
      return [lorem.generateWords(parseInt(value))];

    default:
      return [];
  }
};
