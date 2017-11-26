function init() {
  //put any page initialization/handlebars initialization here
  let form = Handlebars.compile(document.getElementById('recipe-form-template').innerHTML)

  document.getElementsByTagName('main')[0].innerHTML = form({'submitAction': 'createRecipe()'})
}

document.addEventListener("DOMContentLoaded", function(event) {
  init() 
})
