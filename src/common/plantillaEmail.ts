const plantillaEmail = async (req: any) => {

  return `<html>

<head>
  <meta name="encoding" charset="utf-8" />
  <title>Asignación de Usuario</title>
</head>

<body style="background:rgb(255, 255, 255); color: black; padding: 0; font-family:Times New Roman; font-size: 18px;">
  <div style="width: 80%;margin:0 auto;overflow: hidden;">
    <div style="width: 100%; height: auto; background: white; background-color: rgba(255,255,255,0.7);">
      <header>
        <div style=" text-align: center;">
          <img style="width: 30%;height: auto;"
            src="https://github.com/NelmerAyala/public-resources/blob/main/logo.png?raw=true">
        </div>
      </header>
    </div>
    <br />
    <div
      style="padding-top: 2%;padding-bottom: 2%; background: #7e0111; background-color: #7e0111;text-align: center;color:white;">
      Notificación de Usuario
    </div>
    <br />
    <div style="background-color:rgb(26 46 53 / 10%); width: 100%; align-content: center;">
      <div style="width: 80%;padding: 0 auto;margin: 0 auto;">
        <br />
        <p>Se le informa que usted ha sido registrado como contribuyente en el <strong>Sistema Automatizado de
            Recaudación Tributaria del Estado Carabobo (siartec)</strong>, por
          consiguiente se le asignó un usuario para que pueda acceder a la aplicación web y poder realizar todas sus
          gestiones, los datos de su usuario se adjuntan a continuación:
        </p>
        <br /><br />
        <strong>Correo:</strong> ${req.body.contirbutor_email}<br />
        <strong>Contraseña de Usuario:</strong> ${req.body.contirbutor_password}<br />
        <br /><br /><br />
        <b>Sugerencia: </b> Cambiar contraseñas asignadas por el sistema.
        <br /><br /><br />
        <p style="text-align: justify; font-size: 24px;"><b>Enlace al sitio web:</b> <a
            href='${process.env.WEBSITE}'>${process.env.APPNAME}</a>
        </p>
        <hr>
        <b style="color: red;">Por favor, no responda a este mensaje, ha sido enviado de forma
          automática.</b>
      </div>
      <br />
      <br />
    </div>
    <br />

    <footer style="text-align: center;">
      <div
        style="padding-top: 2%;padding-bottom: 2%; background: #7e0111; background-color: #7e0111; text-align: center;color:white;">
        ${new Date().getFullYear()} | © Gobernación Bolivariana de Carabobo | Secretaría de Hacienda y Finanzas | ©
        2018-2019
      </div>
    </footer>
  </div>
</body>

</html>`
};

export default plantillaEmail;