function calcularAspectRatio(url) {
    // Crear una nueva imagen
    const img = new Image();

    // Establecer la URL de la imagen
    img.src = url;

    // Esperar a que la imagen se cargue
    img.onload = function() {
        const ancho = img.naturalWidth;
        const alto = img.naturalHeight;

        // Calcular el máximo común divisor para simplificar el ratio
        const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

        // Calcular el gcd de ancho y alto
        const divisor = gcd(ancho, alto);

        // Calcular el aspect ratio
        const aspectRatio = `${ancho / divisor}:${alto / divisor}`;

        console.log(`El aspect ratio de la imagen es ${aspectRatio}`);
    };

    // Manejar el caso en el que la imagen no se pueda cargar
    img.onerror = function() {
        console.log('No se pudo cargar la imagen desde la URL proporcionada.');
    };
}

// URL de la imagen
const url = 'https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png';

// Llamada a la función
calcularAspectRatio(url);
