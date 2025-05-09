// import react from 'react';
// import reactDOM from 'react-dom/client';

function dateChanged() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
    document.getElementById('dayOfWeek').innerHTML = dayOfWeek;
}

dateChanged(); // Call the function to set the initial value