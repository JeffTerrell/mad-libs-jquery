$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    inputs = $("input").toArray();
    outputs = $("span").toArray();

    let loopCount = 0;
    inputs.forEach(function(input) {
      outputs[loopCount].prepend(input.value);
      loopCount += 1;
    });
  });
});
    // const person1Input = $("input#person1").val();
    // const person2Input = $("input#person2").val();
    // const animalInput= $("input#animal").val();
    // const exclamationInput = $("input#exclamation").val();
    // const verbInput = $("input#verb").val();
    // const nounInput = $("input#noun").val();

    // $("person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);

    // const madArray = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

    // madArray.forEach(function(element) {
    //   let person1Input2 = element.text();
          // element = ".person1input2"
    //   let person2Input2 = $(person2Input).text();
    //   let animalInput2 = $(animalInput).text();
    //   let exclamation1Input2 = $(exclamationInput).text();
    //   let verbInput2 = $(verbInput).text();
    //   let nounInput2 = $(nounInput).text();
    // });

    // madArray.forEach(function(element) {
    //   story = story.concat( )

    // madArray.forEach(function(element) {
    //   $(".story1").prepend(element)
    // });

    // $("#story2").show();
    // $("#story2").text(madArray);
//   });
// });


/*

$("#formOne").submit(function(event) {
    inputs = $("input").toArray();
    outputs = $("span").toArray();

    let loopCount = 0;
    inputs.forEach(function(input) {
      outputs[loopCount].prepend(input.value);
      loopCount += 1;
    });

When form is submitted:
variable "inputs" = array of input values ----- inputs= [name, name2, food]
variable "outputs" = array of span values ----- outputs = [person1 ,person2 ,noun, person1]

variable "loopCount" set to 0

For each form input value:
    span value [0] . add input value at beginning
    add one to "loopCount"


array inputs= [a, b, c, d, e, f];
loopCount = 0;

inputs.forEach(function(element) {
  $(".output" + loopcount).text("<p>" + element + "</p>")
  loopCount += 1;
});


// Every time the function loops, assign it to a class that has a universal class name: ".output" and then 
concat that with the loop number. 

*/