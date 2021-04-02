if (window.location.href.match(/dictionary/g)) {

var punjabiWords = [
  //A
  { name: "anti", value: "antagonist" },
  //B
  //C
  //D
  //E
  //F
  //G
  { name: "gajde", value: "to thunder" },
  { name: "ghandasa", value: "old school weapon" },
  //H
  //I
  //J
  { name: "jaikara", value: "a courageous shout" },
  //K
  { name: "kaum", value: "collective of people" },
  //L
  //M
  //N
  //O
  //P
  //Q
  //R
  //S
  //T
  //U
  //V
  { name: "vairi", value: "" },
  { name: "velly", value: "" },
  //X
  //Y
  //Z
];

// decided to go with object over map for storing key-value pairs, since it's easier to access 'name' and 'value' as global properties within the punjabiWords object array

/* var punjabiWords= new .map();
         
        punjabiWords.set('anti', '');
        punjabiWords.set('gajde', '');
        punjabiWords.set('vairi', '');
        punjabiWords.set('velly', '');
        punjabiWords.set('jaikara', '')
  
  ]; */

var searchInput = document.querySelector("#search-input");

// stored #search-input into var searchInput to make it easier to call

const suggestionsPanel = document.querySelector("#suggestions");

//created const suggestionsPanel and stored #suggestions so we can create new <div>s inside containing the values of our key-value object pair

searchInput.addEventListener("keyup", () => {
  suggestionsPanel.classList.add("display-suggestions-panel");
  suggestionsPanel.innerHTML = "";
  const input = searchInput.value;

  //set suggestionsPanel to be empty initially, so we can fill it up with words dynamically, as users type

  const suggestions = punjabiWords.filter((punjabiWord) => {
    console.log(punjabiWord);

    return punjabiWord.name.toLowerCase().startsWith(input);
  });

  // created a punjabiWords object array filter here that returns a punjabiWord (our parameter) which matches input (noting that it's storing searchInput.value)

  suggestions.forEach((suggested) => {
    const div = document.createElement("div");
    div.classList.add("pbw");

    const spanName = document.createElement("span");
    spanName.innerHTML = suggested.name;
    spanName.classList.add("spanName");

    const spanValue = document.createElement("span");
    spanValue.innerHTML = suggested.value;
    spanValue.classList.add("spanValue");

    const spanSpace = document.createElement("span");
    spanSpace.classList.add("spanSpace");
    spanSpace.innerHTML = ": ";

    div.appendChild(spanName);
    div.appendChild(spanSpace);
    div.appendChild(spanValue);

    //needed to be able to style punjabiWords object name and value separately, so separating them into individual spans helped achieve this

    spanValue.style.cssText = "font-size: 12px;";
    suggestionsPanel.appendChild(div);
  });

  // for every suggestion derived from punjabiWords object, we create a div and store the name in there, and append it to suggestionsPanel

  if (input == "") {
    suggestionsPanel.innerHTML = "";
  }

  // put an if statement at the end here to keep suggestionsPanel empty if the search box reverts back to being empty AFTER user has inputted characters
});

var displayDefinitionBox = document.getElementById("definition-box");

document.addEventListener("click", (suggestionClick) => {
  if (suggestionClick.target.classList == "spanName") {
    searchInput.value = suggestionClick.target.innerHTML;
    suggestionsPanel.classList.remove("display-suggestions-panel");
    displayDefinitionBox.classList.add("definition-box-display");
  }
});

// when a user clicks spanName it'll auto-complete the search box with the value of the spanName; one issue is that, because we split suggested.name and suggested.value into separate spans, the user must click spanName to enable this function

document.addEventListener("keyup", () => {
  const inputTwo = searchInput.value;

  if (inputTwo == "") {
    displayDefinitionBox.classList.remove("definition-box-display");
  }
});

const informationBox = document.getElementById("information-box");

document.addEventListener("click", function (informationHover) {
  if (informationHover.target.classList == "information") {
    informationBox.classList.add("display-information-box");
  } else {
    informationBox.classList.remove("display-information-box");
  }
});
}
/*document.addEventListener("mouseout", function (informationExit) {
  if (informationExit.target.classList == "information") {
    informationBox.classList.remove("display-information-box");
  }
});
*/
