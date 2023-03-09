function sendMessage() {
    const request = new XMLHttpRequest();
    request.open("POST", "https://discordapp.com/api/webhooks/1083201311106932867/HmnLsV9wzB376hayBjEOysJ-Mzyx8IVj-Nah4AQIdkjw84WBaQ8RZpDnK747E-7v_aWM");

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "New Website Visitor!",
      avatar_url: "",
      content: "Someone new has explored the Bean Tag Webpage!"
    }

    request.send(JSON.stringify(params));
}

if(document.cookie = "HasVisited=true"){
   // User has visited.
}
else {
    sendMessage()
   document.cookie = "HasVisited=true"
}
