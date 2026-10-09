# Odin Recorder (Android APK)

## Build the APK without Android Studio
1. Create a GitHub repo and push this folder (audio is git-ignored on purpose).
2. Open the repo's **Actions** tab, wait for "Build APK" to finish (about 5 minutes).
3. Open the finished run, download the **odin-recorder-apk** artifact, unzip it.
4. Copy `app-debug.apk` to the phone and install it (allow "install unknown apps" if asked).

## Build locally instead
    npm install && npx cap add android && node scripts/patch-manifest.js
    npx cap sync android && cd android && ./gradlew assembleDebug

## Using it
- First launch asks for microphone permission. If you tap Don't allow, use Settings > Apps > Odin Recorder > Permissions.
- Every clip is written the moment it is recorded to `Android/data/com.odin.recorder/files/OdinDataset/<class>/`.
- **Export ZIP** packs all clips + metadata.csv and opens the share sheet (Drive, WhatsApp, email, Files).
- Uninstalling the app deletes the clips, so export first.
