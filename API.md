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

- Validierung:
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

- Validierung:
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

- HTTP Methode: POST
- pfad: /login
- Erwartete werte:
    - mail (string)
    - password (string)

- Validierung:
    - Vergleicht die Credentials
    - Loggt den Nutzer ein

- Rückgabewert:
    - session-mail bei erfolg
    - error bei falschem password
    - Statuscodes: 200, 401

## Verify

- HTTP Methode: GET
- pfad: /verfy
- Erwartete werte:
    - keine

- Validierung:
    - Prüft ob die session-mail vorhanden ist

- Rückgabewert:
    - Rückgabe der session-mail bei erfolg
    - Error bei misserfolg
    - Statuscodes: 200, 401

## Logout

- HTTP Methode: DELETE
- pfad: /logout
- Erwartete werte:
    - keine

- Validierung:
    - setzt die session-mail auf null

- Rückgabewert:
    - Statuscodes: 204, 401