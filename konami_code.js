const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let codearray = [];

function init() {
  document.body.addEventListener('keydown', function(e) {
    for (let i = 0, l = code.length; i < l; i++) {
      codearray.push(e.which);

      if (codearray === code) {alert('Congratuations! You entered the Konami Code!')}
    }
  })

}