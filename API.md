# Leistungsbeurteilung von Miro Lacoste im Modul 295

## Setup
- Repository klonen
- npm start
- http://localhost:3000-Port öffnen

## Autor
Miro Lacoste


## Endpunkte

## Tasks

- HTTP Methode: GET
- Pfad: /tasks
- Erwartete werte: keine

- validierung:
    - schaut ob der Benutzer eingeloggt ist

- Rückgabewert:
    - JSON-File mit allen Tasks
    - Statuscodes: 200, 401

- HTTP Methode: POST
- Pfad: /tasks
- Erwartete werte:
    - id (string)
    - title: (string)
    - creationDate: (string)

- validierung:
    - schaut ob der Benutzer eingeloggt ist
    - erstellt die neue Task
    - id wird automatisch gesetzt
    - creationDate wird automatisch gesetzt
    - completionDate wird automatisch auf Null gesetzt
    - author wird mit der Session mail gesetzt

- Rückgabewert:
    - JSON-File mit der neue Task
    - Statuscodes: 401, 201

- HTTP Methode: GET
- pfad: /tasks/:id
- Erwartete werte:
    - id (string)

- validierung:
    - schaut ob der Benutzer eingeloggt ist
    - filtert die Task mit der gegebnene id

- Rückgabewert:
    - JSON-File mit der Task
    - Statuscode: 200, 401, 404

- HTTP Methode: PUT
- pfad: /tasks/:id
- Erwartete werte:
    - id (string)
    - title (string)
    - creationDate (strin)
    - completionDate (string)

- Validierung:
    - schaut ob der Benutzer eingeloggt ist
    - filtert die Task aus der Liste mit der gegebenen id
    - ersetzt die werte in der Task durch die gebbenen werte

- Rückgabewert:
    - JSON-File mit der bearbeiteten Task
    - Statuscodes: 200, 401, 404

- HTTP Methode: DELETE
- pfad: /tasks/:id
- Erwartete werte:
    - id (string)

- Validierung:
    - schaut ob der Benutzer eingeloggt ist
    - filtert die Task aus der liste mit der gegebenen id
    - löscht die task aus der Liste raus

- Rückgabewert:
    - JSON-File mit der gelöschten Task
    - Statuscodes: 401, 200, 404

## Login

