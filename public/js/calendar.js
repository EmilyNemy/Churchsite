$(document).ready(function() {

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        // put your options and callbacks here
        columnFormat: {
          month: 'ddd', 
          week: 'ddd dd/MM',
          day: 'dddd M/d'
        },
        events: 'https://www.google.com/calendar/feeds/churchchriscobugos%40gmail.com/public/basic',
            
    })
});
