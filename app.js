const dataURL = './data.json';

let work = document.getElementById('work');
let play = document.getElementById('play');
let study = document.getElementById('study');
let exercise = document.getElementById('exercise');
let social = document.getElementById('social');
let selfCare = document.getElementById('self-care');

// async await version
async function fetchData() {
  const res = await fetch(dataURL);
  const data = await res.json();
  // console.log(data);

    for(let i = 0; i < data.length; i++) {
      
      let title = data[i].title;

      // weekly values
      let weekly = data[i].timeframes.weekly;
      let thisWeek = weekly.current;
      let lastWeek = weekly.previous;

      const output = `<h3> ${title} </h3>
                      <p class='lg-text'> ${thisWeek}hrs </p>
                      <p class='sml-text'> Last week ${lastWeek}hrs </p>`;

        if(title == 'Work') work = work.innerHTML = output;
        else if(title == 'Play') play = play.innerHTML = output;
        else if(title == 'Study') study = study.innerHTML = output;
        else if(title == 'Exercise') exercise = exercise.innerHTML = output;
        else if(title == 'Social') social = social.innerHTML = output;
        else if(title == 'Self Care') selfCare = selfCare.innerHTML = output;
    } 
  }

fetchData();