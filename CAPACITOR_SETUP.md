# Capacitor → Google Play — krok po kroku

## 1. Zainstaluj Capacitor i wtyczki

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npm install @capacitor/local-notifications
```

## 2. Zainicjuj Capacitor (tylko raz)

```bash
npx cap init
```
Wpisz:
- App name: `BeerRater`
- App ID: `com.beagleappsstudio.beerrater`
- Web dir: `dist`

Lub skopiuj dołączony `capacitor.config.ts` do głównego folderu projektu.

## 3. Zbuduj aplikację React

```bash
npm run build
```

## 4. Dodaj platformę Android (tylko raz)

```bash
npx cap add android
```

## 5. Synchronizuj przy każdej zmianie

```bash
npm run build && npx cap sync android
```

## 6. Dodaj kanał powiadomień do AndroidManifest.xml

Otwórz `android/app/src/main/AndroidManifest.xml`
Dodaj **przed** `</manifest>`:

```xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS"/>
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM"/>
```

## 7. Dodaj kanał powiadomień w MainActivity.java / MainActivity.kt

W pliku `android/app/src/main/java/.../MainActivity.kt` dodaj:

```kotlin
import com.getcapacitor.community.localnotifications.LocalNotificationsPlugin

class MainActivity: BridgeActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    registerPlugin(LocalNotificationsPlugin::class.java)
    super.onCreate(savedInstanceState)
  }
}
```

## 8. Otwórz w Android Studio

```bash
npx cap open android
```

Następnie:
- **Build → Generate Signed Bundle / APK**
- Wybierz **Android App Bundle (.aab)**
- Zaloguj się kluczem upload key (tak jak przy MusicStudio PRO)
- Wgraj `.aab` do **Google Play Console → Internal Testing**

## 9. Aktualizacja aplikacji (kolejne wersje)

```bash
npm run build
npx cap sync android
# → otwórz Android Studio i generuj nowe AAB
```

## Skróty (wklej do package.json → scripts)

```json
"android:build": "npm run build && npx cap sync android",
"android:open": "npx cap open android"
```

Potem:
```bash
npm run android:build
npm run android:open
```
