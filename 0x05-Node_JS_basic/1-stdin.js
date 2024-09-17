process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const nameInput = process.stdin.read();

  if (nameInput) {
    process.stdout.write(`Your name is: ${nameInput}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
