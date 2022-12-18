import {
  packageName
} from "./chunk-4NFBTX2N.mjs";

// src/panel/pinned-storage.ts
function hasProperty(value, key) {
  return Object.prototype.hasOwnProperty.call(value, key);
}
function isValidContext(value) {
  if (typeof value !== "object") {
    return false;
  }
  if (value == null) {
    return false;
  }
  if (Array.isArray(value)) {
    return false;
  }
  const hasAllProperties = ["results", "samples", "copies"].every(
    (key) => hasProperty(value, key)
  );
  if (!hasAllProperties) {
    return false;
  }
  const map = value && value.results && value.results[0] ? value.results[0].map : void 0;
  if (map == null) {
    return false;
  }
  const hasTaskId = Object.keys(map).some((key) => {
    const entry = map[key];
    return hasProperty(entry, "taskId");
  });
  return hasTaskId ? false : true;
}
function getKey(storyName) {
  return `${packageName}-${storyName}`;
}
function savePinned(storyName, results) {
  localStorage.setItem(getKey(storyName), JSON.stringify(results));
}
function clearPinned(storyName) {
  localStorage.removeItem(getKey(storyName));
}
function getPinned(storyName) {
  const raw = localStorage.getItem(getKey(storyName));
  if (!raw) {
    return null;
  }
  const value = JSON.parse(raw);
  if (!isValidContext(value)) {
    console.warn("Unsupported value found in localStorage. Value cleared");
    clearPinned(storyName);
    return null;
  }
  return value;
}

export {
  savePinned,
  clearPinned,
  getPinned
};
