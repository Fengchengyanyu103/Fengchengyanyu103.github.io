const tracks = [
  {
    title: "他不懂",
    artist: "张杰",
    en: "TA BU DONG",
    mood: "深夜 / 克制",
    displayMood: "深夜 · 克制",
    duration: "03:51",
    description: "有些沉默并不是没有答案，只是歌声比语言更先抵达。",
    src: "assets/audio/01-ta-bu-dong.mp3",
    cover: "assets/images/optimized/portrait-bw-960.webp",
    accent: "#58a8ff",
    accent2: "#7964ff",
    rgb: "88, 168, 255",
    filter: "grayscale(1) contrast(1.05)",
  },
  {
    title: "三生三世",
    artist: "张杰",
    en: "SAN SHENG SAN SHI",
    mood: "宿命 / 浪漫",
    displayMood: "宿命 · 浪漫",
    duration: "04:17",
    description: "时间拉长了相遇，也让一段旋律拥有穿越故事的重量。",
    src: "assets/audio/02-san-sheng-san-shi.mp3",
    cover: "assets/images/optimized/portrait-mobile-1080.webp",
    accent: "#b18cff",
    accent2: "#667cff",
    rgb: "177, 140, 255",
    filter: "saturate(.72) contrast(1.05)",
  },
  {
    title: "天下",
    artist: "张杰",
    en: "TIAN XIA",
    mood: "江湖 / 热血",
    displayMood: "江湖 · 热血",
    duration: "03:41",
    description: "鼓点展开辽阔的远方，熟悉的热血在下一秒重新归队。",
    src: "assets/audio/03-tian-xia.mp3",
    cover: "assets/images/optimized/stage-black-1400.webp",
    accent: "#d3a34c",
    accent2: "#ff6848",
    rgb: "211, 163, 76",
    filter: "saturate(.72) contrast(1.1)",
  },
  {
    title: "万物不如你",
    artist: "张杰",
    en: "WAN WU BU RU NI",
    mood: "东方 / 深情",
    displayMood: "东方 · 深情",
    duration: "04:00",
    description: "万千景象从身边经过，最后仍有一个名字停在光里。",
    src: "assets/audio/04-wan-wu-bu-ru-ni.mp3",
    cover: "assets/images/optimized/stage-blue-1400.webp",
    accent: "#79c8ff",
    accent2: "#6d69ff",
    rgb: "121, 200, 255",
    filter: "saturate(.84) contrast(1.03)",
  },
  {
    title: "只要平凡",
    artist: "张杰",
    en: "ZHI YAO PING FAN",
    mood: "温暖 / 治愈",
    displayMood: "温暖 · 治愈",
    duration: "04:06",
    description: "宏大的世界安静下来，平凡本身也可以是一种坚定。",
    src: "assets/audio/05-zhi-yao-ping-fan.mp3",
    cover: "assets/images/optimized/portrait-red-close-1080.webp",
    accent: "#efb66b",
    accent2: "#ff705c",
    rgb: "239, 182, 107",
    filter: "saturate(.7) contrast(1.02)",
  },
  {
    title: "逆战",
    artist: "张杰",
    en: "NI ZHAN",
    mood: "高燃 / 无畏",
    displayMood: "高燃 · 无畏",
    duration: "03:51",
    description: "当红色信号亮起，所有犹豫都被留在出发之前。",
    src: "assets/audio/06-ni-zhan.mp3",
    cover: "assets/images/optimized/portrait-red-1080.webp",
    accent: "#ff405d",
    accent2: "#ff7b3d",
    rgb: "255, 64, 93",
    filter: "saturate(1.05) contrast(1.04)",
  },
  {
    title: "明天过后",
    artist: "张杰",
    en: "MING TIAN GUO HOU",
    mood: "回望 / 坚定",
    displayMood: "回望 · 坚定",
    duration: "03:58",
    description: "把答案交给时间，明天过后，我们仍然循着声音前行。",
    src: "assets/audio/07-ming-tian-guo-hou.mp3",
    cover: "assets/images/optimized/hero-blue-1280.webp",
    accent: "#4da3ff",
    accent2: "#46d6e8",
    rgb: "77, 163, 255",
    filter: "saturate(.86) contrast(1.02)",
  },
  {
    title: "身骑白马",
    artist: "张杰",
    en: "SHEN QI BAI MA",
    mood: "现场 / 自由",
    displayMood: "现场 · 自由",
    duration: "05:35",
    description: "一段熟悉的旋律换上新的呼吸，在现场奔向更远的地方。",
    src: "assets/audio/08-shen-qi-bai-ma.mp3",
    cover: "assets/images/optimized/stage-crowd-1400.webp",
    accent: "#75a7ff",
    accent2: "#b16cff",
    rgb: "117, 167, 255",
    filter: "saturate(.9) contrast(1.03)",
  },
  {
    title: "轻舟",
    artist: "张杰",
    en: "QING ZHOU",
    mood: "远行 / 释然",
    displayMood: "远行 · 释然",
    duration: "05:27",
    description: "把沉重留在身后，让声音带着自己驶向更开阔的水面。",
    src: "assets/audio/09-qing-zhou.mp3",
    cover: "assets/images/optimized/portrait-mobile-1080.webp",
    accent: "#65d2c5",
    accent2: "#58a8ff",
    rgb: "101, 210, 197",
    filter: "saturate(.68) contrast(1.04)",
  },
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const audio = $("#audio");
const trackList = $("#track-list");
const progress = $("#progress");
const volume = $("#volume");
const mainPlay = $("#main-play");
const sectionPlay = $("#section-play");
const heroPlay = $("#hero-play");
const muteButton = $("#mute");
const menuButton = $(".menu-toggle");
const mobileVolumeToggle = $("#mobile-volume-toggle");
const player = $(".player");
const soundWave = $("#sound-wave");
const waveContext = soundWave?.getContext("2d");
let currentTrack = 0;
let isSeeking = false;
let previousVolume = 0.75;
let toastTimer;
let menuReturnFocus = null;
let waveFrame;
let waveStartedAt = 0;
let waveClearTimer;

function resizeSoundWave() {
  if (!soundWave || !waveContext) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 1.75);
  const width = Math.round(window.innerWidth * ratio);
  const height = Math.round(window.innerHeight * ratio);
  if (soundWave.width === width && soundWave.height === height) return;
  soundWave.width = width;
  soundWave.height = height;
  waveContext.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function waveEnergy() {
  const time = Number.isFinite(audio.currentTime) ? audio.currentTime : 0;
  const breathing = Math.sin(time * .62) * .045 + Math.sin(time * .27 + 1.2) * .035;
  return Math.max(.16, .28 + audio.volume * .13 + breathing);
}

function drawSoundWave(now) {
  if (!waveContext || audio.paused) {
    waveFrame = undefined;
    return;
  }
  resizeSoundWave();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const playerHeight = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--player-h")) || 80;
  const centerY = height + playerHeight * .88;
  const minimumRadius = Math.min(width, height) * .28;
  const maximumRadius = Math.hypot(width * .62, height * 1.08);
  const energy = waveEnergy();
  const elapsed = now - waveStartedAt;
  const cycle = 24000;
  const rgb = tracks[currentTrack].rgb.split(",").map(Number);
  const points = Math.max(150, Math.round(width / 7));

  waveContext.clearRect(0, 0, width, height);
  waveContext.lineCap = "round";
  waveContext.lineJoin = "round";

  for (let layer = 0; layer < 7; layer += 1) {
    const phase = ((elapsed / cycle) + layer / 7) % 1;
    const easedPhase = phase * phase * (3 - 2 * phase);
    const radius = minimumRadius + (maximumRadius - minimumRadius) * easedPhase;
    const fade = Math.pow(Math.sin(Math.PI * phase), 1.15);
    const amplitude = (13 + energy * 44) * (1 - phase * .18);
    const alpha = fade * (.055 + energy * .13);

    waveContext.beginPath();
    for (let point = 0; point <= points; point += 1) {
      const progress = point / points;
      const angle = Math.PI + progress * Math.PI;
      const envelope = Math.pow(Math.sin(progress * Math.PI), 2.25);
      const sharedDrift = elapsed * .000075;
      const firstSine = Math.sin(angle * 4 + sharedDrift + layer * .12);
      const secondSine = Math.sin(angle * 7 - sharedDrift * .62 + layer * .08) * .26;
      const displacement = (firstSine + secondSine) * amplitude * envelope;
      const x = centerX + Math.cos(angle) * (radius + displacement);
      const y = centerY + Math.sin(angle) * (radius + displacement * .68);
      if (point === 0) waveContext.moveTo(x, y);
      else waveContext.lineTo(x, y);
    }
    waveContext.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
    waveContext.lineWidth = .58 + energy * .62;
    waveContext.shadowColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha * .62})`;
    waveContext.shadowBlur = 3 + energy * 6;
    waveContext.stroke();
  }

  waveContext.shadowBlur = 0;
  waveFrame = requestAnimationFrame(drawSoundWave);
}

function startSoundWave() {
  if (!waveContext || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  clearTimeout(waveClearTimer);
  if (waveFrame) return;
  waveStartedAt = performance.now();
  waveFrame = requestAnimationFrame(drawSoundWave);
}

function stopSoundWave() {
  if (waveFrame) cancelAnimationFrame(waveFrame);
  waveFrame = undefined;
  clearTimeout(waveClearTimer);
  waveClearTimer = setTimeout(() => {
    if (audio.paused && waveContext) waveContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }, 780);
}

function icon(button, symbol) {
  const use = button.querySelector("use");
  if (use) use.setAttribute("href", `#i-${symbol}`);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remain = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remain}`;
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
}

function setRangeFill(input, value) {
  input.style.setProperty("--value", `${value}%`);
}

function renderTracks() {
  trackList.innerHTML = tracks.map((track, index) => `
    <button class="track-row${index === currentTrack ? " active" : ""}" type="button" data-index="${index}" style="--row-accent:${track.accent};--row-rgb:${track.rgb}" aria-label="播放${track.title}">
      <span class="track-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="track-name"><strong>${track.title}</strong><small>${track.mood}</small><span class="track-brief">${track.description}</span></span>
      <span class="track-time">${track.duration}</span>
      <span class="row-play"><svg><use href="#i-play"></use></svg><span class="row-eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span></span>
    </button>
  `).join("");

  $$(".track-row").forEach((row) => {
    row.addEventListener("click", () => {
      const selected = Number(row.dataset.index);
      if (selected === currentTrack) togglePlayback();
      else loadTrack(selected, true);
    });
  });
}

function updateTrackRows() {
  $$(".track-row").forEach((row, index) => {
    const active = index === currentTrack;
    row.classList.toggle("active", active);
    const use = row.querySelector("use");
    use?.setAttribute("href", active && !audio.paused ? "#i-pause" : "#i-play");
    row.setAttribute("aria-label", `${active && !audio.paused ? "暂停" : "播放"}${tracks[index].title}`);
  });
}

function updateTheme(track) {
  const root = document.documentElement;
  root.style.setProperty("--accent", track.accent);
  root.style.setProperty("--accent-2", track.accent2);
  root.style.setProperty("--accent-rgb", track.rgb);
}

function updateTrackUI(track, index) {
  $("#now-title").textContent = track.title;
  $("#now-en").textContent = track.en;
  $("#now-description").textContent = track.description;
  $("#now-mood").textContent = track.displayMood;
  $("#now-duration").textContent = track.duration;
  $("#now-number").textContent = `${String(index + 1).padStart(2, "0")} / ${String(tracks.length).padStart(2, "0")}`;
  $("#cover-index").textContent = String(index + 1).padStart(2, "0");
  $("#now-cover").src = track.cover;
  $("#now-cover").style.filter = track.filter;
  $("#player-cover").src = track.cover;
  $("#player-title").textContent = track.title;
  $("#player-subtitle").textContent = `${track.artist} · ${track.mood}`;
  $("#total-time").textContent = track.duration.replace(/^0/, "");
  const routeMap = $(".route-map");
  routeMap?.setAttribute("aria-label", `九首歌曲航线，当前位于第${index + 1}首《${track.title}》`);
  $$(".route-line i").forEach((node, nodeIndex) => node.classList.toggle("active", nodeIndex === index));
  sectionPlay.setAttribute("aria-label", `播放${track.title}`);
  updateTheme(track);
  updateTrackRows();
  document.title = `${track.title} · 声入星海`;
}

function loadTrack(index, shouldPlay = false) {
  currentTrack = (index + tracks.length) % tracks.length;
  const track = tracks[currentTrack];
  audio.src = track.src;
  audio.load();
  progress.value = 0;
  setRangeFill(progress, 0);
  $("#current-time").textContent = "0:00";
  updateTrackUI(track, currentTrack);
  try { localStorage.setItem("jason-signal-track", String(currentTrack)); } catch (_) {}
  if (shouldPlay) playAudio();
}

async function playAudio() {
  try {
    await audio.play();
  } catch (error) {
    showToast("浏览器暂时无法播放该音频，请再次点击播放或使用本地服务器打开。 ");
    syncPlaybackUI();
  }
}

function togglePlayback() {
  if (audio.paused) playAudio();
  else audio.pause();
}

function syncPlaybackUI() {
  const playing = !audio.paused;
  document.body.classList.toggle("is-playing", playing);
  icon(mainPlay, playing ? "pause" : "play");
  icon(sectionPlay, playing ? "pause" : "play");
  mainPlay.setAttribute("aria-label", playing ? "暂停" : "播放");
  sectionPlay.setAttribute("aria-label", `${playing ? "暂停" : "播放"}${tracks[currentTrack].title}`);
  $("#play-status").textContent = playing ? "SIGNAL ON AIR" : "READY TO PLAY";
  const heroSmall = heroPlay.querySelector("small");
  const heroStrong = heroPlay.querySelector("strong");
  const sectionLabel = sectionPlay.querySelector("span");
  if (currentTrack === 0 && playing) {
    heroSmall.textContent = "信号正在播出";
    heroStrong.textContent = "暂停《他不懂》";
    heroPlay.setAttribute("aria-label", "暂停他不懂");
  } else {
    heroSmall.textContent = "从第一站出发";
    heroStrong.textContent = "播放《他不懂》";
    heroPlay.setAttribute("aria-label", "播放他不懂");
  }
  sectionLabel.textContent = playing ? "PAUSE SIGNAL" : "PLAY SIGNAL";
  updateTrackRows();
}

function changeVolume(value) {
  const next = Math.max(0, Math.min(1, value));
  audio.volume = next;
  volume.value = next;
  setRangeFill(volume, next * 100);
  icon(muteButton, next === 0 ? "muted" : "volume");
  icon(mobileVolumeToggle, next === 0 ? "muted" : "volume");
  muteButton.setAttribute("aria-label", next === 0 ? "取消静音" : "静音");
  mobileVolumeToggle.setAttribute("aria-label", `${player.classList.contains("volume-open") ? "关闭" : "打开"}音量调节，当前${Math.round(next * 100)}%`);
  if (next > 0) previousVolume = next;
  try { localStorage.setItem("jason-signal-volume", String(next)); } catch (_) {}
}

mainPlay.addEventListener("click", togglePlayback);
sectionPlay.addEventListener("click", togglePlayback);
heroPlay.addEventListener("click", () => {
  if (currentTrack !== 0) loadTrack(0, true);
  else togglePlayback();
  $("#now-playing").scrollIntoView({ behavior: "smooth", block: "start" });
});
$("#prev").addEventListener("click", () => loadTrack(currentTrack - 1, true));
$("#next").addEventListener("click", () => loadTrack(currentTrack + 1, true));

progress.addEventListener("input", () => {
  isSeeking = true;
  setRangeFill(progress, Number(progress.value));
  if (Number.isFinite(audio.duration)) {
    $("#current-time").textContent = formatTime((Number(progress.value) / 100) * audio.duration);
  }
});
progress.addEventListener("change", () => {
  if (Number.isFinite(audio.duration)) audio.currentTime = (Number(progress.value) / 100) * audio.duration;
  isSeeking = false;
});
volume.addEventListener("input", () => changeVolume(Number(volume.value)));
muteButton.addEventListener("click", () => changeVolume(audio.volume > 0 ? 0 : previousVolume || 0.75));
mobileVolumeToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = !player.classList.contains("volume-open");
  player.classList.toggle("volume-open", open);
  mobileVolumeToggle.setAttribute("aria-expanded", String(open));
  mobileVolumeToggle.setAttribute("aria-label", `${open ? "关闭" : "打开"}音量调节，当前${Math.round(audio.volume * 100)}%`);
});
document.addEventListener("click", (event) => {
  if (!player.classList.contains("volume-open") || player.contains(event.target)) return;
  player.classList.remove("volume-open");
  mobileVolumeToggle.setAttribute("aria-expanded", "false");
});

audio.addEventListener("play", () => {
  syncPlaybackUI();
  startSoundWave();
});
audio.addEventListener("pause", () => {
  syncPlaybackUI();
  stopSoundWave();
});
audio.addEventListener("ended", () => loadTrack(currentTrack + 1, true));
audio.addEventListener("loadedmetadata", () => {
  $("#total-time").textContent = formatTime(audio.duration);
  $("#now-duration").textContent = formatTime(audio.duration).padStart(5, "0");
});
audio.addEventListener("timeupdate", () => {
  if (isSeeking || !Number.isFinite(audio.duration)) return;
  const percent = (audio.currentTime / audio.duration) * 100 || 0;
  progress.value = percent;
  setRangeFill(progress, percent);
  $("#current-time").textContent = formatTime(audio.currentTime);
});
audio.addEventListener("error", () => {
  // Switching tracks intentionally aborts the previous request; this is not a user-facing error.
  if (!audio.error || audio.error.code === MediaError.MEDIA_ERR_ABORTED) return;
  showToast(`《${tracks[currentTrack].title}》加载失败，请确认音频文件仍位于 assets/audio。`);
});

function setMenu(open, restoreFocus = true) {
  document.body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  icon(menuButton, open ? "close" : "menu");
  $("main").inert = open;
  $(".player").inert = open;
  $(".site-footer").inert = open;
  if (open) {
    menuReturnFocus = document.activeElement;
    setTimeout(() => $(".site-nav a")?.focus(), 30);
  } else if (restoreFocus) {
    (menuReturnFocus || menuButton).focus();
  }
}

menuButton.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
$$('.site-nav a').forEach((link) => link.addEventListener("click", () => {
  setMenu(false, false);
}));

window.addEventListener("scroll", () => {
  $(".site-header").classList.toggle("scrolled", window.scrollY > 24);
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (document.body.classList.contains("menu-open")) {
    const menuItems = [menuButton, ...$$('.site-nav a')];
    if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      return;
    }
    if (event.key === "Tab") {
      const first = menuItems[0];
      const last = menuItems[menuItems.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }
  const interactive = ["INPUT", "BUTTON", "A"].includes(document.activeElement?.tagName);
  if (event.code === "Space" && !interactive) {
    event.preventDefault();
    togglePlayback();
  }
  if (!interactive && event.code === "ArrowRight" && Number.isFinite(audio.duration)) audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  if (!interactive && event.code === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
$$('.reveal').forEach((element) => revealObserver.observe(element));

function initialize() {
  renderTracks();
  let savedTrack = 0;
  let savedVolume = 0.75;
  try {
    savedTrack = Number(localStorage.getItem("jason-signal-track")) || 0;
    const storedVolume = localStorage.getItem("jason-signal-volume");
    if (storedVolume !== null) {
      const parsedVolume = Number(storedVolume);
        if (Number.isFinite(parsedVolume) && parsedVolume > 0) savedVolume = parsedVolume;
    }
  } catch (_) {}
  changeVolume(savedVolume);
  loadTrack(Math.min(Math.max(savedTrack, 0), tracks.length - 1), false);
  syncPlaybackUI();
}

initialize();
