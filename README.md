# Code-along CRUD och HTTP-requests genomgång den 13 Aug 2024

När vi gör anrop till JSONPlaceholder API, som att skapa ett nytt inlägg med en
POST-begäran, eller uppdatera ett inlägg med PUT eller PATCH, så simulerar API
att det har skett. Ni kommer att se att anropen returnerar de data ni skickade
och ger intrycket att något faktiskt har ändrats.

Men i verkligheten så ändras inget permanent i deras databas. Om ni till exempel
uppdaterar ett inlägg och sedan gör en ny GET-begäran för att hämta alla inlägg,
så kommer ni att märka att ändringen inte är kvar. Detta beror på att
JSONPlaceholder API är designat för att endast simulera hur ett riktigt API
skulle fungera.
