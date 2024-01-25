import Interaction from "./Interaction.js";

//* Add a class DalleInteraction that allows the system to keep records of 
// ChatGPT prompts which are based on text prompt with an image. 
// This one should inherit from Interaction, and should also record the url 
// of the image returned. It should have a constructor method, one for showing 
// its contents and one for returning what type of interaction it is

//Add methods to your PublicationManager class to addDalleInteraction
class DalleInteraction extends Interaction {
    constructor(prompt, response, url){
        super(prompt,response);
        this.url = url;
    }

    show(){
        console.log(`******Dalle Prompt: ${this.prompt} has response: ${this.response}, and the url is ${this.url}\n`);
    }

    returnType(){
        return "Dalle";
    }
}

export default DalleInteraction;