# ToDo – TypeScript/OOP-exempel

Detta är en ToDo-applikation byggd i TypeScript med fokus på objektorienterad programmering (OOP) och användning av localStorage.
I applikationen kan användaren lägga till uppgifter att göra, markera dem som avklarade och ha denna data sparad även vid siduppdatering.

Jag har använt mig av Vite.

## Funktioner

- Lägg till ToDos (uppgifter att göra)
- Ange prioritet (1-3)
- Lista dessa i webbläsaren
- Markera ToDos som avklarade
- Visa uppgifter i två spalter: `Att göra` och `Avklarade`
- Möjlighet att rensa alla avklarade uppgifter
- Data sparas automatiskt i `localStorage`

### Tekniker
- TypeScript
- OOP (klasser, interface)
- DOM
- LocalStorage
- HTML och CSS
- Vite

### Struktur
Min applikation har jag delat upp i flera delar:
- ToDo (interface)
Detta beskriver hur en ToDo ska se ut

- TodoList (klass)
Detta skapar enskilda uppgifter att göra, tex "handla mat"

- TodoManager (klass) 
Detta hanterar logiken, så som att lägga till, markera som avklarad och rensa

- LocalStorageUtil
För att spara och hämta data från LocalStorage

- Main
Hanterar det som användaren ser och gör i min applikation

### Klona repot

```bash
git clone https://github.com/elro2506/dt208g-labb2.git
cd contactViteApp
```
Länk till min webbplats: https://elro2506.github.io/dt208g-labb2/
