// Copyright (c) 2020 Mr. Coxall All rights reserved
// Created by: Niko
// Created on: march 2022
// This file contains the JS functions for index.html

"use strict"

// function to calculate pay
function calculatePay() {
  // declaring variable for hours worked with value set as value inputed by user 
  let hours = document.getElementById("hours").value
  
  // declaring variable for wage with value set as value inputed by user 
  let wage = document.getElementById("wage").value
  
  // calculates result by multiplying the inputed wage and hours together to get total pay
  let result = wage * hours;
  document.getElementById("user-info").innerHTML = "your pay is $" + result.toFixed(2);
  
  // takes total pay before taxes applied and calculates how much is taxed 
  let taxedResult = parseInt(result) * 0.2005;
  document.getElementById("taxed").innerHTML = "The government takes " + taxedResult.toFixed(2) + "$";
  
  // takes total pay before taxes applied and subtracts the taxed amount to get net pay
  let netPay = parseInt(result) - parseInt(taxedResult)
  document.getElementById("netPay"). innerHTML = "Your net pay is " + netPay.toFixed(2) + "$";
}
