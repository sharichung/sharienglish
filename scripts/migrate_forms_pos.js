const fs = require("fs");

const jsonPath = "games/vocabulary/vocabulary_B2_themes.json";
const bundlePath = "games/vocabulary/vocabulary_B2_themes.bundle.js";

const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));

function normalizeBasePos(pos) {
  const p = String(pos || "").toLowerCase().trim();
  if (p.includes("noun")) return "noun";
  if (p.includes("verb")) return "verb";
  if (p.includes("adj")) return "adjective";
  if (p.includes("adv")) return "adverb";
  if (p.includes("phrase")) return "phrasal verb";
  return "noun";
}

function inferFormPos(form, fallback = "noun") {
  const text = String(form || "").toLowerCase().trim();
  if (!text) return fallback;
  if (text.includes(" ") && !text.startsWith("more ") && !text.startsWith("most ")) return "phrasal verb";
  if (/ly$/.test(text)) return "adverb";
  if (/ous$|ive$|able$|ible$|ful$|less$|ical$|ic$|al$|ary$|ory$|ent$|ant$/.test(text)) return "adjective";
  if (/ing$|ed$|en$/.test(text)) return "verb";
  if (/tion$|sion$|ment$|ness$|ity$|ship$|ism$|ist$|age$|ance$|ence$|dom$|hood$/.test(text)) return "noun";
  if (/s$/.test(text) && fallback === "noun") return "noun";
  return fallback;
}

let totalWords = 0;
let totalFormsDetailed = 0;

for (const theme of Object.values(data.themes || {})) {
  for (const entry of theme.words || []) {
    totalWords += 1;

    const fallbackPos = normalizeBasePos(entry.pos);
    const sourceForms = Array.isArray(entry.forms) ? entry.forms : [];
    const existingDetailed = Array.isArray(entry.formsDetailed) ? entry.formsDetailed : [];
    const byForm = new Map();

    for (const item of existingDetailed) {
      const form = String(item?.form || "").trim();
      if (!form) continue;
      const pos = String(item?.pos || item?.type || "").trim();
      byForm.set(form.toLowerCase(), { form, pos: pos || inferFormPos(form, fallbackPos) });
    }

    for (const formItem of sourceForms) {
      const form = String(formItem || "").trim();
      if (!form) continue;
      if (!byForm.has(form.toLowerCase())) {
        byForm.set(form.toLowerCase(), { form, pos: inferFormPos(form, fallbackPos) });
      }
    }

    const baseForm = String(entry.word || "").trim();
    if (baseForm && !byForm.has(baseForm.toLowerCase())) {
      byForm.set(baseForm.toLowerCase(), { form: baseForm, pos: inferFormPos(baseForm, fallbackPos) });
    }

    entry.formsDetailed = Array.from(byForm.values());
    totalFormsDetailed += entry.formsDetailed.length;
  }
}

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2) + "\n");
fs.writeFileSync(bundlePath, "window.__VOCAB_B2_THEMES_DATA__ = " + JSON.stringify(data, null, 2) + ";\n");

console.log("migratedWords", totalWords);
console.log("formsDetailedRows", totalFormsDetailed);
