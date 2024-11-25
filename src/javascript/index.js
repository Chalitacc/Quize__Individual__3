const debug = true
const questions = ["who is harry", "who is not harry", "what house is harry in"];
const answers = [[
    "a wizard,1", "a human,0", "a dude,0"
],
[
    "hagrid,1", "ron,1", "hermine,1"
], 
[
    "gryfindor,1", "slyverin,0", "kebab house.0"
]]

if (debug){
    console.log(questions);
}
questions.map((question,index)=>{
    
    if (debug){
        console.log(question, index);
    }
    answers.map((answer,ai)=>{
        //her må jeg mappe answer for å få hvert answer, så ta en string split inn i answer array for å fortelle hva som er riktig ved at den targeter det tallet som vi har definert
        if(ai === index && debug){ console.log(answer);}

       
        
    })
    // return(
    //     <div>
    //         <label>
    //             <input type="radio"/>

                
    //         </label>
          
    //     </div>
    // )
})
