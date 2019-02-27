// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElementpts = d3.select("#points-input");
  var inputElementrbs = d3.select("#rbs-input");
  var inputElementast = d3.select("#ast-input");
  var inputElementstl = d3.select("#stl-input");
  var inputElementblk = d3.select("#blk-input");
  var inputElementpct = d3.select("#pct-input");

  // Get the value property of the input element
  var inputValue1 = inputElementpts.property("value");
  var inputValue2 = inputElementrbs.property("value");
  var inputValue3 = inputElementast.property("value");
  var inputValue4 = inputElementstl.property("value");
  var inputValue5 = inputElementblk.property("value");
  var inputValue6 = inputElementpct.property("value");

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text("$")
  d3.select("h1>span").text(417585.78203292 + inputValue1*502623.63545748 + inputValue2*654196.59871454 + inputValue3*493675.14812515 + inputValue4*-675848.19863109 + inputValue5*229811.73247546 + inputValue6*317614.64459739);
});
