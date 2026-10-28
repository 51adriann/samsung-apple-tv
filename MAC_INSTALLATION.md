# Installationsplan am Wochenende (Mac)

1. **Vorher sichern:** TV-Modell, Firmware-Version, aktuelle Smart-Hub-Anordnung und DNS-Einstellung fotografieren. Aktuelle TV-Einstellungen nicht zurücksetzen.
2. Mac und Fernseher mit demselben WLAN verbinden. Lokale IP des TVs in Einstellungen → Allgemein → Netzwerk → Netzwerkstatus → IP-Einst. ablesen (kann sich ändern).
3. Tizen Studio mit **TV Extension** und Zertifikatsmanager von der offiziellen Samsung Developer Dokumentation installieren: https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html
4. Auf dem Samsung im Apps-Bereich den Entwicklermodus gemäß offizieller Samsung-Anleitung aktivieren. Die Mac-IP eintragen und den TV neu starten: https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html
5. In Tizen Studio ein TV Web Application-Projekt öffnen/importieren und diesen Quellcode verwenden. Die `config.xml` auf Gültigkeit prüfen, insbesondere Paket-ID/Anwendungs-ID. Ein passendes Samsung-TV-Zertifikatsprofil erstellen. Für ein echtes Gerät wird ggf. die DUID zur Zertifikatserstellung benötigt.
6. Zuerst auf Emulator/Simulator testen. Danach TV mit Device Manager verbinden und das signierte Tizen-Paket (.wgt) installieren.
7. Testprotokoll: App startet, links/rechts, OK, Galerie nach 10 Min, Bildwechsel nach 60 Sek, Zurück-Taste, Home-Taste, Netflix/Disney+/YouTube/Prime/Spotify über originalen Smart Hub, AirPlay, Neustart.
8. Screenshots nach jedem Meilenstein machen und erst nach Kontrolle weitergehen.

**Keine automatischen Systemänderungen.** Weder Root, ADB, Systempakete deaktivieren noch Firmware flashen. Die Kompatibilität mit der TV-Firmware muss am Gerät getestet werden.

## Wiederherstellung
Die eigene App in Samsung Apps/App-Verwaltung entfernen, sofern sie dort angezeigt wird. Alternativ über Tizen Studio/Device Manager die eigene App `Art Gallery Home` deinstallieren. Die Original-Home-Taste öffnet weiterhin den Samsung Smart Hub. Ein vollständiges Backup der Samsung-Firmware ist damit nicht möglich.

DNS-Rückstellung: Einstellungen → Allgemein → Netzwerk → Netzwerkstatus → IP-Einst. → DNS-Einst. → Automatisch erhalten. Zuvor manuell gesetzt: `94.140.14.14`, ursprünglicher DNS: `192.168.1.1` (kann sich bei Netzwechsel ändern).
