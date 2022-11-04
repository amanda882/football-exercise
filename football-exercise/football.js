// add the event listener for the onload event
window.onload = function () {
// create an array of football teams
let fTeam = [{code: 'DAL', name: 'Dallas Cowboys', plays: 'Arlington, TX'},
            {code: 'RAID', name: 'Oakland Raiders', plays: 'Tampa, FL'},
            {code: 'JETS', name: 'New York Jets', plays: 'Knoxville, TN'},
            {code: 'Dolphins', name: 'Miami Dolphines', plays: 'Denver, CO'}];

// declare the html elements that're needed
let selectMenu = document.getElementById('teams');
console.log(`the select menu is ${selectMenu}`);
let moreInfoBtn = document.getElementById('moreInfo');
console.log(moreInfoBtn);
}