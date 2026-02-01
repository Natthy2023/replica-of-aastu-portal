function updateDate() {
    const now = new Date();

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    document.getElementById('dateDisplay').textContent =
      now.toLocaleDateString('en-US', options);
  }
dateDisplay
  // Initial display
  updateDate();

  // Update exactly at midnight
  function scheduleMidnightUpdate() {
    const now = new Date();
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0, 0
    );

    const msUntilMidnight = nextMidnight - now;

    setTimeout(() => {
      updateDate();
      setInterval(updateDate, 24 * 60 * 60 * 1000); // every 24 hours
    }, msUntilMidnight);
  }

  scheduleMidnightUpdate();

