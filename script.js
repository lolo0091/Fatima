document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     ELEMENTS
  ========================================================= */

  const enterWorldBtn = document.getElementById("enterWorldBtn");
  const activityCards = document.querySelectorAll(".activity-card");

  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".close-popup");
  const overlays = document.querySelectorAll(".popup-overlay");

  const messagesPopup = document.getElementById("messagesPopup");
  const mirrorPopup = document.getElementById("mirrorPopup");
  const surprisePopup = document.getElementById("surprisePopup");
  const candyPopup = document.getElementById("candyPopup");
  const stickerPopup = document.getElementById("stickerPopup");
  const dancePopup = document.getElementById("dancePopup");
  const bowHuntPopup = document.getElementById("bowHuntPopup");
  const secretPopup = document.getElementById("secretPopup");

  const messageText = document.getElementById("messageText");
  const nextMessageBtn = document.getElementById("nextMessageBtn");

  const magicMirror = document.getElementById("magicMirror");
  const mirrorTitle = document.getElementById("mirrorTitle");
  const newTitleBtn = document.getElementById("newTitleBtn");

  const surpriseMachine = document.getElementById("surpriseMachine");
  const surpriseEmoji = document.getElementById("surpriseEmoji");
  const surpriseText = document.getElementById("surpriseText");

  const candyChoices = document.querySelectorAll(".candy-choice");
  const candyBox = document.getElementById("candyBox");
  const clearCandyBtn = document.getElementById("clearCandyBtn");

  const danceButton = document.getElementById("danceButton");
  const danceStage = document.querySelector(".dance-stage");
  const musicToggle = document.getElementById("musicToggle");
  const fatimaSong = document.getElementById("fatimaSong");

  const hiddenBows = document.querySelectorAll(".hidden-bow");
  const bowCountElement = document.getElementById("bowCount");
  const mainBowCountElement = document.getElementById("mainBowCount");

  const secretTitle = document.getElementById("secretTitle");
  const secretText = document.getElementById("secretText");


  /* =========================================================
     ENTER WORLD
  ========================================================= */

  if (enterWorldBtn) {
    enterWorldBtn.addEventListener("click", () => {
      const worldSection = document.getElementById("world");

      if (worldSection) {
        worldSection.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  }


  /* =========================================================
     POPUP HELPERS
  ========================================================= */

  function openPopup(popup) {
    if (!popup) return;

    popup.classList.add("active");
    popup.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }


  function closePopup(popup) {
    if (!popup) return;

    if (popup === dancePopup) {
      stopDanceParty();
    }

    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }


  function closeAllPopups() {
    popups.forEach((popup) => {
      popup.classList.remove("active");
      popup.setAttribute("aria-hidden", "true");
    });

    stopDanceParty();

    document.body.style.overflow = "";
  }


  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popup");
      closePopup(popup);
    });
  });


  overlays.forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const popup = overlay.closest(".popup");
      closePopup(popup);
    });
  });


  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });


  /* =========================================================
     ACTIVITY CARDS
  ========================================================= */

  activityCards.forEach((card) => {
    card.addEventListener("click", () => {

      const section = card.dataset.section;

      createClickSparkle();

      switch (section) {

        case "bowhunt":
          openPopup(bowHuntPopup);
          break;

        case "candy":
          openPopup(candyPopup);
          break;

        case "stickers":
          openPopup(stickerPopup);
          break;

        case "mirror":
          openPopup(mirrorPopup);
          break;

        case "surprise":
          openPopup(surprisePopup);
          break;

        case "dance":
          openPopup(dancePopup);
          break;

        case "messages":
          openPopup(messagesPopup);
          break;

        case "secret":
          openSecretRoom();
          break;
      }

    });
  });


  /* =========================================================
     SWEET MESSAGES
  ========================================================= */

  const messages = [
    "You make the world a little sweeter just by being you. 🩷",
    "Fatima, your smile is pure magic. ✨",
    "You are brighter than a whole sky full of stars. ⭐",
    "Never forget how special and loved you are. 🎀",
    "Your laugh can make any day better. 💗",
    "You are sweeter than the biggest candy shop in the world. 🍭",
    "Keep being kind, funny and wonderfully you. 🌸",
    "Fatima, you deserve a world full of happy surprises. 🎁",
    "You are a little superstar with a very big sparkle. ✨",
    "Today is better because Fatima is in it. 🩷"
  ];

  let currentMessageIndex = 0;


  function showNextMessage() {
    if (!messageText) return;

    currentMessageIndex++;

    if (currentMessageIndex >= messages.length) {
      currentMessageIndex = 0;
    }

    messageText.style.opacity = "0";
    messageText.style.transform = "translateY(5px)";

    setTimeout(() => {
      messageText.textContent = messages[currentMessageIndex];

      messageText.style.opacity = "1";
      messageText.style.transform = "translateY(0)";
    }, 200);
  }


  if (nextMessageBtn) {
    nextMessageBtn.addEventListener("click", showNextMessage);
  }


  /* =========================================================
     MAGIC MIRROR
  ========================================================= */

  const magicalTitles = [
    "Princess Fatima 👑",
    "Queen of Pink Bows 🎀",
    "Candy Castle Princess 🍭",
    "Sparkle Superstar ✨",
    "Little Queen of Hearts 💗",
    "Pink Magic Princess 🩷",
    "Sweetest Girl in the Kingdom 🍬",
    "Butterfly Princess 🦋",
    "Queen of Giggles 😄",
    "Rainbow Dreamer 🌈",
    "Star Princess ⭐",
    "Magic Bow Queen 🎀✨"
  ];


  function chooseMagicTitle() {
    if (!mirrorTitle) return;

    const randomTitle =
      magicalTitles[
        Math.floor(Math.random() * magicalTitles.length)
      ];

    mirrorTitle.style.opacity = "0";
    mirrorTitle.style.transform = "scale(0.9)";

    setTimeout(() => {
      mirrorTitle.textContent = randomTitle;

      mirrorTitle.style.opacity = "1";
      mirrorTitle.style.transform = "scale(1)";

      createSparkleBurst();
    }, 200);
  }


  if (magicMirror) {
    magicMirror.addEventListener("click", chooseMagicTitle);
  }


  if (newTitleBtn) {
    newTitleBtn.addEventListener("click", chooseMagicTitle);
  }


  /* =========================================================
     SURPRISE MACHINE
  ========================================================= */

  const surprises = [
    {
      emoji: "🎀",
      text: "You found a magical pink bow!"
    },
    {
      emoji: "👑",
      text: "A tiny princess crown just for Fatima!"
    },
    {
      emoji: "🍭",
      text: "A giant magical lollipop!"
    },
    {
      emoji: "🦋",
      text: "A little butterfly came to say hello!"
    },
    {
      emoji: "🌈",
      text: "You found a pocket-sized rainbow!"
    },
    {
      emoji: "⭐",
      text: "A shiny star landed in your world!"
    },
    {
      emoji: "💗",
      text: "You got a giant pink heart!"
    },
    {
      emoji: "🧁",
      text: "A cupcake appeared from nowhere!"
    },
    {
      emoji: "🍬",
      text: "You won a magical candy!"
    }
  ];


  if (surpriseMachine) {
    surpriseMachine.addEventListener("click", () => {

      surpriseMachine.classList.remove("machine-spin");

      void surpriseMachine.offsetWidth;

      surpriseMachine.classList.add("machine-spin");

      surpriseEmoji.textContent = "✨";
      surpriseText.textContent = "Let's see...";

      setTimeout(() => {

        const surprise =
          surprises[
            Math.floor(Math.random() * surprises.length)
          ];

        surpriseEmoji.textContent = surprise.emoji;
        surpriseText.textContent = surprise.text;

        createSparkleBurst();

        if (surprise.emoji === "🎀") {
          showNotification("A bonus pink bow appeared! 🎀");
        }

      }, 450);

    });
  }


  /* =========================================================
     CANDY SHOP
  ========================================================= */

  let candyItems =
    JSON.parse(
      localStorage.getItem("fatimaCandyBox")
    ) || [];


  function renderCandyBox() {
    if (!candyBox) return;

    candyBox.innerHTML = "";

    if (candyItems.length === 0) {
      candyBox.textContent = "🎁";
      return;
    }

    candyItems.forEach((candy) => {
      const span = document.createElement("span");

      span.textContent = candy;

      candyBox.appendChild(span);
    });
  }


  candyChoices.forEach((button) => {
    button.addEventListener("click", () => {

      const candy = button.dataset.candy;

      if (!candy) return;

      if (candyItems.length >= 12) {
        showNotification("Your candy box is full! 🍭");
        return;
      }

      candyItems.push(candy);

      localStorage.setItem(
        "fatimaCandyBox",
        JSON.stringify(candyItems)
      );

      renderCandyBox();

      showNotification(`${candy} Added to your candy box!`);
    });
  });


  if (clearCandyBtn) {
    clearCandyBtn.addEventListener("click", () => {

      candyItems = [];

      localStorage.removeItem("fatimaCandyBox");

      renderCandyBox();

      showNotification("Candy box emptied! 🎁");

    });
  }


  renderCandyBox();


  /* =========================================================
     PINK BOW HUNT
  ========================================================= */

  let collectedBows =
    JSON.parse(
      localStorage.getItem("fatimaCollectedBows")
    ) || [];


  function updateBowCounter() {
    const total = collectedBows.length;

    if (bowCountElement) {
      bowCountElement.textContent = total;
    }

    if (mainBowCountElement) {
      mainBowCountElement.textContent = total;
    }

    updateSecretRoom();
  }


  hiddenBows.forEach((bow) => {

    const bowId = bow.dataset.bow;

    if (collectedBows.includes(bowId)) {
      bow.classList.add("collected");
    }


    bow.addEventListener("click", (event) => {

      event.stopPropagation();

      if (collectedBows.includes(bowId)) {
        return;
      }

      collectedBows.push(bowId);

      localStorage.setItem(
        "fatimaCollectedBows",
        JSON.stringify(collectedBows)
      );

      bow.classList.add("collected");

      updateBowCounter();

      createBowFoundEffect(
        event.clientX,
        event.clientY
      );

      showNotification(
        `Pink Bow Found! 🎀 ${collectedBows.length}/5`
      );


      if (collectedBows.length === 5) {
        setTimeout(() => {
          showNotification(
            "The Secret Pink Door is unlocked! 🔓🎀"
          );
        }, 700);
      }

    });

  });


  updateBowCounter();


  /* =========================================================
     SECRET PINK DOOR
  ========================================================= */

  function updateSecretRoom() {
    if (!secretTitle || !secretText) return;

    if (collectedBows.length >= 5) {

      secretTitle.textContent =
        "Unlocked! 🎀✨";

      secretText.textContent =
        "You found every pink bow! Fatima's secret magical room is now open.";

    } else {

      const remaining =
        5 - collectedBows.length;

      secretTitle.textContent =
        "Locked 🔐";

      secretText.textContent =
        `Find ${remaining} more pink ${
          remaining === 1 ? "bow" : "bows"
        } to unlock this magical door.`;
    }
  }


  function openSecretRoom() {
    updateSecretRoom();

    openPopup(secretPopup);

    if (collectedBows.length >= 5) {
      createSparkleBurst();
    }
  }


  /* =========================================================
     DANCE PARTY + FATIMA'S FAVORITE SONG
  ========================================================= */

  const FATIMA_VIDEO_ID = "bOpti8PEEhU";

  const normalSongUrl =
    `https://www.youtube.com/embed/${FATIMA_VIDEO_ID}?rel=0`;

  const autoplaySongUrl =
    `https://www.youtube.com/embed/${FATIMA_VIDEO_ID}?autoplay=1&rel=0`;

  let dancePartyActive = false;


  function startDanceParty() {

    if (!danceStage || !danceButton) return;


    if (!dancePartyActive) {

      dancePartyActive = true;

      danceStage.classList.add("dancing");

      danceButton.innerHTML =
        "Stop Dancing ⏸️";

      if (fatimaSong) {
        fatimaSong.src = autoplaySongUrl;
      }

      showNotification(
        "Fatima's dance party started! 🎵💃🎀"
      );

      createSparkleBurst();

    } else {

      stopDanceParty();

      showNotification(
        "Dance party paused 💗"
      );
    }
  }


  function stopDanceParty() {

    dancePartyActive = false;

    if (danceStage) {
      danceStage.classList.remove("dancing");
    }

    if (danceButton) {
      danceButton.innerHTML =
        "Start Dancing 🎵";
    }

    if (fatimaSong) {
      fatimaSong.src = normalSongUrl;
    }
  }


  if (danceButton) {
    danceButton.addEventListener(
      "click",
      startDanceParty
    );
  }


  /* =========================================================
     TOP MUSIC BUTTON
  ========================================================= */

  if (musicToggle) {
    musicToggle.addEventListener("click", () => {

      openPopup(dancePopup);

      setTimeout(() => {
        fatimaSong?.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 250);

    });
  }


  /* =========================================================
     MINI NOTIFICATION
  ========================================================= */

  let notificationTimer;


  function showNotification(text) {

    let notification =
      document.querySelector(".mini-notification");

    if (!notification) {

      notification =
        document.createElement("div");

      notification.className =
        "mini-notification";

      document.body.appendChild(notification);
    }


    clearTimeout(notificationTimer);

    notification.textContent = text;

    requestAnimationFrame(() => {
      notification.classList.add("show");
    });


    notificationTimer = setTimeout(() => {

      notification.classList.remove("show");

    }, 2200);
  }


  /* =========================================================
     CLICK SPARKLES
  ========================================================= */

  function createClickSparkle() {

    const sparkle =
      document.createElement("span");

    sparkle.className =
      "click-sparkle";

    sparkle.textContent =
      Math.random() > 0.5
        ? "✨"
        : "💗";

    const x =
      Math.random() *
      window.innerWidth;

    const y =
      window.innerHeight * 0.45;

    sparkle.style.left =
      `${x}px`;

    sparkle.style.top =
      `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
      sparkle.remove();
    }, 800);
  }


  function createSparkleBurst() {

    const symbols = [
      "✨",
      "🎀",
      "💗",
      "⭐",
      "🩷"
    ];

    for (let i = 0; i < 10; i++) {

      setTimeout(() => {

        const sparkle =
          document.createElement("span");

        sparkle.className =
          "click-sparkle";

        sparkle.textContent =
          symbols[
            Math.floor(
              Math.random() *
              symbols.length
            )
          ];

        sparkle.style.left =
          `${
            window.innerWidth / 2 +
            (Math.random() * 220 - 110)
          }px`;

        sparkle.style.top =
          `${
            window.innerHeight / 2 +
            (Math.random() * 100 - 50)
          }px`;

        document.body.appendChild(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 800);

      }, i * 50);
    }
  }


  /* =========================================================
     BOW FOUND EFFECT
  ========================================================= */

  function createBowFoundEffect(x, y) {

    const effect =
      document.createElement("span");

    effect.className =
      "bow-found-effect";

    effect.textContent =
      "🎀";

    effect.style.left =
      `${x}px`;

    effect.style.top =
      `${y}px`;

    document.body.appendChild(effect);

    setTimeout(() => {
      effect.remove();
    }, 1000);
  }


});
