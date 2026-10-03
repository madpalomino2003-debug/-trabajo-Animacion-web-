/* =====================================================
   MINI-PÁGINA ANIMADA CON GSAP
   ===================================================== */


/* =====================================================
   1. GSAP.FROM()
   
   El título y subtítulo empiezan invisibles,
   desplazados hacia arriba y luego aparecen.
   ===================================================== */

gsap.from("#titulo", {

    opacity: 0,
    y: -50,

    duration: 1,

    ease: "power2.out"

});


gsap.from("#subtitulo", {

    opacity: 0,
    y: -30,

    duration: 1,

    delay: 0.3,

    ease: "power2.out"

});


/* =====================================================
   2. GSAP.TO()
   
   Cuando hacemos clic en el botón, la caja se mueve
   hacia la derecha y después regresa a su posición
   inicial.
   ===================================================== */

const boton = document.querySelector("#btnAnimar");

const caja = document.querySelector("#caja");


boton.addEventListener("click", function () {

    // Primera animación:
    // La caja se mueve hacia la derecha.

    gsap.to(caja, {

        x: 180,

        duration: 0.8,

        ease: "power2.out"

    });


    // Segunda animación:
    // Después de un pequeño retraso,
    // la caja vuelve a su posición inicial.

    gsap.to(caja, {

        x: 0,

        duration: 0.8,

        delay: 1,

        ease: "bounce.out"

    });

});


/* =====================================================
   3. GSAP.FROMTO() + STAGGER
   
   Las tres tarjetas empiezan abajo, pequeñas
   y transparentes.

   Después aparecen una por una gracias a stagger.
   ===================================================== */

gsap.fromTo(".card",

    {
        opacity: 0,
        y: 60,
        scale: 0.8
    },

    {
        opacity: 1,
        y: 0,
        scale: 1,

        duration: 0.8,

        stagger: 0.25,

        ease: "power2.out"
    }

);


/* =====================================================
   4. GSAP.TIMELINE()
   
   Creamos una secuencia de animaciones encadenadas.

   La timeline tendrá más de tres animaciones.
   ===================================================== */

const tl = gsap.timeline();


/* Primera animación de la timeline */

tl.from(".zona-interactiva", {

    opacity: 0,

    duration: 0.8,

    delay: 0.5,

    ease: "power2.out"

});


/* Segunda animación de la timeline */

tl.from("#caja", {

    scale: 0,

    rotation: 180,

    duration: 1,

    ease: "bounce.out"

});


/* Tercera animación de la timeline */

tl.from(".zona-interactiva p", {

    opacity: 0,

    y: 20,

    duration: 0.6,

    ease: "power2.out"

});