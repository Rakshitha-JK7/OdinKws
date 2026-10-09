// Adds microphone permissions to the generated Android manifest (run after `npx cap add android`).
const fs = require('fs');
const p = 'android/app/src/main/AndroidManifest.xml';
let x = fs.readFileSync(p, 'utf8');
for (const perm of ['RECORD_AUDIO', 'MODIFY_AUDIO_SETTINGS']) {
  if (!x.includes(perm)) x = x.replace('</manifest>', `    <uses-permission android:name="android.permission.${perm}" />\n</manifest>`);
}
fs.writeFileSync(p, x);
console.log('Manifest patched');
