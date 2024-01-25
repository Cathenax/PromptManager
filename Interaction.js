class Interaction  {
  prompt = "";
  response = "";

  constructor(prompt,response){
    this.prompt = prompt;
    this.response = response;
  }

  show(){
    console.log(`******Prompt: ${this.prompt} has response: ${this.response}\n`)
  }

  //return the type of the interaction
  returnType(){
    return "ChatGPT";
  }
}

export default Interaction;