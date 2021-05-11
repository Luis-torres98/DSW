(function() {
    "use strict";

    var regalo = document.getElementById('regalo');

    document.addEventListener('DOMContentLoaded', function() {

        

        if(document.getElementById('mapa')){
            var map = L.map('mapa').setView([-12.000382, -77.054754], 16);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
            
            L.marker([-12.000382, -77.054754]).addTo(map)
                .bindPopup('¡Estamos Aquí!')
                .openPopup();
            
        }
     

        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');


        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdia');
        var pase_completo = document.getElementById('pase_completo');


        //Botones y dives 
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_producto = document.getElementById('lista-productos');
        var suma = document.getElementById('suma-total')

        //Extras
        var camisas = document.getElementById('camisa_evento');
        var etiqueta = document.getElementById('etiquetas');


        if (document.getElementById('calcular')  ) {
            
        
        calcular.addEventListener('click', calcularMontos);
        pase_dia.addEventListener('blur', mostrarDias);
        pase_dosdias.addEventListener('blur', mostrarDias);
        pase_completo.addEventListener('blur', mostrarDias);

        nombre.addEventListener('blur', validarCampos);
        apellido.addEventListener('blur',validarCampos);
        email.addEventListener('blur',validarCampos); 
        email.addEventListener('blur', validarMail);

        function validarMail() {
            if (this.value.indexOf("@") > -1) {
                errorDiv.style.display = 'none'
            }else{
                errorDiv.style.display='block';
                errorDiv.innerHTML='¡Correo invalido!';
                errorDiv.style.color='red';
            }
        }
        function validarCampos() {
            if (this.value=='') {
                errorDiv.style.display='block';
                errorDiv.innerHTML='Este campo es obligatorio';
                errorDiv.style.color='red';
            }else if (this.value!='') {
                errorDiv.style.display='none';
            }
        
        }


        function calcularMontos(event){
            event.preventDefault();
            if(regalo.value === ''){
                alert("Debes elegir un regalo");
                regalo.focus();
            }else{
               var boletosDia =parseInt( pase_dia.value, 10) || 0,
                   boleto2Dias =parseInt( pase_dosdias.value,10) || 0,
                   boletaCompleto =parseInt( pase_completo.value,10) || 0,
                   cantidadCamisas = parseInt(camisas.value,10) || 0,
                   cantEtiquetas =parseInt( etiqueta.value,10) || 0;

                var  totalPagar = (boletosDia * 30) + (boleto2Dias * 45) + (boletaCompleto * 50) + ((cantidadCamisas * 10) * .93) + (cantEtiquetas * 2 );
                var listadoProductos = [];

                if(boletosDia >= 1 ){
                    listadoProductos.push(boletosDia + ' Pases por dia');
                
                } if(boleto2Dias >= 1 ){
                    listadoProductos.push(boleto2Dias + ' Pases por 2 dia');
                }
                if(boletaCompleto >= 1 ){
                    listadoProductos.push(boletaCompleto + ' Pases completos');
                }
                if(cantidadCamisas >= 1 ){
                    listadoProductos.push(cantidadCamisas + ' Cantidad de Camisas');
                }

                if(cantEtiquetas >= 1 ){
                    listadoProductos.push(cantEtiquetas + ' Cantidad de Etiquetas');
                }
               
                lista_productos.style.display="block";
                lista_productos.innerHTML = '';

                for (let i = 0; i < listadoProductos.length; i++) {
                    lista_productos.innerHTML += listadoProductos[i]+ '<br/>';
                    
                }

                suma.innerHTML = "S/. " + totalPagar.toFixed(2); //Tofixed establece la cant de decimales
             
            }
        }


        function mostrarDias(){
            var boletosDia =parseInt( pase_dia.value, 10) || 0,
            boleto2Dias =parseInt( pase_dosdias.value,10) || 0,
            boletaCompleto =parseInt( pase_completo.value,10) || 0;

            var diasElegidos = [];

            if (boletosDia >0) {
                diasElegidos.push('viernes');
                console.log(diasElegidos);
            } 
            if (boleto2Dias > 0) {
                diasElegidos.push('viernes', 'sabado');
                console.log(diasElegidos);
            }
            if (boletaCompleto > 0) {
                diasElegidos.push('viernes','sabado','domingo');
                console.log(diasElegidos);
            }

            for (let i = 0; i < diasElegidos.length; i++) {
                document.getElementById(diasElegidos[i]).style.display = 'block';
                
            }
           
        }

       

        }
    });//DOM CONTENT LOADED

})();

$(function(){

    //lettering
    $('.nombre-sitio').lettering();



    //Menu fijo
     var windowsHeight = $(window).height();
     var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > windowsHeight) {
            $('.barra').addClass('fixed');
            $('body').css({'margin-top': barraAltura+'px'});
        }else{
        $('.barra').removeClass('fixed');
        $('body').css({'margin-top': '0px'});
        }
    });


    // Menu responsive

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
       
        
    });


    //Programa de conferencias
    $('.programa-evento .info-curso:first').show();



    $('.menu-programa a').on('click',function(){
        $('.menu-programa a').removeClass();
        $(this).addClass('activo');
        var enlaces = $(this).attr('href');
        $('.ocultar').hide();
        $(enlaces).fadeIn(1000);

        return false;
    
    });


    var resumenLista = jQuery('.resumen-evento');
    if (resumenLista.length > 0 ) {
        $('.resumen-evento').waypoint (function(){
            $('.resumen-evento li:nth-child(1) p').animateNumber({ number: 6}, 1200);
            $('.resumen-evento li:nth-child(2) p').animateNumber({ number: 15}, 1200);
            $('.resumen-evento li:nth-child(3) p').animateNumber({ number: 3}, 1400);
            $('.resumen-evento li:nth-child(4) p').animateNumber({ number: 9}, 1500);

        }, {
            offset: '60%'
        
        });
    }

    //Animaciones para los numeros 
   
    
    //Cuenta regresivo 

    $('.cuenta-regresiva').countdown('2021/09/12 09:00:00', function(event){

        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});