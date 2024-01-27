import PromptsManager from "./PromptsManager.js";

const myPromptManager = new PromptsManager();
  
myPromptManager.recordPrompt(
  "What coding paradigm is ES?",
  "ES can refer to different coding paradigms depending on the context. In the context of web development, ES often stands for ECMAScript, which is a scripting language specification that JavaScript follows. ECMAScript supports multiple programming paradigms."
);

myPromptManager.recordPrompt(
  "Aren't you forgetting a very important one?",
  "I apologize if I missed mentioning a specific coding paradigm. Please clarify which paradigm you are referring to, and I'll be happy to provide information about it."
);

myPromptManager.recordPrompt(
  "What is imperative programming?",
  "Imperative programming is a programming paradigm that uses statements that change a program's state. In imperative programming, the focus is on describing how a program operates."
);

myPromptManager.recordPrompt(
  "Give me a picture of a puppy",
  "OK, this is the puppy image",
  "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg"
);
  
myPromptManager.showAllInteraction();
myPromptManager.showTypeCount();
myPromptManager.remove(1);
console.log("removed interaction 1");
myPromptManager.showTypeCount();
myPromptManager.showAllInteraction();