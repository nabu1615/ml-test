# Front End Test ML

Aplicación ML, está formada por un search-box ubicado en el header component, un list-items para visualizar los productos buscados por un usuario y un componente para el detalle de producto, ademas de componentes mas pequeños como info, para mostrar los errores o información al usuario.

La aplicación esta divida en una configuración general para correr los ambientes de front y back. Cada ambiente esta divido en su propia carpeta, 
client tiene todo lo relacionado al Frontend del app y api tiene todo lo relacionado a construcción del api para ser consumida por el FrontEnd.

## Pasos para correr el app.

#### Instalamos concurrently (concurrently nos ayudara a correr los dos servidores al mismo tiempo con el comando npm run start)

```bash
npm install
```

### API

```bash
cd api
npm install
```

Port: `http://localhost:4000/`

### CLIENT

```bash
cd client
npm install
```

Luego de instalar las dependencias de cada ambiente, en el root del proyecto puedes correr el siguiente comando:

```bash
cd ./
npm run start
```

Este comando iniciará los dos servidores, client y api.

Port: `http://localhost:3000/`
