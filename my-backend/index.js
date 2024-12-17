const express = require('express');
const path = require('path');
const { exec } = require('child_process');
const app = express();
const port = process.env.PORT || 3000;

const runJar = (jarPath, res) => {
  const command = `javaw -jar "${jarPath}"`;
  console.log(`Executing command: ${command}`);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing JAR: ${error.message}`);
      return res.status(500).send(`Error executing JAR: ${error.message}`);
    }
    if (stderr) {
      console.error(`JAR stderr: ${stderr}`);
      return res.status(500).send(`JAR stderr: ${stderr}`);
    }
    console.log(`JAR stdout: ${stdout}`);
    res.send('JAR executed successfully');
  });
};

app.get('/run-jar1', (req, res) => {
  const jarPath = path.join(__dirname, 'jars/file1.jar');
  console.log(`Accessing JAR file at: ${jarPath}`);
  runJar(jarPath, res);
});

app.get('/run-jar3', (req, res) => {
  const jarPath = path.join(__dirname, 'jars/TuringMachine-1.0-SNAPSHOT-all.jar');
  console.log(`Accessing JAR file at: ${jarPath}`);
  runJar(jarPath, res);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});