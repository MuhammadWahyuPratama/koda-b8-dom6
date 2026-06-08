const isiGelas = document.querySelectorAll(".gelas-isi");

isiGelas.forEach((gelas) => {

    gelas.addEventListener("click", () => {

        if (gelas.classList.contains("kosong")) {

            gelas.classList.remove("kosong");
            gelas.classList.add("kopi");
            gelas.innerHTML = "<span>Coffee</span>";

        }

        else if (gelas.classList.contains("kopi")) {

            gelas.classList.remove("kopi");
            gelas.classList.add("teh");
            gelas.innerHTML = "<span>Tea</span>";
        }

        else if (gelas.classList.contains("teh")) {

            gelas.classList.remove("teh");
            gelas.classList.add("kosong");
            gelas.innerHTML = "";

        }

    });

});

