import Interaction from "./Interaction.js"
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

  recordPrompt(prompt, response, url="") {
    if(url === ""){
      const newInteraction = new Interaction(prompt, response);
      this.interactions.push(newInteraction);
    }
    else{
      const newInteraction = new DalleInteraction(prompt, response, url);
      this.interactions.push(newInteraction);
    }
  }

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
