# Rijkshuisstijl template voor Windesheim.

## Voordat je begint

### Node

Zorg ervoor dat je Node.js versie **_20_** of hoger geïnstalleerd hebt.

Controleer je huidige Node-versie door in je terminal te typen:

```bash
node --version
```

Als je versie lager is dan 20, kun je via Node Version Manager (nvm) je Node-versies beheren en wisselen. Volg deze
stappen om de juiste Node-versie te installeren:

- Als je nvm nog niet hebt, [installeer `nvm`](https://github.com/nvm-sh/nvm#install--update-script).

- Gebruik daarna `nvm` om Node.js 20 (of hoger) te installeren:

```bash
nvm install 20
```

- Stel Node.js 20 in als actieve versie:

```bash
nvm use 20
```

### Project starten.

Voordat je het project start moeten de dependencies worden geinstaleerd. Om deze te instaleren gebruik je het command:

```bash
npm install
```

Hierna kan je het project starten, hiervoor voer je het volgende script uit in een terminal in de root van het project:

```bash
npm run dev
```

Als het goed is, is het project gestart en kan je het bekijken in een browser op: [http://localhost:5173/](http://localhost:5173/)
