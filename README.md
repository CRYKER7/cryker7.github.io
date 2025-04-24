<html>
<script>
    document.addEventListener("DOMContentLoaded", function () {
          const contenedor = document.getElementById("contenido");
      // función para obtener el valor de la URL
      function getPagina() {
        const params = new URLSearchParams(window.location.search);
        return params.get("pagina") || "inicio";
      }
      // función para cargar contenido
      function cargarContenido(pagina) {
        fetch(`paginas/${pagina}.html`)
          .then(res => {
            if (!res.ok) throw new Error("No encontrado");
            return res.text();
          })
          .then(html => contenedor.innerHTML = html)
          .catch(() => contenedor.innerHTML = "<p>❌ Página no encontrada</p>");
      }
      // cargar la página actual
      cargarContenido(getPagina());
      // manejar navegación sin recargar (opcional)
      document.querySelectorAll("a[href^='?pagina=']").forEach(link => {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          const pagina = this.getAttribute("href").split("=")[1];
          history.pushState({}, "", `?pagina=${pagina}`);
          cargarContenido(pagina);
        });
      });
      // manejar cambios al volver/adelantar con el historial
      window.addEventListener("popstate", () => {
        cargarContenido(getPagina());
      });
    });
</script>
</html>
