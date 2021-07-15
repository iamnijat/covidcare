/* Smooth SCrolling */





$(document).ready(function(){

    getUsaCovidStats();


  // Add smooth scrolling to all links

  $("a").on('click', function(event) {

    if (this.hash !== "") {
    
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    } 
  });
});



function getUsaCovidStats() {

  fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/225')
  .then(function(resp) { return resp.json() })
  .then(function(data) {

    let population = data.location.country_population;
    let update = data.location.last_updated;
    let confirmedCases = data.location.latest.confirmed;
    let deaths = data.location.latest.deaths;

    document.getElementById('usa-population').innerHTML = population.toLocaleString('en');
    document.getElementById('usa-update').innerHTML = update.substr(0, 10);
    document.getElementById('usa-cases').innerHTML = confirmedCases.toLocaleString('en');
    document.getElementById('usa-deaths').innerHTML = deaths.toLocaleString('en');
    document.getElementById('usa-percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




  })
  .catch(function() {
    console.log("error");
  })
  setTimeout(getUsaCovidStats, 43200000) // update every 12 hours


   fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/129')
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    
    let hunpopulation = data.location.country_population;
    let hunupdate = data.location.last_updated;
    let hunconfirmedCases = data.location.latest.confirmed;
    let hundeaths = data.location.latest.deaths;

    document.getElementById('hun-population').innerHTML = hunpopulation.toLocaleString('en');
    document.getElementById('hun-update').innerHTML = hunupdate.substr(0, 10);
    document.getElementById('hun-cases').innerHTML = hunconfirmedCases.toLocaleString('en');
    document.getElementById('hun-deaths').innerHTML = hundeaths.toLocaleString('en');
    document.getElementById('hun-percent').innerHTML = ((Number(hundeaths)/Number(hunconfirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




  })
  .catch(function() {
    console.log("error");
  })
  setTimeout(getUsaCovidStats, 43200000) // update every 12 hours



 fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/131')
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    
    let indpopulation = data.location.country_population;
    let indupdate = data.location.last_updated;
    let indconfirmedCases = data.location.latest.confirmed;
    let inddeaths = data.location.latest.deaths;

    document.getElementById('ind-population').innerHTML = indpopulation.toLocaleString('en');
    document.getElementById('ind-update').innerHTML = indupdate.substr(0, 10);
    document.getElementById('ind-cases').innerHTML = indconfirmedCases.toLocaleString('en');
    document.getElementById('ind-deaths').innerHTML = inddeaths.toLocaleString('en');
    document.getElementById('ind-percent').innerHTML = ((Number(inddeaths)/Number(indconfirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




  })
  .catch(function() {
    console.log("error");
  })
  setTimeout(getUsaCovidStats, 43200000) // update every 12 hours





 fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/133')
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    
    let irnpopulation = data.location.country_population;
    let irnupdate = data.location.last_updated;
    let irnconfirmedCases = data.location.latest.confirmed;
    let irndeaths = data.location.latest.deaths;

    document.getElementById('irn-population').innerHTML = irnpopulation.toLocaleString('en');
    document.getElementById('irn-update').innerHTML = irnupdate.substr(0, 10);
    document.getElementById('irn-cases').innerHTML = irnconfirmedCases.toLocaleString('en');
    document.getElementById('irn-deaths').innerHTML = irndeaths.toLocaleString('en');
    document.getElementById('irn-percent').innerHTML = ((Number(irndeaths)/Number(irnconfirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




  })
  .catch(function() {
    console.log("error");
  })
  setTimeout(getUsaCovidStats, 43200000) // update every 12 hours





 fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations/137')
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    
    let itlpopulation = data.location.country_population;
    let itlupdate = data.location.last_updated;
    let itlconfirmedCases = data.location.latest.confirmed;
    let itldeaths = data.location.latest.deaths;

    document.getElementById('itl-population').innerHTML = itlpopulation.toLocaleString('en');
    document.getElementById('itl-update').innerHTML = itlupdate.substr(0, 10);
    document.getElementById('itl-cases').innerHTML = itlconfirmedCases.toLocaleString('en');
    document.getElementById('itl-deaths').innerHTML = itldeaths.toLocaleString('en');
    document.getElementById('itl-percent').innerHTML = ((Number(itldeaths)/Number(itlconfirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";




  })
  .catch(function() {
    console.log("error");
  })
  setTimeout(getUsaCovidStats, 43200000) // update every 12 hours

}

/* Loading Animation */


 setTimeout(function(){


  $('.loader_bg').fadeToggle();
 }, 1300);