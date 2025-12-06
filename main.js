document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  /* NAV VIEW SWITCHING */
  const views = document.querySelectorAll("[data-view]");
  function showView(name) {
    views.forEach(v => v.classList.toggle("active", v.dataset.view === name));
    document.querySelectorAll("[data-view-target]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.viewTarget === name);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  showView("home");

  document.querySelectorAll("[data-view-target]").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      showView(btn.dataset.viewTarget);
    });
  });

  // mobile nav
  const navToggle = document.getElementById("navToggle");
  const navMobile = document.getElementById("navMobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", () => {
      navMobile.classList.toggle("open");
    });
  }

  /* HERO TABS */
  const tabButtons = document.querySelectorAll("#searchTabs button");
  const tabContents = document.querySelectorAll(".search-content");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.tab;
      const content = document.querySelector(
        `.search-content[data-content="${target}"]`
      );
      if (content) content.classList.add("active");
    });
  });

  /* DATA: PACKAGES */
  const allPackages = [
    {
      id: "goa-4n",
      title: "Goa 4N/5D – Flights + 4★ Stay",
      from: "Gwalior",
      to: "Goa",
      nights: 4,
      price: 24999,
      theme: "honeymoon",
      tags: ["Flights", "Near beach", "Breakfast"],
      description: "Return flights, 4★ resort, breakfast & airport transfers.",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&w=900",
    },
    {
      id: "manali-3n",
      title: "Manali 3N/4D – Volvo + Hotel",
      from: "Delhi",
      to: "Manali",
      nights: 3,
      price: 14499,
      theme: "family",
      tags: ["Volvo", "Snow points", "Breakfast & dinner"],
      description: "Delhi–Manali Volvo, hotel, meals & sightseeing.",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&w=900",
    },
    {
      id: "dubai-5n",
      title: "Dubai 5N/6D – Visa + Flights",
      from: "Delhi",
      to: "Dubai",
      nights: 5,
      price: 59999,
      theme: "honeymoon",
      tags: ["Visa", "City tour", "Desert safari"],
      description: "Visa, flights, hotel, city tour, desert safari & more.",
      image:
        "https://images.pexels.com/photos/161956/dubai-tower-arab-emirates-burj-khalifa-161956.jpeg?auto=compress&w=900",
    },
    {
      id: "kashmir-4n",
      title: "Kashmir 4N/5D – Houseboat",
      from: "Bhopal",
      to: "Srinagar",
      nights: 4,
      price: 27999,
      theme: "honeymoon",
      tags: ["Houseboat", "Gulmarg", "Shikara ride"],
      description: "Srinagar, Gulmarg, houseboat stay & shikara rides.",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&w=900",
    },
  ];

  /* FEATURED ON HOME */
  const featuredContainer = document.getElementById("featuredPackages");
  if (featuredContainer) {
    allPackages.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="card-title">${p.title}</h3>
            <span class="badge">${p.to}</span>
          </div>
          <p class="card-text">${p.description}</p>
          <div class="chip-row">
            ${p.tags.map((t) => `<span class="chip-tag">${t}</span>`).join("")}
          </div>
          <div class="price-row">
            <div>
              <div class="price-main">₹${p.price.toLocaleString()}</div>
              <div class="price-note">${p.nights} Nights • per person</div>
            </div>
            <button class="btn btn-ghost btn-sm" data-package-id="${p.id}">View details</button>
          </div>
        </div>`;
      featuredContainer.appendChild(card);
    });
  }

  /* DESTINATIONS */
  const destinations = [
    {
      name: "Goa",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&w=400",
    },
    {
      name: "Dubai",
      image:
        "https://images.pexels.com/photos/161956/dubai-tower-arab-emirates-burj-khalifa-161956.jpeg?auto=compress&w=400",
    },
    {
      name: "Manali",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&w=400",
    },
    {
      name: "Kashmir",
      image:
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&w=400",
    },
    {
      name: "Bali",
      image:
        "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg?auto=compress&w=400",
    },
  ];
  const destTrack = document.getElementById("destTrack");
  if (destTrack) {
    destinations.forEach((d) => {
      const div = document.createElement("div");
      div.className = "dest-card";
      div.innerHTML = `<img src="${d.image}" alt="${d.name}"><span>${d.name}</span>`;
      destTrack.appendChild(div);
    });
    document
      .getElementById("destPrev")
      .addEventListener("click", () =>
        destTrack.scrollBy({ left: -200, behavior: "smooth" })
      );
    document
      .getElementById("destNext")
      .addEventListener("click", () =>
        destTrack.scrollBy({ left: 200, behavior: "smooth" })
      );
  }

  /* TESTIMONIALS */
  const testimonials = [
    {
      name: "Gaurav",
      city: "Gwalior",
      rating: 5,
      text: "Dubai trip smooth tha – flights, hotel, visa sab AS Tour & Travels ne handle kiya.",
    },
    {
      name: "Priya & Karan",
      city: "Indore",
      rating: 5,
      text: "Goa honeymoon package mast tha. Resort & cab driver dono top notch.",
    },
    {
      name: "Rahul",
      city: "Bhopal",
      rating: 4,
      text: "Kashmir plan me last-minute snow issue bhi unhone manage kar diya.",
    },
  ];
  let testIndex = 0;
  const testCard = document.getElementById("testimonialCard");
  function renderTestimonial() {
    const t = testimonials[testIndex];
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    testCard.innerHTML = `
      <div class="testimonial-name">${t.name}</div>
      <div class="testimonial-meta">${t.city} • <span>${stars}</span></div>
      <p class="testimonial-text">${t.text}</p>`;
  }
  if (testCard) {
    renderTestimonial();
    document.getElementById("testPrev").addEventListener("click", () => {
      testIndex = (testIndex - 1 + testimonials.length) % testimonials.length;
      renderTestimonial();
    });
    document.getElementById("testNext").addEventListener("click", () => {
      testIndex = (testIndex + 1) % testimonials.length;
      renderTestimonial();
    });
  }

  /* HOLIDAY SEARCH -> PACKAGES VIEW */
  const holidayForm = document.getElementById("holidayForm");
  const searchSummary = document.getElementById("searchSummary");
  const packageList = document.getElementById("packageList");
  const noResults = document.getElementById("noResults");

  function matchesDuration(pkg, group) {
    if (group === "short") return pkg.nights <= 3;
    if (group === "mid") return pkg.nights >= 4 && pkg.nights <= 6;
    if (group === "long") return pkg.nights >= 7;
    return true;
  }

  function applyFilters() {
    const min = parseInt(
      document.getElementById("minBudget").value || "0",
      10
    );
    const max = parseInt(
      document.getElementById("maxBudget").value || "9999999",
      10
    );
    const durValues = Array.from(
      document.querySelectorAll(".durFilter:checked")
    ).map((c) => c.value);
    const themeValues = Array.from(
      document.querySelectorAll(".themeFilter:checked")
    ).map((c) => c.value);
    const sort = document.getElementById("sortSelect").value;

    let list = allPackages.filter((p) => p.price >= min && p.price <= max);

    if (durValues.length) {
      list = list.filter((p) =>
        durValues.some((v) => matchesDuration(p, v))
      );
    }

    if (themeValues.length) {
      list = list.filter((p) => themeValues.includes(p.theme));
    }

    if (sort === "priceLow") list.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") list.sort((a, b) => b.price - a.price);
    if (sort === "nightsLow") list.sort((a, b) => a.nights - b.nights);
    if (sort === "nightsHigh") list.sort((a, b) => b.nights - a.nights);

    packageList.innerHTML = "";
    if (!list.length) {
      noResults.style.display = "block";
      return;
    }
    noResults.style.display = "none";

    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "pkg-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="pkg-main">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <div class="pkg-tags">
            ${p.tags.map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>
        <div class="pkg-right">
          <div>
            <div class="pkg-price">₹${p.price.toLocaleString()}</div>
            <div class="pkg-note">${p.nights} Nights • per person</div>
          </div>
          <button class="btn btn-primary btn-sm" data-package-id="${p.id}">View details</button>
        </div>`;
      packageList.appendChild(card);
    });
  }

  if (holidayForm) {
    holidayForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const from = document.getElementById("fromCity").value.trim();
      const to = document.getElementById("toCity").value.trim();
      const date = document.getElementById("travelDate").value;
      const nights = document.getElementById("nights").value;
      const travellers = document.getElementById("travellers").value;

      if (!from || !to || !date || !travellers) {
        alert("Please fill all fields");
        return;
      }

      searchSummary.textContent = `Showing holidays from ${from} to ${to} • ${nights} nights • ${travellers} travellers`;
      showView("packages");
      applyFilters();
    });
  }

  // filters events
  document.getElementById("sortSelect").addEventListener("change", applyFilters);
  document
    .querySelectorAll(".durFilter,.themeFilter")
    .forEach((c) => c.addEventListener("change", applyFilters));
  document
    .getElementById("minBudget")
    .addEventListener("input", applyFilters);
  document
    .getElementById("maxBudget")
    .addEventListener("input", applyFilters);
  document.getElementById("resetFilters").addEventListener("click", () => {
    document.getElementById("minBudget").value = "";
    document.getElementById("maxBudget").value = "";
    document
      .querySelectorAll(".durFilter,.themeFilter")
      .forEach((c) => (c.checked = false));
    document.getElementById("sortSelect").value = "recommended";
    applyFilters();
  });

  // initial packages when direct open
  applyFilters();

  /* MODAL helper + toast */
  function openModal(id) {
    document.getElementById(id).style.display = "flex";
  }
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  document.querySelectorAll(".modal-close").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.dataset.close));
  });
  document.querySelectorAll(".modal-backdrop").forEach((bg) => {
    bg.addEventListener("click", (e) => {
      if (e.target === bg) bg.style.display = "none";
    });
  });
  const toast = document.getElementById("toast");
  function showToast(msg) {
    toast.textContent = msg;
    toast.style.display = "block";
    setTimeout(() => (toast.style.display = "none"), 2500);
  }

  /* PACKAGE DETAILS + BOOKINGS */
  const packageModalTitle = document.getElementById("pkgModalTitle");
  const packageModalMeta = document.getElementById("pkgModalMeta");
  const packageModalDesc = document.getElementById("pkgModalDesc");
  const packageModalPrice = document.getElementById("pkgModalPrice");
  let selectedPackage = null;
  function openPackageDetails(id) {
    const p = allPackages.find((x) => x.id === id);
    if (!p) return;
    selectedPackage = p;
    packageModalTitle.textContent = p.title;
    packageModalMeta.textContent = `${p.nights} Nights • From ${p.from} to ${p.to}`;
    packageModalDesc.textContent = p.description;
    packageModalPrice.textContent = `From ₹${p.price.toLocaleString()} per person (demo only)`;
    openModal("packageModal");
  }

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-package-id]");
    if (btn) {
      const id = btn.getAttribute("data-package-id");
      openPackageDetails(id);
    }
  });

  const bookingsBody = document.querySelector("#bookingsTable tbody");
  const bookingsEmpty = document.getElementById("bookingsEmpty");
  const pkgBookBtn = document.getElementById("pkgBookBtn");
  pkgBookBtn.addEventListener("click", () => {
    if (!selectedPackage) {
      return;
    }
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${selectedPackage.title}</td>
      <td>2</td>
      <td>${selectedPackage.nights}</td>
      <td>₹${selectedPackage.price.toLocaleString()}</td>
      <td>Pending (demo)</td>`;
    if (bookingsEmpty) bookingsEmpty.remove();
    bookingsBody.appendChild(row);
    closeModal("packageModal");
    showView("bookings");
    showToast("Booking created (demo only, no real payment).");
  });

  /* CABS */
  const cabForm = document.getElementById("cabForm");
  if (cabForm) {
    cabForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Cab request captured (demo). Backend se quote jayega.");
    });
  }

  /* DOCS ENQUIRY */
  document.querySelectorAll(".docs-enquire").forEach((btn) => {
    btn.addEventListener("click", () => {
      const service = btn.dataset.doc;
      document.getElementById("genericTitle").textContent = "Docs enquiry";
      document.getElementById("genericBody").textContent = `${service} enquiry captured (demo). Admin panel se aapko call / WhatsApp jayega.`;
      openModal("genericModal");
    });
  });

  /* CONTACT */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("genericTitle").textContent =
        "Callback request submitted";
      document.getElementById("genericBody").textContent =
        "Hamari team 24 working hours ke andar aapse contact karegi. (Demo front-end only.)";
      openModal("genericModal");
      contactForm.reset();
    });
  }

  /* SIMPLE AUTH (demo) */
  let currentUserName = "";
  const authForm = document.getElementById("authForm");
  const authTitle = document.getElementById("authTitle");
  document.getElementById("loginOpen").addEventListener("click", () => {
    authTitle.textContent = "Login";
    openModal("authModal");
  });
  document.getElementById("signupOpen").addEventListener("click", () => {
    authTitle.textContent = "Sign Up";
    openModal("authModal");
  });
  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    currentUserName = document.getElementById("authName").value.trim();
    closeModal("authModal");
    showToast(`Welcome, ${currentUserName}! (demo login)`);
  });
});
