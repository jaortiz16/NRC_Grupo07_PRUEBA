$(document).ready(function() {
    // Función para crear una partícula en una posición aleatoria dentro del contenedor
    function createParticle() {
      var particle = $('<div class="particle"></div>');
      var containerWidth = $('#container').width();
      var containerHeight = $('#container').height();
      
      // Asignar posición y dirección de movimiento aleatorias a la partícula
      var particleX = Math.random() * containerWidth;
      var particleY = Math.random() * containerHeight;
      var particleXSpeed = Math.random() * 4 - 2;
      var particleYSpeed = Math.random() * 4 - 2;
      
      particle.css({
        left: particleX,
        top: particleY
      });
      
      // Agregar la partícula al contenedor
      $('#container').append(particle);
      
      // Animar la partícula
      animateParticle(particle, particleXSpeed, particleYSpeed);
    }
    
    // Función para animar una partícula
    function animateParticle(particle, particleXSpeed, particleYSpeed) {
      var containerWidth = $('#container').width();
      var containerHeight = $('#container').height();
      
      // Animar la partícula moviéndola en la dirección asignada
      particle.animate({
        left: '+=' + particleXSpeed,
        top: '+=' + particleYSpeed
      }, 500, function() {
        var particleX = parseFloat(particle.css('left'));
        var particleY = parseFloat(particle.css('top'));
        
        // Comprobar si la partícula está dentro del contenedor
        if (particleX < 0 || particleX > containerWidth || particleY < 0 || particleY > containerHeight) {
          // Eliminar la partícula si está fuera del contenedor
          particle.remove();
        } else {
          // Continuar animando la partícula
          animateParticle(particle, particleXSpeed, particleYSpeed);
        }
      });
    }
    
    // Agregar el evento click al contenedor para crear partículas cuando se hace clic
    $('#container').click(function(e) {
      // Crear 10 partículas en la posición del clic
      for (var i = 0; i < 10; i++) {
        createParticle();
      }
    });
  });

  

  $(document).ready(function() {
    // Cambiar color al hacer doble clic
    $('.elemento').on('dblclick', function() {
      var colores = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
      var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
      $(this).css('background-color', colorAleatorio);
    });
  });

  $(document).ready(function() {
    // Obtener el contenedor de la imagen y el fondo
    var container = $('#containerx');
    var background = $('#backgroundx');
    
    // Asignar el evento mouseenter al contenedor
    container.mouseenter(function() {
      // Aplicar el efecto de desenfoque al fondo
      background.css('filter', 'blur(5px)');
    });
    
    // Asignar el evento mouseleave al contenedor
    container.mouseleave(function() {
      // Restablecer el efecto de desenfoque al fondo
      background.css('filter', 'blur(0)');
    });
  });
  
  


  $(document).ready(function() {
    var menu = $('#menu');
    var menuButtons = $('.menu-button');
    
    // Asignar el evento mouseenter al botón central
    menu.mouseenter(function() {
      menuButtons.each(function(index) {
        var angle = 360 / menuButtons.length;
        var radius = 100;
        var offset = 50;
        var posX = Math.cos((angle * index) * (Math.PI / 180)) * radius + offset;
        var posY = Math.sin((angle * index) * (Math.PI / 180)) * radius + offset;
        
        $(this).css({
          'left': posX + 'px',
          'top': posY + 'px',
          'opacity': 1
        });
      });
    });
    
    // Asignar el evento mouseleave al menú
    menu.mouseleave(function() {
      menuButtons.css({
        'left': '50%',
        'top': '50%',
        'opacity': 0
      });
    });
  });

  


  $(document).ready(function() {
    var canvas = $('#canvas');
    
    // Asignar el evento mouseup al lienzo
    canvas.mouseup(function(event) {
      var releaseX = event.pageX - canvas.offset().left;
      var releaseY = event.pageY - canvas.offset().top;
      
      createParticles(releaseX, releaseY);
    });
    
    function createParticles(x, y) {
      var numParticles = 30;
      
      for (var i = 0; i < numParticles; i++) {
        var particle = $('<div class="particle2"></div>');
        var angle = Math.random() * 360;
        var distance = Math.random() * 200 + 100;
        var posX = x + Math.cos(angle * (Math.PI / 180)) * distance;
        var posY = y + Math.sin(angle * (Math.PI / 180)) * distance;
        
        particle.css({
          'left': x,
          'top': y
        });
        
        canvas.append(particle);
        
        setTimeout(function() {
          particle.css({
            'left': posX,
            'top': posY
          });
        }, 0);
        
        setTimeout(function() {
          particle.remove();
        }, 1000);
      }
    }
  });
  




  $(document).ready(function() {
    var isDrawing = false;
    var previousX, previousY;
    
    var canvas = $('#canvas2');
    
    // Asignar el evento mousedown al lienzo
    canvas.mousedown(function(event) {
      isDrawing = true;
      previousX = event.pageX - canvas.offset().left;
      previousY = event.pageY - canvas.offset().top;
    });
    
    // Asignar el evento mousemove al lienzo
    canvas.mousemove(function(event) {
      if (isDrawing) {
        var currentX = event.pageX - canvas.offset().left;
        var currentY = event.pageY - canvas.offset().top;
        
        // Crear una línea desde la posición anterior a la posición actual
        var line = $('<div class="line"></div>');
        line.css({
          'position': 'absolute',
          'left': previousX,
          'top': previousY,
          'width': currentX - previousX,
          'height': currentY - previousY,
          'background-color': 'black'
        });
        
        canvas.append(line);
        
        // Actualizar la posición anterior con la posición actual
        previousX = currentX;
        previousY = currentY;
      }
    });
    
    // Asignar el evento mouseup al lienzo
    canvas.mouseup(function() {
      isDrawing = false;
    });
  });
  
  $(document).ready(function() {
    var formInputs = $('.form-input');
    
    // Asignar el evento focus a los campos de entrada
    formInputs.focus(function() {
      $(this).addClass('focused');
    });
    
    // Asignar el evento blur a los campos de entrada
    formInputs.blur(function() {
      $(this).removeClass('focused');
    });
    
    // Validar los campos de entrada al enviar el formulario
    $('form').submit(function(event) {
      var isValid = true;
      
      formInputs.each(function() {
        if ($(this).val().trim() === '') {
          $(this).addClass('error');
          isValid = false;
        } else {
          $(this).removeClass('error');
        }
      });
      
      if (!isValid) {
        event.preventDefault();
      }
    });
  });

  $(document).ready(function() {
    var text = $('.text');
    
    // Animación inicial: fade in
    text.fadeIn(1000, function() {
      // Animación secundaria: fade to
      text.fadeTo(2000, 0.5, function() {
        // Animación de bucle: fade in y fade out repetidos
        animateLoop();
      });
    });
    
    function animateLoop() {
      text.fadeTo(2000, 1, function() {
        text.fadeTo(2000, 0.5, animateLoop);
      });
    }
  });

  




  $(document).ready(function() {
    var toggleButton = $('.toggle-button');
    var hiddenContent = $('.hidden-content');
    
    // Asignar el evento click al botón de alternar
    toggleButton.click(function() {
      hiddenContent.slideToggle(500);
    });
  });

  



  //asaaaaaaaaaaaaaaaaaa
  
  $(document).ready(function() {
    $("#btnStart").click(function() {
      var container = $("#container5");
      
      // Crear 100 partículas
      for (var i = 0; i < 100; i++) {
        var particle = $("<div>").addClass("particle5");
        
        // Asignar un color aleatorio
        var color = getRandomColor();
        particle.css("background-color", color);
        
        // Establecer una posición inicial aleatoria
        var x = container.width() / 2;
        var y = container.height() / 2;
        particle.css({ top: y, left: x });
        
        // Añadir la partícula al contenedor
        container.append(particle);
        
        // Animar la partícula
        particle.animate({
          top: getRandomPosition(y),
          left: getRandomPosition(x),
          opacity: 0,
          width: "0px",
          height: "0px"
        }, 1000);
      }
    });
  });
  
  function getRandomPosition(center) {
    return Math.floor(Math.random() * (center * 2));
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  