---
title: Script-Plugin
---

Das Script-Plugin ist ein mächtiges Werkzeug, womit Scripte direkt oder mithilfe von Hooks auf der SCM-Manager Instanz ausgeführt werden können. Es werden Scripte mit Groovy-Syntax unterstützt.

## Scripts direkt ausführen
Das Script-Plugin erstellt einen Eintrag in der Navigation in der Administrations-Oberfläche der SCM-Manager Instanz. Auf dem ersten Unterpunkt im Bereich "Ausführen" können Scripte direkt eingetragen und auf der SCM-Manager Instanz ausgeführt werden. Nach dem Ausführen sieht man unten auf der Seite die Ausgaben und Ergebnisse des Scripts.

![Script-Execution](images/script-plugin/script-execution.png)

Es gibt die Möglichkeit eingetragene Scripte zu speichern. Dafür öffnet sich ein Speichern-Dialog in dem der Name und eine Beschreibung für das Script eingetragen werden.

![Script-Save-Dialog](images/script-plugin/script-save.png)

## Gespeicherte Scripte

### Übersicht gespeicherte Scripte
Unter dem Navigations-Eintrag "Gespeichert" findet man eine Liste aller gespeicherten Scripte. Beim Klick auf einen Eintrag gelangt man in die Detail-Ansicht dieses Scripts.

![Script-Stored-Overview](images/script-plugin/script-overview-saved.png)

### Script Details
In der Detail-Ansicht gibt es über den editierbaren Feldern eine Navigation um zwischen den Tabs für dieses Script umzuschalten.

#### Script bearbeiten
Hier können der Name, die Beschreibung und das Script editiert werden. Das Script kann auch wieder direkt ausgeführt werden oder man kann das Script unwiderruflich löschen.

![Script-Stored-Details](images/script-plugin/script-saved-details.png)

#### Listeners
Man kann einem gespeicherten Script einen oder mehrere Listener anhängen. Damit wird dieses Script jedes Mal ausgeführt, wenn ein Listener getriggert wird. Beim Hinzufügen eines Listeners kann entschieden werden, ob dieses Script synchron oder asynchron ausgeführt werden soll.

![Script-Stored-Listeners](images/script-plugin/script-saved-listeners.png)

#### Listener Beispiel
Beispiel: Einem Script, welches alle installierten Plugins auf der Konsole ausgeben soll, wird ein Listener für ein Event vom Typ "SCMConfigurationChangedEvent" hinzugefügt. Dieses Event wird vom SCM-Manager erzeugt, wenn die Konfiguration der SCM-Manager Instanz geändert wird. Über die entsprechende Checkbox können sämtliche Ausführungen dieses Scripts, die von Listener ausgelöst wurden, aufgezeichnet werden. 

Wenn man danach in den Einstellungen der SCM-Manager Instanz eine beliebige Konfiguration ändert, wird das entsprechende SCM-Event ausgelöst. Im Anschluss kann nun auf unterschiedlichen Wegen kontrolliert werden, ob das erstellte Script tatsächlich ausgeführt wurde.

In dem entsprechenden Tab innerhalb der Script-Details findet man eine Auflistung der Ausführungen des Scripts inklusive der Ergebnisse.

![Script-Stored-Log](images/script-plugin/script-listener-log.png)

In den Server-Logs der SCM-Manager Instanz ist ebenfalls dokumentiert, dass das Script ausgeführt wurde.

![Script-Server-Log](images/script-plugin/script-listener-serverlog.png)


## Beispiele
Es gibt vordefinierte Beispiele für Scripte. Über einen Injector können instanzierte Klassen der SCM-Manager Instanz im Script verwendet werden. Damit kann man direkt auf interne APIs des SCM-Managers zugreifen.

![Script-Examples](images/script-plugin/script-examples.png)

