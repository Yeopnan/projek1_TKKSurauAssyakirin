let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  alert(
    "Pengurusan harta peninggalan si mati dimulakan dengan membiayai kelengkapan dan pengurusan jenazahnya, kemudian diselesaikan hutang-hutangnya kemudian dipenuhi wasiatnya (hanya satu pertiga daripadanya) kemudian baharulah diberikan baki harta tersebut secara faraid kepada waris-waris yang berhak"
  );
});

// Select elements
document.addEventListener("DOMContentLoaded", function () {
  const renewRadio = document.getElementById("renew");
  const allFields = document.querySelector(".form-container"); // The entire form
  const minimalFields = document.getElementById("minimal_fields"); // Only necessary fields

  // Ensure calendar and "Kategori Permohonan" always show
  const dateSection = document
    .querySelector('input[type="date"]')
    .closest("fieldset");
  const kategoriSection = document
    .querySelector('input[name="kategori"]')
    .closest("fieldset");

  // Add event listeners to radio buttons
  document.querySelectorAll('input[name="kategori"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (renewRadio.checked) {
        allFields.style.display = "none"; // Hide the full form
        minimalFields.style.display = "block"; // Show minimal fields
      } else {
        allFields.style.display = "block"; // Show full form
        minimalFields.style.display = "none"; // Hide minimal fields
      }

      // Always show calendar and "Kategori Permohonan"
      dateSection.style.display = "block";
      kategoriSection.style.display = "block";
    });
  });

  // Always show calendar and "Kategori Permohonan" on page load
  dateSection.style.display = "block";
  kategoriSection.style.display = "block";
});
