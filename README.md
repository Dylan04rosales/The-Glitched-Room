<div align="center">

<img src="icon-512.png" width="96" alt="The Glitched Room" />

# The Glitched Room

### Tu backlog de videojuegos, tomado en serio.

Catálogo personal multi-usuario con progreso, trofeos, calificaciones, sagas y recomendaciones — sin plantillas de Excel, sin dependencias, sin costo.

[![Demo en vivo](https://img.shields.io/badge/▶_probar_la_app-F5C518?style=for-the-badge&labelColor=0d0d0d)](https://dylan04rosales.github.io/The-Glitched-Room/)
![Último commit](https://img.shields.io/github/last-commit/Dylan04Rosales/The-Glitched-Room?style=for-the-badge&labelColor=0d0d0d&color=5856D6)
![Tamaño del repo](https://img.shields.io/github/repo-size/Dylan04Rosales/The-Glitched-Room?style=for-the-badge&labelColor=0d0d0d&color=34D399)

</div>

<br>

## Índice

- [Qué es esto](#qué-es-esto)
- [Funciones](#funciones)
- [Cómo está construido](#cómo-está-construido)
- [Empezar a usarlo](#empezar-a-usarlo)
- [Seguridad](#seguridad)
- [Roadmap](#roadmap)

<br>

## Qué es esto

La mayoría de los catálogos de juegos son una hoja de cálculo con vergüenza de admitirlo. **The Glitched Room** no: busca portadas oficiales, notas de crítica y datos de saga contra APIs reales (IGDB, RAWG, SteamGridDB, TheGamesDB, Steam), y arma con eso una biblioteca que se siente como una app de verdad — no una lista.

Soporta **varios usuarios**, cada uno con su propia biblioteca, perfil, amigos y estadísticas, corriendo entero sobre infraestructura gratuita: GitHub Pages de frontend y un Worker de Cloudflare de backend. Sin servidor propio, sin base de datos que mantener, sin factura a fin de mes.

<br>

## Funciones

<details open>
<summary><b>📚 Catálogo y progreso</b></summary>
<br>

- Estados: `Quiero` · `Jugando` · `Terminado` · `Abandonado` · `Archivado` · `Lo tengo`
- Formato físico o digital, múltiples plataformas por juego
- Progreso, trofeos, platinado, veces completado, horas jugadas
- Rating de 5 estrellas y reseña propia por juego
- Wrapped anual con tu resumen del año

</details>

<details>
<summary><b>🎨 Ediciones y versiones unificadas</b></summary>
<br>

Un mismo juego con varias plataformas — *Minecraft* en PS3, Java, Bedrock, Xbox 360 y PS4, por ejemplo — vive en **una sola ficha**, no cinco entradas repetidas. Cada plataforma guarda su propia portada oficial y su propio peso en disco; tocás la plataforma y todo cambia al instante.

</details>

<details>
<summary><b>🔍 Búsqueda y descubrimiento</b></summary>
<br>

- Motor principal **IGDB**, con **RAWG** como respaldo automático si no hay resultados
- Explorar por plataforma, género y modo de juego
- "Populares ahora" y recomendaciones "Para ti"
- Sagas y colecciones: si tenés un juego tipo *God of War Collection*, su ficha muestra un carrusel con el resto de la colección, listo para completar lo que te falte

</details>

<details>
<summary><b>🖼️ Portadas oficiales, no genéricas</b></summary>
<br>

Busca en Steam, IGDB, SteamGridDB, TheGamesDB, Wikipedia y RAWG, en ese orden de prioridad, hasta encontrar la mejor portada disponible. Las que subís a mano se alojan en un hosting de imágenes externo — nada de texto codificado ocupando espacio en la base de datos.

</details>

<details>
<summary><b>👥 Social</b></summary>
<br>

- Sistema de amigos con solicitudes y notificaciones
- Biblioteca en común con cada amigo
- Perfil público compartible por link

</details>

<details>
<summary><b>🎲 Y algunas yapas</b></summary>
<br>

- Sorteo de backlog: ¿no sabés qué jugar? Tira un juego al azar de lo que ya tenés, filtrado por tus consolas
- Instalable como PWA desde el navegador
- Importar biblioteca desde Steam por SteamID64

</details>

<br>

## Cómo está construido

```
┌─────────────────────┐         ┌──────────────────────────┐        ┌─────────────────┐
│   index.html         │────────▶│   Cloudflare Worker       │───────▶│  IGDB · RAWG      │
│   (GitHub Pages)      │◀────────│   (proxy + API + auth)   │◀───────│  SteamGridDB       │
│   vanilla JS, 1 archivo│        │                          │        │  TheGamesDB · Steam│
└─────────────────────┘         └──────────┬───────────────┘        └─────────────────┘
                                              │
                                    ┌─────────▼─────────┐
                                    │   Cloudflare KV     │
                                    │  (usuarios, libs,    │
                                    │   perfiles, amigos)  │
                                    └───────────────────┘
```

Sin build step, sin framework, sin `npm install`. HTML/CSS/JS puro a propósito — corre en cualquier lado, sin fricción, sin romperse entre versiones de dependencias.

<br>

## Empezar a usarlo

1. Entrá a **[dylan04rosales.github.io/The-Glitched-Room](https://dylan04rosales.github.io/The-Glitched-Room/)**
2. Registrate con un código de invitación — el registro abierto está limitado mientras el proyecto crece
3. Buscá tu primer juego, elegí plataforma y estado, y arrancá tu biblioteca

<br>

## Seguridad

- Las contraseñas se verifican **100% en el servidor**; el hash nunca llega al navegador
- Cada usuario solo puede leer/escribir su propia biblioteca, perfil y presencia
- Sesiones con token, no cookies eternas
- Rate limiting por IP en registro y login

<br>

## Roadmap

Este proyecto está en desarrollo activo. Algunas ideas para más adelante:

- [ ] Reseñas visibles para amigos, no solo para uno mismo
- [ ] Más fuentes de portadas oficiales para consolas sin API pública
- [ ] Mejoras de rendimiento pensando en más usuarios simultáneos

<br>

---

<div align="center">

Hecho con 🎮 y demasiadas noches sin dormir.

Si te gustó, dejá una ⭐ — no cuesta nada y ayuda un montón.

</div>
