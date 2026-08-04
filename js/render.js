// Renders the hero postmark + the entry timeline from `entries` in data.js.
// You should not need to edit this file to add content — see data.js instead.

const MONTHS = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function formatPostmark(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return { month: MONTHS[m - 1], day: String(d).padStart(2, "0"), year: y };
}

function postmarkHTML(dateStr, location) {
  const { month, day, year } = formatPostmark(dateStr);
  return `
    <div class="postmark">
      <div class="postmark-ring">
        <div class="postmark-top">&middot; AIR MAIL &middot;</div>
        <div class="postmark-date">${month} ${day}</div>
        <div class="postmark-loc">${location}</div>
        <div class="postmark-year">${year}</div>
      </div>
      <div class="postmark-cancel"></div>
    </div>`;
}

function photosHTML(photos) {
  if (!photos || photos.length === 0) return "";
  const singleClass = photos.length === 1 ? " single" : "";
  return `
    <div class="entry-photos${singleClass}">
      ${photos.map(p => `
        <figure>
          <img src="${p.src}" alt="${p.caption || ""}" loading="lazy">
          ${p.caption ? `<figcaption>${p.caption}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>`;
}

function textHTML(text) {
  return text
    .split("\n\n")
    .map(para => `<p>${para}</p>`)
    .join("");
}

function renderEntries() {
  const container = document.getElementById("entries");

  if (typeof entries === "undefined" || !Array.isArray(entries)) {
    container.innerHTML = errorBanner(
      "Couldn't find your entries.",
      "js/data.js didn't load correctly — check the browser console (F12) for a red error message, which will point to the exact line to fix. A common cause is a missing comma between entries or between photo objects."
    );
    return;
  }

  try {
    const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = sorted.map((entry, i) => `
      <article class="entry" style="--i:${i}">
        <div class="entry-marker">${postmarkHTML(entry.date, entry.location)}</div>
        <div class="entry-body"${entry.textSize ? ` style="--entry-text-size: ${entry.textSize}"` : ""}>
          <h2>${entry.title}</h2>
          ${photosHTML(entry.photos)}
          <div class="entry-text" style="${entry.fontSize ? `font-size: ${entry.fontSize};` : ""}">${textHTML(entry.text)}</div>
        </div>
      </article>
    `).join("");

    // Hero postmark shows the most recent dispatch
    if (sorted.length) {
      document.getElementById("hero-postmark").innerHTML = postmarkHTML(sorted[0].date, sorted[0].location);
    }
  } catch (err) {
    console.error("Error rendering entries:", err);
    container.innerHTML = errorBanner(
      "Something's wrong with one of your entries.",
      `${err.message} — check the browser console (F12) for details on which entry and field triggered this.`
    );
  }
}

function errorBanner(title, detail) {
  return `
    <div style="font-family: monospace; background: #f6e6e2; border: 1px solid #A63A2C; color: #1E2A38; padding: 1.5rem; border-radius: 4px; max-width: 700px; margin: 0 auto;">
      <strong>${title}</strong>
      <p style="margin: 0.6rem 0 0; opacity: 0.85;">${detail}</p>
    </div>`;
}

document.addEventListener("DOMContentLoaded", renderEntries);
