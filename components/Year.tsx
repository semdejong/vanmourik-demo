"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function yearOnClient() {
  return String(new Date().getFullYear());
}

function yearOnServer() {
  return "";
}

/** Huidig kalenderjaar, zoals de oude footer dat met JavaScript deed. */
export default function Year() {
  const year = useSyncExternalStore(subscribe, yearOnClient, yearOnServer);
  return <span className="inline-block min-w-[4ch]">{year || "\u00a0"}</span>;
}
