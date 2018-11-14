# RSAMessenger


## Descripción del proyecto
RSA Messenger es un chat para enviar mensajees seguros entre 2 ventanas de una misma sesión. Utiliza un cliente y un servidor para intercambiar mensajes. 
Cada mensaje tiene su propia generación de llaves y se encripta caracter a caracter utilizando su código UNICODE. 
El mensaje del lado del emisor no es encriptado pero, al enviarse al receptor se encripta y por medio de la llave pública este puede des-encriptar.

## Proceso de Encriptado
Paso1:
Encontrar n, por medio de generar 2 números primos aleatorios (p,q) entre 0 y 10000 (por terminos de tiempo pero, puede ser mayor.)
Paso2:
Luego encuentra e por medio de encontrar el MCM de p-1 y q-1. Luego comparar si el MCD es igual a 1. 
Paso3:
Con estos datos ya se procede a encriptar caracter a caracter por medio de un loop que itera en la frase enviada.
El proceo de encriptado se hace por medio de una exponenciación modular para evitar errores por el tamaño de los números. 

## Proceso de Des-encriptado
Utiliza la llave publica obtenida del proceso de encriptado para encontrar d y utilizar la exponenciación modular para des encriptar. 

## Requisitos
Node.js

## Instrucciones de prueba
1. Descargar los archivos del repositorio. 
2. Correr el siguiente comando. Para instalar dependencias.
`npm install --save`
3. Correr el siguiente comando.
`
