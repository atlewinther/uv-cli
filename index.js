#!/usr/bin/env node

const admin = require('firebase-admin');
const inquirer = require('inquirer');
const serviceAccount = require('./path/to/your/serviceAccountKey.json'); // Sti til din Firebase serviceAccountKey.json-fil

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<dit-firebase-projekt-id>.firebaseio.com' // Erstat med din Firestore-database-URL
});

const db = admin.firestore();

const questions = [
  {
    type: 'list',
    name: 'choice',
    message: 'Vælg en funktion:',
    choices: ['Start tidtager', 'Gem note med dato', 'Oversigt over links', 'Oversigt over Blender short-cuts', 'Afslut']
  }
];

function startTimer() {
  // Implementer din tidtagerfunktionalitet her
}

function saveNoteWithDate() {
  // Implementer funktionen til at gemme noter med dato i Firestore-databasen
}

function showLinksOverview() {
  // Implementer funktionen til at vise oversigt over links
}

function showBlenderShortcuts() {
  // Implementer funktionen til at vise oversigt over Blender short-cuts
}

async function main() {
  while (true) {
    const answers = await inquirer.prompt(questions);
    const choice = answers.choice;

    switch (choice) {
      case 'Start tidtager':
        startTimer();
        break;
      case 'Gem note med dato':
        saveNoteWithDate();
        break;
      case 'Oversigt over links':
        showLinksOverview();
        break;
      case 'Oversigt over Blender short-cuts':
        showBlenderShortcuts();
        break;
      case 'Afslut':
        process.exit();
        break;
      default:
        console.log('Ugyldig valg. Prøv igen.');
    }
  }
}

main();
