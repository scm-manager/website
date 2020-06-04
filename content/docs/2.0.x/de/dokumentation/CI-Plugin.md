---
title: CI Plugin
---

Das SCM-CI-Plugin ermöglicht die Anbindungen von Continuous-Integration-Systemen an den SCM-Manager. Insbesondere in Kombination mit dem SCM-Review-Plugin können somit Informationen zu Code-Qualität und Build-Status in Pull Requests und auf Ebene von einzelnen Commits dargestellt werden.

## Integration am Beispiel Jenkins

Voraussetzung zum Datenaustausch zwischen einer Jenkins-Instanz und dem SCM-Manager ist die Installation des SCM-CI-Plugins im SCM-Manager sowie die Installation des "Jenkins-SCM-Plugin" in der Jenkins-Instanz. Das Jenkins-SCM-Plugin sendet vor und nach jedem Start eines Build-Jobs Informationen an den SCM-Manager.

## Statusbalken
Mit dem Review-Plugin werden Pull Requests im SCM-Manager unterstützt. Das SCM-CI-Plugin kann sich in diese Pull Requests einklinken und sie mit nützlichen Informationen anreichern.

In den Pull Request Details zeigt eine Statusbar Informationen von allen integrierten CI-Systemen für diesen Pull Request an.

Mit nur einer Jenkins Instanz und einem Build-Job für einen Feature-Branch könnte das wie folgt aussehen:

![Pull Request Statusbar](images/ci-plugin/statusbar-pending.png)

Dieser Statusbalken könnte je Build-Job-Status in folgenden Varianten auftreten:

#### Laufend
Der Jenkins-Build-Job ist gestartet und noch nicht abgeschlossen.

![Statusbar Pending](images/ci-plugin/status-pending.png)

#### Erfolgreich
Der Jenkins-Build-Job ist erfolgreich durchgelaufen und im Jenkins grün.

![Statusbar Successful](images/ci-plugin/status-success.png)

#### Instabil
Der Jenkins-Build-Job ist gelb. Womöglich sind Unit-Tests fehlgeschlagen.

![Statusbar Unstable](images/ci-plugin/status-unstable.png)

#### Fehlerhaft
Der Jenkins-Build-Job ist rot. Der Job konnte nicht erfolgreich durchlaufen, weil ein Fehler aufgetreten ist.

![Statusbar Unstable](images/ci-plugin/status-failure.png)

Sollte dabei nur eine der Analysen fehlschlagen, würde der Statusbalken bereits rot angezeigt werden. Nur wenn alle Analysen fehlerfrei durchlaufen, wird ein grüner Haken angezeigt.

## Status Dialog

Um weitere Informationen zu den Analysen zu erhalten, öffnet man mit einem Klick auf den Statusbalken einen detaillierten Dialog zu den jeweilgen Status. 

Der Dialog zeigt folgende Informationen an:

- __Status:__ Resultat der Analyse als farblicher Icon
- __Typ:__ Art des CI-System (In diesem Fall Jenkins)
- __Name:__ Name der Analyse (Im diesem Fall heißt der Build-Job "jenkins")
- __Details:__ Link zur ausgeführten Analyse bzw. zum Build-Job


![Statusbar Unstable](images/ci-plugin/status-modal-failure.png)

## Status je Commit
Außer dem Statusbalken für Pull Requests gibt es auch die Möglichkeit sich den Status für jeden einzelnen Commit anzusehen.

Der CI-Status wird in der Liste der Commits rechts über farbliche Icons dargestellt. Diese Icons sind anklickbar und öffnen den gleichen detaillierten Dialog wie beim Klick auf den Statusbalken.

![Status Commits](images/ci-plugin/status-commits.png)

Fährt man mit der Maus über ein Status-Icon, sieht man in dem Tooltip die Zusammensetzung der Auswertung.

![Status Commits](images/ci-plugin/status-commit-hover.png)
