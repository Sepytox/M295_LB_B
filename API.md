# Leistungsbeurteilung von Miro Lacoste im Modul 295

## Setup
- Repository klonen
- npm start
- http://localhost:3000-Port öffnen

## Autor
Miro Lacoste

## Hilfsmittel
- teilweise mit Copilot von Github geschrieben

## Endpunkte

**GET /tasks:** <br>
Gibt alle Tasks als JSON zurück

**GET /tasks/:id:** <br>
Gibt einen Task mit der entsprechenden ID als JSON zurück

**POST /tasks:** <br>
Erstellt einen neuen Task mit den Daten aus dem Body

**PUT /tasks/:id:** <br>
Aktualisiert einen Task mit der entsprechenden ID mit den Daten aus dem Body

**DELETE /tasks/:id:** <br>
Löscht einen Task mit der entsprechenden ID

**POST /login:** <br>
Loggt einen User ein und gibt ein die mail zurück

**GET /verify:** <br>
Überprüft das Token und gibt die mail zurück

**DELETE /logout:** <br>
Loggt einen User aus