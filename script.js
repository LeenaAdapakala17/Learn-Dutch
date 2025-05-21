const words = [
  { en: 'Hello', nl: 'Hallo' },
  { en: 'Good Morning', nl: 'Goedemorgen' },
  { en: 'How are you', nl: 'Hoe gaat het met je?' },
  { en: 'I am doing good, Thanks!', nl: 'Het gaat goed met mij, dank je!' },
  { en: 'Yes', nl: 'Ja' },
  { en: 'No', nl: 'Nee' },
  { en: 'Please', nl: 'Alsjeblieft (when asking for something)' },
  { en: 'Food', nl: 'Eten' },
  { en: 'Goodbye', nl: 'Tot ziens / Dag' }
];

const wordList = document.getElementById('wordList');

function speak(text, lang) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  speechSynthesis.speak(utterance);
}

function renderWords() {
  wordList.innerHTML = '';
  words.forEach(word => {
    const item = document.createElement('div');
    item.className = 'word-item';
    item.innerHTML = `
      <span>
        ${word.en}
        <button onclick="speak('${word.en}', 'en-US')" title="Hear English">🔊</button>
      </span>
      <span>
        ${word.nl}
        <button onclick="speak(\`${word.nl}\`, 'nl-NL')" title="Hear Dutch">🔊</button>
      </span>
    `;
    wordList.appendChild(item);
  });
}

renderWords();