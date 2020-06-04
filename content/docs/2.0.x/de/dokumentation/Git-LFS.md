---
title: Git LFS
---

Bei LFS (Large File Storage) handelt es sich um eine Erweiterung für Git, mit deren Hilfe auch große Dateien effizient innerhalb von Git Repositories verwaltet werden können. Hierfür werden Dateien, deren Name einem festzulegenden Muster (z. B. *.jpg oder *.jar) entsprechen, nicht innerhalb des Repositories gespeichert. Diese Dateien werden stattdessen in einem separaten Bereich abgelegt. Für die Dateien werden innerhalb des Repositories dann nur sogenannte Pointer gespeichert.

Wird nun ein solches Repository "geklont", wird erst beim "checkout" geprüft, ob solche Pointer vorhanden sind. Diese werden dann durch die Datei aus dem separaten Speicher ersetzt. Der Checkout entspricht dem Zeitpunkt, zu dem der konkrete Stand der Dateien geschrieben wird.

Dieses Vorgehen hat zur Folge, dass man beim Wechsel zwischen Revisionen unter Umständen eine Verbindung zum Server benötigt, wenn eine durch LFS verwaltete Datei noch nicht lokal vorhanden ist.

Während der SCM-Manager schon länger das LFS-Protokoll im Git-Plugin unterstützt, werden mit der neuen Version LFS-Dateien auch in der Oberfläche des SCM-Managers transparent angezeigt bzw. beim Upload von neuen Dateien entsprechend abgelegt. Die Pointer werden bspw. in der Detail-Ansicht zu einem Commit dargestellt.

![LFS Pointer in einem Commit](images/git/lfs_pointer_diff.png)

Eine Anleitung zum Einrichten von Git LFS und weiterführende Dokumentation findet man auf der offiziellen Webseite: [https://git-lfs.github.com/](https://git-lfs.github.com/).
