# CS5010 Homework1
#### OOP Coding——Siyuan Liu

#### This code contains classes below:
<ul>
    <li>Interaction: use for recording the interaction(prompt and response from ChatGPT)</li>
    <li>DalleInteraction: inherit from Interaction, use for recording the interaction(prompt, response and image url from DALL-E; for now I just mock the response and url)</li>
    <li>PromptManager: contains all the ChatGPT and DALL-E interactions</li>
</ul>

#### What's unique about my code:<br>
`Interaction.returnType()` and `DalleInteraction.returnType()` returns the type of the interaction, String value of "ChatGPT" or "Dalle"<br>
`PromptsManager.showTypeCount()`count and show how many interactions from ChatGPT and DALL-E and show them in console.log 

#### Run node main.js to see how them works
