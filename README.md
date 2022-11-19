# Ghost-PruebasDeRegresion

1. Para correr los escenarios de la semana pasada:
    a) Correr ghost en localhost siguiendo las siguientes instrucciones: https://misovirtual.virtual.uniandes.edu.co/codelabs/ghost-local-deployment/index.html#1 usar version 8.15
    b) Clonar el repositoriodesde: https://github.com/areyna04/Ghost-PruebasDeRegresion.git
    b) Crear una cuenta de administrador en ghost y guardar las credenciales en el archivo properties.json..
    d) Correr comando: "npm install" en el repositorio recien clonado.
    e) Correr comando: "npx playwright test" para correr las pruebas de Playwright, los screenshots se guardan en la carpeta screenshots, deberia ver 10 escenarios con errores, los que corresponden a los modificados para la version 3.42.
    f) Correr comando: "npx kraken-node run" para correr las pruebas de Kraken, los screenshots se guardan en el reporte dentro  de la carpeta reports con el numero de reporte realizado.

2. Para correr los escenarios modificados
    a) Seguir las indicaciones a-d del paso anterior.
    b) Correr el comando: "docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42"
    c) Correr el comando: "npx playwright test"