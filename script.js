let button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  alert(
    "Pengurusan harta peninggalan si mati dimulakan dengan membiayai kelengkapan dan pengurusan jenazahnya, kemudian diselesaikan hutang-hutangnya kemudian dipenuhi wasiatnya (hanya satu pertiga daripadanya) kemudian baharulah diberikan baki harta tersebut secara faraid kepada waris-waris yang berhak"
  );
});

// Select elements
const renewRadio = document.getElementById("renew");
const extraFields = document.getElementById("extra_fields");

// Add event listener to radio buttons
document.querySelectorAll('input[name="kategori"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    if (renewRadio.checked) {
      // Hide extra fields
      extraFields.classList.add("hidden");
    } else {
      // Show extra fields
      extraFields.classList.remove("hidden");
    }
  });
});
