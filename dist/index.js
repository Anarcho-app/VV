// index.jsx
import React from "react";
function Jam({jamUrl, roomId, params, ...props}) {
  jamUrl = jamUrl || "https://jam.systems";
  if (!jamUrl.endsWith("/"))
    jamUrl = jamUrl + "/";
  let hash = !params ? "" : "#" + encodeBase64Url(params);
  return /* @__PURE__ */ React.createElement("iframe", {
    src: `${jamUrl}${roomId || ""}${hash}`,
    allow: "microphone *; screen-wake-lock *",
    ...props
  });
}
function JitsiJam({jitsiUrl, roomId, params, ...props}) {
  jitsiUrl = jitsiUrl || "https://meet.jit.si";
  if (!jitsiUrl.endsWith("/"))
    jitsiUrl = jitsiUrl + "/";
  let hash = "";
  return /* @__PURE__ */ React.createElement("iframe", {
    src: `${jitsiUrl}${roomId || ""}${hash}`,
    allow: "microphone *; screen-wake-lock *",
    ...props
  });
}
function encodeBase64Url(object) {
  let bytes = new TextEncoder().encode(JSON.stringify(object));
  let n = bytes.length;
  let chars = new Array(n);
  for (let i = 0; i < n; i++) {
    chars[i] = String.fromCharCode(bytes[i]);
  }
  return btoa(chars.join("")).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
export {
  Jam,
  JitsiJam
};
