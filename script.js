const isiGelas = document.querySelectorAll(".gelas-isi");

isiGelas.forEach((gelas) => {
  gelas.addEventListener("click", () => {
    ubahIsiGelas(gelas);
  });
});

function ubahIsiGelas(gelas) {
  if (gelas.classList.contains("kosong")) {
    updateGelas(gelas, "kosong", "kopi", "Coffee");
  } else if (gelas.classList.contains("kopi")) {
    updateGelas(gelas, "kopi", "teh", "Tea");
  } else if (gelas.classList.contains("teh")) {
    updateGelas(gelas, "teh", "kosong", "");
  }
}

function updateGelas(gelas, classLama, classBaru, text) {
  gelas.classList.remove(classLama);
  gelas.classList.add(classBaru);

  gelas.innerHTML = text ? `<span>${text}</span>` : "";
}