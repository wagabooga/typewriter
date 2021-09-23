// Our goal is to animate the sentence, 
// revealing one character at a time. 
// This would make it look as though it is being typed in by someone, as shown in the GIF above.

const sentence = "hello there from lighthouse labs";

function asd (sentence){
  let offset = 50
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i])
    }, offset * i) 
  }
  let addNL = offset * sentence.length
  setTimeout(() => {
  console.log()
  },addNL)
}

asd(sentence)