---
title: PathWP-Plugin
---
 
Mit dem Path Write Protection-Plugin kann für jedes Repository gesondert der Schreibschutz für Pfade gesetzt werden. Dazu muss zu allererst im Repository unter Einstellungen > "Pfad-Berechtigungen" die Checkbox aktiviert werden. Ab dann kann nur noch anhand der definierten Regeln auf diesem Repository geschrieben werden.

![PathWP Überblick](images/pathwp/pathwp-overview.png)

## Berechtigung hinzufügen
Nach Aktivieren der Schreib-Berechtigungen wird der Bereich "Berechtigung hinzufügen" sichtbar. In ihm können Benutzer und/oder Gruppen für Pfade berechtigt (oder ausgeschlossen) werden. Im Eingabefeld "Pfad" kann ein Pfadname oder Muster angegeben werden. Um ein komplettes Verzeichnis zu schützen, kann am Ende des Pfades "*\\" verwendet werden.

Zum Beispiel:

* docs/*
* Jenkinsfile
* *.xml

Eine DENY Berechtigung wiegt stärker als eine ALLOW Berechtigung und kann diese außer Kraft setzen. Hierdurch kann nach einem generellen Berechtigen ein erneuter Ausschluss für bestimmter Teile ermöglicht werden.

## Berechtigungen
Das PathWP-Plugin bringt folgende Berechtigungen mit:

* Globale Berechtigungen:
    * Repository-spezifische Schreibrechte für Pfade ändern: Darf die Repository-spezifischen Schreibrechte für Pfade verändern
* Repository-spezifische Berechtigungen
    * Schreibrechte für Pfade ändern: Darf die Schreibrechte für Pfade verändern
