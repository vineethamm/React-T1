import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const updateWordCount = (inputText) => {
    const words = inputText.trim().split(/\s+/);
    const filteredWords = words.filter(word => word !== ''); // Remove empty strings
    setWordCount(filteredWords.length);
  }

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateWordCount(newText);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
      <div style={{ marginTop: '1vh' }}>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          rows="8"
          cols="70"
          value={text}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default WordCounter;
