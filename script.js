var verification = document.getElementById('button');
verification.addEventListener('click', verif);
function verif()
{
    var firstText = document.getElementById('firstText').value;
    var scndText = document.getElementById('scndText').value;
    var test = firstText.match(scndText);
    if(test == null) {
      document.getElementById('result').innerHTML = 'Lees deux textes sont différents.';
      document.getElementById('result').className = 'text-danger';
    } else {
      document.getElementById('result').innerHTML = 'Les deux textes sont similaires.';
      document.getElementById('result').className = 'text-success';
    }
}
