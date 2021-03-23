# Front End Test ML

Aplicación ML, esta formada por un search box ubicado en el header component, un list items para visualizar los productos buscados por un usuario y un componente para el detalle de producto, ademas de componentes mas pequeños como info, para mostrar los errores o informacion al usuario.

La aplicación esta divida en una configuración general para correr los ambientes de front y back, cada ambiente esta divido en su propia carpeta, client tiene todo lo relacionado al front del app y api tiene todo lo relacionado a construcción del api para ser utilizada en el front.

## Pasos para correr el app.

### API

```bash
cd backend
npm install
```

Port: `http://localhost:4000/`

### CLIENT

```bash
cd client
npm install
```

Luego de instalar las dependencias de cada ambiente, en el root del proyecto, puedes correr el siguiente comando:

```bash
cd ./
npm run start
```

Este comando iniciara los dos servidores, client y api.

Port: `http://localhost:3000/`