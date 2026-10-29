(() => {
  "use strict";

  const translations = {
    pl: {
      brand_sub: "NIEZALEŻNY PROJEKT GRY",
      nav_about: "O projekcie",
      nav_screenshots: "Zrzuty ekranu",
      nav_changelog: "Lista zmian",
      nav_get_build: "Pobierz wersję ↗",
      hero_subtitle: "ZNAJDŹ WŁASNĄ DROGĘ.",
      hero_desc: "Niezależny projekt z otwartym światem osadzony w fikcyjnej wersji Południowej Kalifornii. Od słonecznych wybrzeży i rozległych przedmieść po górskie drogi i suche, śródlądowe krajobrazy – świat powstaje kawałek po kawałku.",
      hero_btn_download: "Pobierz najnowszą wersję ↗",
      hero_btn_explore: "Eksploruj świat ↓",
      meta_engine: "SILNIK",
      meta_status: "STATUS",
      meta_status_val: "W ROZWOJU",
      meta_notes_title: "NOTATKI Z TERENU",
      meta_notes_val: "ZACHODNIA KRAWĘDŹ",
      meta_scroll: "PRZEWIŃ, ABY ODKRYWAĆ ↓",
      intro_title: "Fikcyjny region. Przestrzeń do wędrówki.",
      intro_p1: "Los Calyro to rozwijany projekt gry z otwartym światem tworzony w Unity, inspirowany zróżnicowaną geografią Południowej Kalifornii. Znajdziesz tu nadmorskie odcinki, gęstą miejską zabudowę, ciche dzielnice, kręte wzgórza i surowy teren rozciągający się poza przedmieściami.",
      intro_p2: "To niezależny projekt w aktywnej fazie rozwoju. Funkcje, lokacje i oprawa wizualna mogą ulegać zmianie wraz z rozwojem świata. Strona aktualizuje się automatycznie na podstawie plików w tym repozytorium, dzięki czemu nowe notatki i zrzuty ekranu mogą pojawiać się bez konieczności edycji samej witryny.",
      screens_title: "Świat w budowie.",
      screens_p: "Migawki z wersji testowej.<br>Więcej w miarę jak świat nabiera kształtów.",
      screens_loading: "Ładowanie zrzutów ekranu...",
      screens_footnote: "Zrzuty ekranu są ładowane automatycznie z folderu <code>screen/</code>.",
      changelog_title: "Co się zmienia.",
      changelog_p: "Krótkie aktualizacje z procesu<br>tworzenia gry.",
      changelog_loading: "Ładowanie aktualizacji...",
      changelog_footnote: "Pliki tekstowe z folderu <code>changelog/</code> pojawiają się tutaj automatycznie.",
      download_title: "Świat czeka, aż zostanie zbudowany.",
      download_p: "Pobierz najnowszą dostępną wersję i zobacz, jak projekt nabiera kształtów. Jest to wersja deweloperska, więc spodziewaj się niedoróbek i nieukończonych obszarów.",
      download_win: "Pobierz dla Windows ↓",
      download_lin: "Wersja dla Linux ↓",
      footer_desc: "Fikcyjny świat inspirowany Południową Kalifornią. Tworzony niezależnie w Unity.",
      footer_github: "Zobacz na GitHubie ↗",
      err_api: "Osiągnięto limit zapytań GitHub API. Spróbuj ponownie później.",
      err_folder: "Zwrócono błąd {status} dla folderu {folder}/.",
      err_no_screens: "Brak zrzutów ekranu. Dodaj pliki .png, .jpg, .webp lub .gif do folderu screen/.",
      err_screen_load: "Nie udało się załadować zrzutów ekranu. Sprawdź, czy repozytorium jest publiczne i czy folder screen/ istnieje.",
      err_no_updates: "Nie opublikowano jeszcze żadnych aktualizacji. Dodaj plik .txt do folderu changelog/.",
      err_changelog_load: "Nie udało się załadować aktualizacji. Sprawdź, czy repozytorium jest publiczne i czy folder changelog/ istnieje.",
      status_screens_loaded: "Zrzutów ekranu: {count} (załadowano z screen/). Dodaj kolejny obraz i zrób push, aby zaktualizować tę sekcję.",
      status_screens_fail: "Nie można załadować zrzutów ekranu.",
      status_updates_loaded: "Aktualizacji: {count} (załadowano z changelog/). Dodaj plik .txt i zrób push, aby zaktualizować tę sekcję.",
      status_updates_fail: "Nie można załadować aktualizacji.",
      status_no_release: "Nie opublikowano jeszcze żadnego wydania. Przyciski pobierania zadziałają po pierwszej publikacji.",
      status_config_username: "Ustaw swoją nazwę użytkownika GitHub w config.js przed publikacją strony.",
      status_asset_missing: "Oczekiwane archiwum ZIP nie zostało jeszcze dołączone do najnowszego wydania.",
      update_loading: "Ładowanie aktualizacji…",
      update_empty: "Ta aktualizacja nie zawiera jeszcze tekstu.",
      update_fail: "Nie udało się załadować tej aktualizacji. Sprawdź format pliku i widoczność repozytorium.",
      dev_update: "AKTUALIZACJA PROJEKTU"
    },
    en: {
      brand_sub: "INDEPENDENT GAME PROJECT",
      nav_about: "About",
      nav_screenshots: "Screenshots",
      nav_changelog: "Changelog",
      nav_get_build: "Get the build ↗",
      hero_subtitle: "Find your own way out there.",
      hero_desc: "An independent open-world project set in a fictional take on Southern California. From sunlit coastlines and sprawling suburbs to mountain roads and dry inland landscapes, the world is being built one piece at a time.",
      hero_btn_download: "Download latest build ↗",
      hero_btn_explore: "Explore the world ↓",
      meta_engine: "ENGINE",
      meta_status: "STATUS",
      meta_status_val: "IN DEVELOPMENT",
      meta_notes_title: "FIELD NOTES",
      meta_notes_val: "THE WESTERN EDGE",
      meta_scroll: "SCROLL TO EXPLORE ↓",
      intro_title: "A fictional region. Room to roam.",
      intro_p1: "Los Calyro is a work-in-progress open-world game made in Unity, inspired by the varied geography of Southern California. Think coastal stretches, dense urban sprawl, quiet neighbourhoods, winding hills and rugged terrain beyond the suburbs.",
      intro_p2: "This is an independent project in active development. Features, locations and visuals may change as the world grows. The page updates from the files in this repository, so new notes and screenshots can appear without editing the website itself.",
      screens_title: "World in progress.",
      screens_p: "Snapshots from the build.<br>More as the world takes shape.",
      screens_loading: "Loading screenshots…",
      screens_footnote: "Screenshots are loaded automatically from <code>screen/</code>.",
      changelog_title: "What's changing.",
      changelog_p: "Short updates from the<br>development process.",
      changelog_loading: "Loading updates…",
      changelog_footnote: "Text files in <code>changelog/</code> appear here automatically.",
      download_title: "The world is waiting to be built.",
      download_p: "Grab the latest available build and see how the project is coming together. This is an in-development build, so expect rough edges and unfinished areas.",
      download_win: "Download for Windows ↓",
      download_lin: "Linux build ↓",
      footer_desc: "A fictional world inspired by Southern California. Made independently with Unity.",
      footer_github: "View on GitHub ↗",
      err_api: "GitHub API rate limit reached. Try again later.",
      err_folder: "GitHub returned {status} for {folder}/.",
      err_no_screens: "No screenshots yet. Add .png, .jpg, .webp or .gif files to the screen/ folder.",
      err_screen_load: "Check that this is a public repository and that the screen/ folder exists.",
      err_no_updates: "No updates published yet. Add a .txt file to the changelog/ folder.",
      err_changelog_load: "Check that this is a public repository and that the changelog/ folder exists.",
      status_screens_loaded: "{count} screenshot{s} loaded from screen/. Add another image and push it to update this section.",
      status_screens_fail: "Screenshots could not be loaded.",
      status_updates_loaded: "{count} update{s} loaded from changelog/. Add a .txt file and push it to update this section.",
      status_updates_fail: "Updates could not be loaded.",
      status_no_release: "No release published yet. The download buttons will work after the first release.",
      status_config_username: "Set your GitHub username in config.js before publishing.",
      status_asset_missing: "The expected ZIP is not attached to the latest release yet.",
      update_loading: "Loading update…",
      update_empty: "This update has no text yet.",
      update_fail: "Could not load this update. Check the file format and repository visibility.",
      dev_update: "DEVELOPMENT UPDATE"
    }
  };

  let currentLang = localStorage.getItem("losCalyroLang") || "pl";

  const config = window.LOS_CALYRO_CONFIG || {};
  const hostParts = window.location.hostname.split(".");
  const detectedOwner = hostParts.length > 2 && hostParts.slice(-2).join(".") === "github.io" ? hostParts[0] : "";
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const owner = config.owner || detectedOwner || "YOUR_GITHUB_USERNAME";
  const websiteRepo = detectedOwner ? (pathParts[0] || `${detectedOwner}.github.io`) : "loscalyro-website";
  const gameRepo = config.gameRepo || "loscalyro";
  const apiBase = `https://api.github.com/repos/${encodeURIComponent(owner)}`;
  const siteApi = `${apiBase}/${encodeURIComponent(websiteRepo)}/contents`;
  const gameApi = `${apiBase}/${encodeURIComponent(gameRepo)}`;
  const gamePage = `https://github.com/${owner}/${gameRepo}`;
  const $ = (selector) => document.querySelector(selector);

  if ($("#year")) $("#year").textContent = new Date().getFullYear();
  if ($("#github-link")) $("#github-link").href = gamePage;

  const menuToggle = $("#menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const nav = document.querySelector("nav");
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }
  document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    if (nav) nav.classList.remove("open");
    if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
  }));

  function applyTranslations() {
    const t = translations[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.innerHTML = t[key];
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === currentLang);
    });
  }

  function changeLanguage(lang) {
    if (translations[lang] && lang !== currentLang) {
      currentLang = lang;
      localStorage.setItem("losCalyroLang", lang);
      applyTranslations();
      if (owner !== "YOUR_GITHUB_USERNAME") {
        loadScreenshots();
        loadChangelog();
        loadRelease();
      }
    }
  }

  // Bind click event listeners directly to buttons to avoid inline `window.` reference constraints within the IIFE scope
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      changeLanguage(lang);
    });
  });

  function prettyName(filename) {
    return filename.replace(/\.txt$/i, "")
      .replace(/^\d{4}[-_]\d{2}[-_]\d{2}[-_]?/, "")
      .replace(/[_-]+/g, " ")
      .replace(/[a-z]/g, c => c.toUpperCase()) || translations[currentLang].dev_update;
  }

  function dateFromFilename(filename) {
    const match = filename.match(/^(\d{4})[-_](\d{2})[-_](\d{2})/);
    if (!match) return translations[currentLang].dev_update;
    const date = new Date(`${match[1]}-${match[2]}-${match[3]}T12:00:00Z`);
    if (Number.isNaN(date.getTime())) return translations[currentLang].dev_update;
    const locale = currentLang === "pl" ? "pl-PL" : "en-GB";
    return date.toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" }).toUpperCase();
  }

  async function listFolder(folder) {
    const response = await fetch(`${siteApi}/${folder}`, {
      headers: { "Accept": "application/vnd.github+json" },
      cache: "no-store"
    });
    if (!response.ok) {
      if (response.status === 404) return [];
      if (response.status === 403) throw new Error(translations[currentLang].err_api);
      throw new Error(translations[currentLang].err_folder.replace("{status}", response.status).replace("{folder}", folder));
    }
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  }

  function showEmpty(container, message) {
    if (!container) return;
    container.replaceChildren();
    const el = document.createElement("div");
    el.className = "empty-state";
    el.textContent = message;
    container.appendChild(el);
  }

  async function loadScreenshots() {
    const grid = $("#screens-grid");
    if (!grid) return;
    try {
      const files = (await listFolder("screen"))
        .filter(file => file.type === "file" && /\.(png|jpe?g|webp|gif|avif)$/i.test(file.name))
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
      if (!files.length) {
        showEmpty(grid, translations[currentLang].err_no_screens);
        return;
      }
      grid.replaceChildren();
      files.forEach((file, index) => {
        const card = document.createElement("article");
        card.className = "screen-card";
        const imageWrap = document.createElement("div");
        imageWrap.className = "screen-image-wrap";
        const img = document.createElement("img");
        img.src = file.download_url;
        img.alt = prettyName(file.name);
        img.loading = "lazy";
        img.addEventListener("click", () => window.open(file.download_url, "_blank", "noopener"));
        const number = document.createElement("span");
        number.className = "screen-number";
        number.textContent = `FRAME ${String(index + 1).padStart(2, "0")}`;
        imageWrap.append(img, number);
        const caption = document.createElement("div");
        caption.className = "screen-caption";
        const title = document.createElement("strong");
        title.textContent = prettyName(file.name);
        const type = document.createElement("span");
        type.textContent = file.name.split(".").pop().toUpperCase();
        caption.append(title, type);
        card.append(imageWrap, caption);
        grid.appendChild(card);
      });
      if ($("#screens-status")) $("#screens-status").textContent = translations[currentLang].status_screens_loaded.replace("{count}", files.length).replace("{s}", files.length === 1 ? "" : "s");
    } catch (error) {
      showEmpty(grid, `${error.message} ${translations[currentLang].err_screen_load}`);
      if ($("#screens-status")) $("#screens-status").textContent = translations[currentLang].status_screens_fail;
    }
  }

  async function loadChangelog() {
    const list = $("#changelog-list");
    if (!list) return;
    try {
      const files = (await listFolder("changelog"))
        .filter(file => file.type === "file" && /\.txt$/i.test(file.name))
        .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true, sensitivity: "base" }));
      if (!files.length) {
        showEmpty(list, translations[currentLang].err_no_updates);
        return;
      }
      list.replaceChildren();
      for (const file of files) {
        const entry = document.createElement("article");
        entry.className = "change-entry";
        const date = document.createElement("div");
        date.className = "change-date";
        date.textContent = dateFromFilename(file.name);
        const body = document.createElement("div");
        body.className = "change-body";
        const heading = document.createElement("h3");
        heading.textContent = prettyName(file.name);
        const content = document.createElement("p");
        content.textContent = translations[currentLang].update_loading;
        const filename = document.createElement("span");
        filename.className = "change-file";
        filename.textContent = file.name;
        body.append(heading, content, filename);
        entry.append(date, body);
        list.appendChild(entry);
        try {
          const textResponse = await fetch(file.download_url, { cache: "no-store" });
          if (!textResponse.ok) throw new Error("Could not load text");
          content.textContent = (await textResponse.text()).trim() || translations[currentLang].update_empty;
        } catch {
          content.textContent = translations[currentLang].update_fail;
        }
      }
      if ($("#changelog-status")) $("#changelog-status").textContent = translations[currentLang].status_updates_loaded.replace("{count}", files.length).replace("{s}", files.length === 1 ? "" : "s");
    } catch (error) {
      showEmpty(list, `${error.message} ${translations[currentLang].err_changelog_load}`);
      if ($("#changelog-status")) $("#changelog-status").textContent = translations[currentLang].status_updates_fail;
    }
  }

  async function loadRelease() {
    const windowsButton = $("#download-windows");
    const linuxButton = $("#download-linux");
    const releasePage = $("#release-page");
    if (!windowsButton || !linuxButton) return;
    windowsButton.href = `${gamePage}/releases/latest/download/${encodeURIComponent(config.windowsAsset || "LosCalyro-Windows.zip")}`;
    linuxButton.href = `${gamePage}/releases/latest/download/${encodeURIComponent(config.linuxAsset || "LosCalyro-Linux.zip")}`;
    if (releasePage) releasePage.href = `${gamePage}/releases/latest`;

    try {
      const response = await fetch(`${gameApi}/releases/latest`, {
        headers: { "Accept": "application/vnd.github+json" },
        cache: "no-store"
      });
      if (response.status === 404) {
        if ($("#release-label")) $("#release-label").textContent = translations[currentLang].status_no_release;
        if (releasePage) releasePage.href = `${gamePage}/releases`;
        return;
      }
      if (!response.ok) throw new Error("Release details unavailable");
      const release = await response.json();
      const date = release.published_at
        ? new Date(release.published_at).toLocaleDateString(currentLang === "pl" ? "pl-PL" : "en-GB", { day: "2-digit", month: "short", year: "numeric" })
        : "---";
      if ($("#release-label")) $("#release-label").textContent = `${release.tag_name || "Latest build"} · ${currentLang === "pl" ? "wydano" : "published"} ${date}`;
      if (releasePage) releasePage.href = release.html_url || `${gamePage}/releases/latest`;
      const assets = Array.isArray(release.assets) ? release.assets.map(asset => asset.name) : [];
      if (!assets.includes(config.windowsAsset || "LosCalyro-Windows.zip")) {
        windowsButton.href = release.html_url || `${gamePage}/releases/latest`;
        windowsButton.title = translations[currentLang].status_asset_missing;
      }
      if (!assets.includes(config.linuxAsset || "LosCalyro-Linux.zip")) {
        linuxButton.href = release.html_url || `${gamePage}/releases/latest`;
        linuxButton.title = translations[currentLang].status_asset_missing;
      }
    } catch {
      if ($("#release-label")) $("#release-label").textContent = currentLang === "pl" ? "Nie udało się załadować informacji o wydaniu. Sprawdź sekcję wydań bezpośrednio na GitHub." : "Release details could not be loaded. Open the releases page to check the latest build.";
    }
  }

  applyTranslations();

  if (owner === "YOUR_GITHUB_USERNAME") {
    showEmpty($("#screens-grid"), "Set your GitHub username in config.js or publish this site under USERNAME.github.io.");
    showEmpty($("#changelog-list"), "Set your GitHub username in config.js or publish this site under USERNAME.github.io.");
    if ($("#release-label")) $("#release-label").textContent = translations[currentLang].status_config_username;
    if ($("#github-link")) $("#github-link").href = "https://github.com";
    windowsButton.href = "#";
    linuxButton.href = "#";
  } else {
    loadScreenshots();
    loadChangelog();
    loadRelease();
  }
})();
