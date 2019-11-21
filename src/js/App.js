import Vue from "vue";

new Vue({
  el: "#app",
  data: {
    text: "Welcome "
  }
});

new Vue({
  el: "#list",
  data: {
    items: ["list item one", "list item two", "list item three"]
  }
});

new Vue({
  el: "#numList"
});

new Vue({
  el: "#typing",
  data() {
    return {
      message: "This is a good place to type"
    };
  }
});

new Vue({
  el: "#names",
  data: {
    checkedNames: []
  }
});

new Vue({
  el: "#namesExtened",
  data: {
    checkedNames: [],
    options: [
      { value: "Mark" },
      { value: "Peter" },
      { value: "Luke" },
      { value: "John" }
    ]
  }
});

new Vue({
  el: "#ifState",
  data: {
    typing: ""
  }
});

new Vue({
  el: "#showState",
  data: {
    typing: ""
  }
});

new Vue({
  el: "#ifElse",
  data: {
    tacos: ""
  }
});

new Vue({
  el: "#binding",
  data: {
    texting: ""
  }
});

new Vue({
  el: "#once",
  data: {
    breed: "Pitbull"
  }
});

new Vue({
  el: "#onClick",
  data() {
    return {
      counter: 0
    };
  }
});

new Vue({
  el: "#htmlOutput",
  data: {
    breed: "See my favourite breed <a href='/'>Here</a>"
  }
});

new Vue({
  el: "#vText",
  data: {
    breed: "My favourite breed of dog is a Boxer"
  }
});
