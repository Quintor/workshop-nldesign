# Rijkshuisstijl template voor Windesheim.

## Voordat je begint

### Node

Zorg ervoor dat je Node.js versie **_20_** of hoger geïnstalleerd hebt.

Controleer je huidige Node-versie door in je terminal te typen:

```bash
node --version
```

Als je nog geen Node hebt geinstalleerd of niet de juiste versie hebt zijn er twee manier om dit te doen:

#### 1. handmatig

Download en installeer de juiste versie via [Nodejs.org](https://nodejs.org/en/download/prebuilt-installer/current)
handmatig.

#### 2. Met `nvm`

Via Node Version Manager (nvm) kan je Node-versies beheren en wisselen. Volg deze stappen om de juiste Node-versie te
installeren:

- Als je nvm nog niet hebt, [installeer `nvm`](https://github.com/nvm-sh/nvm#install--update-script).

Dit project bevat een `.nvmrc` bestand, dit bestand helpt je met het instellen van de juiste Node versie.

Zodra je `nvm` hebt geïnstalleerd, run je het volgende commando in de root van dit project:

```bash
nvm use
```

Als je de juiste versie nog niet hebt, wordt gevraagd om deze te installeren door middel van `nvm install`. Als de
juiste versie al is geïnstalleerd, of nadat hij is geïnstalleerd, wordt hij ingesteld als de huidige versie.

### Project starten.

Voordat je het project start moeten de dependencies worden geinstaleerd. Om deze te instaleren gebruik je het command:

```bash
npm install
```

Hierna kan je het project starten, hiervoor voer je het volgende script uit in een terminal in de root van het project:

```bash
npm run dev
```

Als het goed is, is het project gestart en kan je het bekijken in een browser
op: [http://localhost:5173/](http://localhost:5173/)

## De componenten

De componenten die je kan gebruiken voor het maken van jouw pagina zijn in het
[Storybook](https://rijkshuisstijl-community.vercel.app/?path=/docs/rijkshuisstijl-community-font--docs) te vinden.

## Voorbeelden

Heb je een voorbeeld nodig om na te maken? Kijk dan [hier](https://rijkshuisstijl-community-templates.vercel.app/)!

# Opdracht


Nu mogen jullie aan de slag! Bouw in de [App.tsx](src/App.tsx) een pagina naar keuze met behulp van componten die worden aangeboden in de storybook van de Rijkshuisstijl community.
Als je hulp nodig hebt met het bedenken van een pagina kan je kijken bij de voorbeelden. 

Als je pagina af is kan je controleren of het voldoet aan de accesibility eisen door middel van een test uit te voeren. 
Open een terminal en run de command `npm run test`.
