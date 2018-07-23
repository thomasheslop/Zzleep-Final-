var calculate = document.querySelector('#SleepPlanButton');
var age = document.querySelector('#AgeDropdown');
var time = document.querySelector('#TimeSlept');
var result = document.querySelector('#result')
var hours;
var newtime;
var newtimehour;

calculate.addEventListener('click', e => {
    if(age.value == "0-5"){
        var hours = 13;
    }
    else if(age.value == "6-13"){
        var hours = 10;
    }
    else if(age.value == "14-17"){
        var hours = 8;
    }
    else if(age.value == "18+"){
        var hours = 6;
    }
    newtime = time.value.split(":")
    newtimehour = Number(newtime[0])
    newtimehour = newtimehour + hours
    if(newtimehour > 12){
        newtimehour = newtimehour - 12
        if (newtime[1] == "30AM"){newtime[1] = "30PM"}
        else if (newtime[1] == "30PM"){newtime[1] = "30AM"}
        else if (newtime[1] == "00AM"){newtime[1] = "00PM"}
        else if (newtime[1] == "00PM"){newtime[1] = "00AM"}
        if (newtimehour > 12){newtimehour = newtimehour - 12}
    }
    newtime[0] = newtimehour
    newtime[0] = String(newtime[0])
    newtime= newtime.join(":");

    result.innerHTML = `<div class = "innerHTML"> <p>Since you are in the age range of ${age.value}, 
    you need ${hours} hours of sleep from ${time.value} to ${newtime}.</p> </div>`
    
})

  document.addEventListener('DOMContentLoaded', function() {
      const options = {
          
      }
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });
