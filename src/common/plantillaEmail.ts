const plantillaEmail = async (req: any) => {

  return `<html>

<head>
  <meta name="encoding" charset="utf-8" />
  <title>Asignación de Usuario</title>
</head>

<body style="background:rgb(255, 255, 255); color: black; padding: 0; font-family:Times New Roman;">
  <br>

  <div class="contenedorPrincipal" style="width: 80%;margin:0 auto;overflow: hidden;">
    <div class="cabezera"
      style="width: 100%; height: auto; background: white; background-color: rgba(255,255,255,0.7);">
      <header>
        <center>
          <div>
            <img style="width: 25%;height: auto;"
              src="https://github.com/NelmerAyala/public-resources/blob/main/logo.png?raw=true">
          </div>
        </center>
      </header>
    </div>
    <br>
    <div
      style="padding-top: 2%;padding-bottom: 2%; background: #7e0111; background-color: #7e0111;font-size: 16px;text-align: center;color:white;">
      ASIGNACIÓN DE USUARIO
    </div>
    <br>
    <div class="body-primary" style="background-color:rgb(26 46 53 / 10%); width: 100%; align-content: center;">
      <div class="contenido" style="width: 80%;padding: 0 auto;margin: 0 auto;">
        <br>
        <p style="text-align: justify;"><b>SE LE INFORMA QUE USTED HA SIDO REGISTRADO COMO CONTRIBUYENTE EN
            EL <strong>SISTEMA AUTOMATIZADO DE RECAUDACIÓN TRIBUTARIA DEL ESTADO CARABOBO (SIARTEC)<strong>, POR
                CONSIGUIENTE SE LE ASIGNÓ UN USUARIO PARA QUE PUEDA ACCEDER A LA
                APLICACIÓN WEB Y PODER REALIZAR TODAS SUS GESTIONES, LOS DATOS DE SU USUARIO SE ADJUNTAN A
                CONTINUACIÓN: </b></p>
        <br><br>
        CORREO: ${req.body.contirbutor_email}<BR>
        CONTRASEÑA DE USUARIO: ${req.body.contirbutor_password}<BR>
        <br><br><br>
        <b>SUGERENCIA: </b> CAMBIAR LA CONTRASEÑA ASIGNADA POR EL SISTEMA.
        <br><br><br>
        <p style="text-align: justify;"><b>DESDE NUESTRO APLICACIÓN WEB PUEDE DESCARGA SUS ESTUDIOS</b>
        <p style="text-align: justify;"><b>ENLACE AL SITIO WEB:</b> <a
            href='${process.env.WEBSITE}'>${process.env.APPNAME}</a>
      </div>
      <hr>
      <b style="color: red;">Por favor, no responda a este mensaje, ha sido enviado de forma automática.</b>
      <br>
      <br>
    </div>
    <br>

    <footer style="text-align: center;">
      <div class="pie">
        <div class="Copyright"
          style="padding-top: 2%;padding-bottom: 2%; background: #7e0111; background-color: #7e0111; font-size: 16px;text-align: center;color:white;">
          ${new Date().getFullYear()} | © Gobernación Bolivariana de Carabobo | Secretaría de Hacienda y Finanzas | ©
          2018-2019
        </div>
      </div>
    </footer>
  </div>
</body>

</html>`
};

export default plantillaEmail;