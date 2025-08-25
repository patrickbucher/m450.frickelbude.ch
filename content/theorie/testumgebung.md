+++
date = '2025-08-21T20:44:34+02:00'
title = 'Testumgebung'
weight = 5
+++

Das Testobjekt kommt im Entwicklungszyklus auf verschiedenen Umgebungen zur Ausführung, welche in unterschiedlichem Ausmass auch als Testumgebungen verwendet werden. Eine mögliche Konfiguration kann folgendermassen aussehen:

| Umgebung             | Hardware                        | Datenhaltung                                   | Nutzer                    |
|----------------------|---------------------------------|------------------------------------------------|---------------------------|
| Entwicklungsumgebung | Laptop, PC                      | durch Entwickler definierte synthetische Daten | Entwickler                |
| Integrationsumgebung | Server, VM                      | durch ganzes Team gepflegte synthetische Daten | Entwickler, Product Owner |
| Vorproduktion        | produktionsnah                  | aktueller Datenabzug aus der Produktion        | Projektleiter, Tester     |
| Produktion           | leistungsfähig, evtl. redundant | produktive Kundendaten                         | Endanwender               |

Je nach Umgebung sind unterschiedliche Arten von Tests sinnvoll und erlaubt:

- Entwicklungsumgebung: Unit Tests, Integrationstests
- Integrationsumgebung: End-to-End Tests, Systemtests
- Vorproduktion: Systemtests, Performance-Tests, Abnahmetests
- Produktion: tatsächliche Nutzung

## Fragen

1. Warum unterscheidet sich die Datenhaltung je nach Umgebung?
2. Welche Umgebungen verwendet ihr im Lehrbetrieb?

