import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { Storage } from './class.js';
// front end
$(document).ready(function(){
  $("#inputs").submit(function(event){
    event.preventDefault();
    let age = $("input#ageInput").val();
    let expectancy = $("input#lifeInput").val();
    let calculator = new Storage(age, expectancy);
    calculator.addAge(age);
    calculator.addExpectancy(expectancy);
    calculator.mercuryExpectancyBeatenCheck();
    calculator.venusExpectancyBeatenCheck();
    calculator.marsExpectancyBeatenCheck();
    calculator.jupiterExpectancyBeatenCheck();
    $("div.results").show();
    $("span#mercuryAge").text(""+ calculator.mercuryAge + " years");
    $("span#venusAge").text(""+ calculator.venusAge + " years");
    $("span#marsAge").text(""+ calculator.marsAge + " years");
    $("span#jupiterAge").text(""+ calculator.jupiterAge + " years");
    $("span#mercuryExpectancy").text(""+ calculator.mercuryExpectancy + " years");
    $("span#venusExpectancy").text(""+ calculator.venusExpectancy + " years");
    $("span#marsExpectancy").text(""+ calculator.marsExpectancy + " years");
    $("span#jupiterExpectancy").text(""+ calculator.jupiterExpectancy + " years");
    $(".planetaryBeatenResults").show();
    $("p#mercuryExceedsExpectations").text(calculator.mercuryBeaten);
    $("p#venusExceedsExpectations").text(calculator.venusBeaten);
    $("p#marsExceedsExpectations").text(calculator.marsBeaten);
    $("p#jupiterExceedsExpectations").text(calculator.jupiterBeaten);
    console.log(age);
    console.log(expectancy);
  });
});
