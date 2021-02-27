var age
var height

age = 15
height = 5

if(age<8){
    console.log("Check out the merry-go-round")
}
else if (age>=8 && age<65 && height>4.5){
    console.log("Check out the Roller coaster")
}
else{
    console.log("Enjoy the lazy river")
}





var noun 
var verb 
var adjective

noun = ['student', 'professor', 'mother', 'brother', 'friend']
adjective = ['skinny', 'tall', 'elegant', 'smart', 'lazy']
verb = ['jumps', 'reads', 'sleeps', 'eats', 'drinks']





var sentence 

//concatenation
// sentence = "My " + noun + ' leaps ' + adjective + ' when I ' + verb + 'a rainbow in the sky'"




var ranNoun = noun[Math.floor(Math.random()*noun.length)]
var ranVerb = verb[Math.floor(Math.random()*verb.length)]
var ranAdjective = adjective[Math.floor(Math.random()*adjective.length)]

sentence = `My ${ranNoun} leaps ${ranAdjective}  when he  ${ranVerb} a rainbow in the sky.`

console.log(sentence)
alert(sentence)