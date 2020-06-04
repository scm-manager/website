---
title: Tag Protection-Plugin
---
 
Das Tag Protection-Plugin aktiviert den konfigurierbaren Schutz gegen das Entfernen von Tags für Repositorys im SCM-Manager. Die durch das Plugin erzeugte Konfiguration "Tag Protection" ist über die globalen Einstellungen aufrufbar.

![Tag Protection Überblick](images/tagprotection/tagprotection-overview.png)


In diesem Abschnitt lassen sich Muster für die zu schützenden Tags erstellen. Dabei können folgende Platzhalter verwendet werden:

* "*\\" für ein oder mehrere Zeichen
* "?" für ein einzelnes Zeichen

Außerdem lassen sich die Berechtigungen des Owners reduzieren. Benutzer, die die Berechtigung haben ein Repository zu verändern (z.B. Owner), können jeden Tag in dem Repository entfernen. Geschützte Tags können bei aktivierter Option dann auch von diesen Benutzern nicht entfernt werden.

## Berechtigungen
Das Tag Protection-Plugin bringt folgende Berechtigung mit: 

* Globale Berechtigung:
    * Global zu schützende Tags konfigurieren: Darf die global zu schützenden Tags verändern
