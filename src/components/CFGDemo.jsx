import React, { useState } from 'react';
import Navigation from './navigation';

function isPalindrome(string) {
  const cleanedString = string.replace(/\s+/g, '').toLowerCase(); // Remove spaces and make lowercase
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;
}

function PalindromeChecker({ onBack }) {
  const [inputStrings, setInputStrings] = useState('');
  const [results, setResults] = useState([]);

  const handleCheckStrings = () => {
    const strings = inputStrings
      .split('\n')
      .map((str) => str.trim())
      .filter((str) => str !== '');

    const output = strings.map((string) => ({
      string,
      isPalindrome: isPalindrome(string),
    }));

    setResults(output);
  };

  return (
    <div className="palindrome-checker">
      <div className='navigation-bar'>
      <Navigation onBack={onBack} />
      </div>

      <div className="palindrome-content">
        <h1>Context-Free Grammar Checker</h1>

        <div className="palindrome-input">
          <h2>Strings to Check</h2>
          <textarea
            value={inputStrings}
            onChange={(e) => setInputStrings(e.target.value)}
            rows={8}
            placeholder="Enter strings to check..."
          />
          <div className="controls">
            <button onClick={handleCheckStrings}>Check Strings</button>
          </div>
        </div>

        <div className="palindrome-output">
          <h2>RESULT</h2>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                {result.string} -{' '}
                <span style={{ color: result.isPalindrome ? '#00ff00' : '#ff0000' }}>
                  {result.isPalindrome ? 'ACCEPTED' : 'REJECTED'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PalindromeChecker;
