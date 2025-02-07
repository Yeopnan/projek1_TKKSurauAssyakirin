let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  alert(
    "Pengurusan harta peninggalan si mati dimulakan dengan membiayai kelengkapan dan pengurusan jenazahnya, kemudian diselesaikan hutang-hutangnya kemudian dipenuhi wasiatnya (hanya satu pertiga daripadanya) kemudian baharulah diberikan baki harta tersebut secara faraid kepada waris-waris yang berhak"
  );
});

// Select elements
document.addEventListener("DOMContentLoaded", function () {
  const renewRadio = document.getElementById("renew");
  const baruRadio = document.getElementById("baru");
  const kemaskiniRadio = document.getElementById("kemaskini");

  const minimalFields = document.getElementById("minimal_fields");
  const fullForm = document.getElementById("full_form");

  // Event listener for category selection
  document.querySelectorAll('input[name="kategori"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      if (renewRadio.checked) {
        // Show minimal fields, hide full form
        minimalFields.style.display = "block";
        fullForm.style.display = "none";
      } else {
        // Show full form, hide minimal fields
        minimalFields.style.display = "none";
        fullForm.style.display = "block";
      }
    });
  });

  // Set initial state based on the selected radio button (if any)
  if (renewRadio.checked) {
    minimalFields.style.display = "block";
    fullForm.style.display = "none";
  } else {
    minimalFields.style.display = "none";
    fullForm.style.display = "block";
  }
});
