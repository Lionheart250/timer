const durations = process.argv.slice(2);

for (const duration of durations) {
  const parsedDuration = parseInt(duration);

  if (!isNaN(parsedDuration) && parsedDuration >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07'); // Beep sound
    }, parsedDuration * 1000);
  }
}

