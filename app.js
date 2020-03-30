$(document).ready(function () {
   //console.log('Funcionando!');
  //formas de trabajar con jquery acortando codigo
  // $('h1').html('Se cambio el texto de la etiqueta h1');
 //  $('.display-4').html('esta es una clase');
 //  $('#texto').html('esto era un lorem');
//formas de trabajar con js
 //document.querySelector('h1').innerHTML='etiqueta h1';
// document.querySelector('.display-4').innerHTML='clase';
 //document.querySelector('#texto').innerHTML='Lorem';

$('.container h1').html('Hola mundo xD');
$('.container h1:first').html('excelente');
$('.container h1:last').html('siguiente texto :p');

$('#texto').addClass('text-danger'); //
$('.container h1:last').addClass('text-center'); pone una clase
$('#texto').removeClass('display-4');//quita una clase

$('#contenedor').append('<h3>este contenido fue agregado con jquery al final</h3>'); //append agrega contenido al final
$('#contenedor').prepend('<h2>este contenido fue agregado con jquery al principio</h2>'); //prepend agrega contenido posicionandolo al principio

$('.color-blue').css('color', 'blue'); //agregar una clase css a un elemento
$('.color-blue').css({color: 'blue', background:'salmon', padding:'20px'}); //agrega varia clases a un elemento

//$('.color-blue').remove(); quita la clase de la pagina y en el codigo
$('.color-blue').hide(); quita la clase en la pagina pero sigue estando en el codigo
 
//attr edita atributos de un elemento
     $('img').attr('src', '234.jpg');

    //Edita los atributos del ultimo elemento
     $('img:last').attr("width","100");

   

});