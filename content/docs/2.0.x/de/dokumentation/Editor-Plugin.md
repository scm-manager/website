---
title: Editor Plugin
---

Das Editor Plugin erlaubt es, Dateien direkt innerhalb des SCM-Managers zu erstellen, hochzuladen, zu ändern oder zu löschen. Diese Änderungen werden durch den SCM-Manager als Commits in dem Repository durchgeführt. Von daher können Änderungen auch nur auf Branches durchgeführt werden (ausgenommen Subversion). Über zusätzliche Plugins wie beispielsweise das SCM-BranchWP-Plugin (Branch Write Protection) können Branches oder Bereiche vor Schreibzugriffen geschützt werden, selbst wenn ein Nutzer generelle Schreibzugriffe auf ein Repository hat. 
In diesem Dokument werden kurz die Funktionen des SCM-Editor-Plugins beschrieben.

![Sources](images/editor-plugin/sources.png)

Hat ein Anwender die Rechte, ein Repository zu bearbeiten, findet er in der Sources-Ansicht die folgenden neuen Buttons:

|Button|Aktion|
|----|----|
|![Neue Textdatei](images/editor-plugin/newFile.png)| Neue text-basierte Datei erstellen|
|![Neue Datei hochladen](images/editor-plugin/uploadFile.png)| Eine oder mehrere Dateien hochladen|

![Dateiansicht](images/editor-plugin/file.png)

Ferner gibt es in der Detail-Ansicht einer Datei die folgenden neuen Buttons:

|Button|Aktion|
|:-:|-|
|![Datei löschen](images/editor-plugin/deleteFile.png)|Datei löschen|
|![Datei bearbeiten](images/editor-plugin/editFile.png)|Datei bearbeiten (nur für Textdateien)|
|![Datei herunterladen](images/editor-plugin/downloadFile.png) |Datei herunterladen|

## Neue Textdatei erstellen bzw. Textdatei editieren

![Neue Textdatei erstellen](images/editor-plugin/fileEditor.png)

Zum Erstellen bzw. zum Ändern einer Textdatei wird ein Editor geöffnet. Der Editor unterstützt Syntax-Highlighting für alle gängigen Programmiersprachen und Dateiformate. 

Folgende Informationen bzw. Interaktionen bietet der Editor:

- __Ausgewählter Branch:__ Die Datei wird mit einem neuen Commit auf diesem Branch erzeugt bzw. modifiziert.
- __Pfad:__ Der Dateipfad, in dem die Datei angelegt wird (beim Bearbeiten einer vorhandenen Datei ist dieses Feld nicht änderbar).
- __Dateiname:__ Der Name der Datei  (beim Bearbeiten einer vorhandenen Datei ist dieses Feld nicht änderbar).
- __Highlighting__: Auswahl der angezeigten Highlightings. Der Editor ermittelt, sofern verfügbar, eigenständig ein passendes Highlighting. Zusätzlich kann über das Dropdown die Auswahl geändert werden.
- __Inhalt:__ Der Inhalt der neuen bzw. geänderten Datei.
- __Autor:__ Dieser Benutzer wird als Autor in den neuen Commit geschrieben.
- __Commit Nachricht:__ Die Nachricht für den neuen Commit.

## Dateien hochladen

Es können eine oder mehrere Dateien in ein Verzeichnis hochgeladen werden. Existiert bereits eine dieser Dateien, so werden diese überschrieben.

![Dateien hochladen](images/editor-plugin/fileUploader.png)

Hierzu gibt es die folgenden Angaben:

- __Ausgewählter Branch:__ Die Dateien werden mit einem neuen Commit auf diesem Branch erstellt.
- __Pfad:__ Der Dateipfad, in dem die neuen Dateien angelegt werden. Der Dateipfad kann über das Eingabefeld angepasst werden.
- __Dateiauswahl:__ Auf diesen Bereich können die gewünschten Dateien per Drag and Drop gezogen werden. Durch einen Klick in diesen Bereich wird ein Dateiauswahldialog geöffnet. Es können mehrfach Dateien ausgewählt werden.
- __Ausgewählte Dateien:__ Hier werden die Dateien aufgelistet, die hochgeladen werden sollen. Fälschlicherweise gewählte Dateien können aus der Liste wieder entfernt werden.
- __Autor:__ Der eingeloggte SCM-Benutzer wird als Autor in den neuen Commit geschrieben.
- __Commit Nachricht:__ Es muss eine neue Nachricht für den Commit eingetragen werden.

## Datei löschen

Beim Löschen einer Datei öffnet sich ein Dialog, in dem die Nachricht für den neuen Commit eingegeben werden muss.

![Datei löschen](images/editor-plugin/deleteDialog.png)
