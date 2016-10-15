var masc ;
var fem ;
var inf ;
var teen ;
var primeiroP;

window.onload = function(){
  masc = document.getElementById('mascu');
  fem = document.getElementById('fem');
  inf = document.getElementById('inf');
  teen = document.getElementById('ten');
  primeiroP = document.getElementById('pp');
}


function ShowMasc() {
  masc.style.display= 'block';
  fem.style.display= 'none';
  inf.style.display= 'none';
  teen.style.display= 'none';
  primeiroP.style.display= 'none';
}

function ShowFemi() {
  masc.style.display= 'none';
  fem.style.display= 'block';
  inf.style.display= 'none';
  teen.style.display= 'none';
  primeiroP.style.display= 'none';
}

function ShowInfi() {
  masc.style.display= 'none';
  fem.style.display= 'none';
  inf.style.display= 'block';
  teen.style.display= 'none';
  primeiroP.style.display= 'none';
}

function ShowTeen() {
  masc.style.display= 'none';
  fem.style.display= 'none';
  inf.style.display= 'none';
  teen.style.display= 'block';
  primeiroP.style.display= 'none';
}

function ShowPP() {
  masc.style.display= 'none';
  fem.style.display= 'none';
  inf.style.display= 'none';
  teen.style.display= 'none';
  primeiroP.style.display= 'block';
  console.log(primeiroP);
}

function HideAll()
{
  masc.style.display= 'none';
  fem.style.display= 'none';
  inf.style.display= 'none';
  teen.style.display= 'none';
  primeiroP.style.display= 'none';
}

function AddClass(obj,style) {
  obj.classList.add(style);
  obj.classList.remove('colorBlack');
}

function RemoveClass(obj,style) {
  obj.classList.remove(style);
  obj.classList.add('colorBlack');
}
