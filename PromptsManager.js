import Interaction from "./Interaction.js";
import DalleInteraction from "./DalleInteraction.js";

class PromptsManager {
  interactions = [];

  // Abstraction
  showInteraction(i) {
    if (this.interactions.length < i) {
      console.log(`Prompt ${i} does not exist`);
    }
    else{
      this.interactions[i].show();
    }
  }

  showAllInteraction() {
    for(let interaction of this.interactions){
      interaction.show();
    }
  }

  //count and show how many interactions from ChatGPT and DALL-E and show them in console.log
  showTypeCount(){
    let countOfGPT = 0;
    let countOfDalle = 0;
    for(let interaction of this.interactions){
      if(interaction.returnType() === "ChatGPT"){
        countOfGPT++;
      }else{
        countOfDalle++;
      }
    }
    console.log(`The number of GPT interactions is ${countOfGPT}\nThe number of Dalle interactions is ${countOfDalle}`);
  }

  //record both kinds of interactions
  recordPrompt(prompt, response, url="") {
    if(url === ""){// is a normal interaction from chatGPT
      const newInteraction = new Interaction(prompt, response);
      this.interactions.push(newInteraction);
    }
    else{ // is a Dalle interaction
      const newInteraction = new DalleInteraction(prompt, response, url);
      this.interactions.push(newInteraction);
    }
  }
  /* 
  Comment: I like the way you write recordPrompt which combines addDalleInteraction and addInteraction into one concise method.
  The way I fulfill the requirement to add interactions is creating add dalle interaction and normal interaction separately.
  Perhaps you can inform users how to properly user this method to fulfill their different needs
  */
  
  //Design and implement a way for the user to remove Interactions that were added before.
  remove(i){
    if (this.interactions.length < i) {
      console.log(`Prompt ${i} does not exist`);
    }
    else{
      this.interactions.splice(i, 1); 
    }
  }
}

export default PromptsManager;
