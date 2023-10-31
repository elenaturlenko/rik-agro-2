// let arrow = document.querySelectorAll(".list__arrow");
// let dropdown = document.querySelectorAll(".list__dropdown");

// arrow.forEach((arrowItem) => {
//   arrowItem.addEventListener("click", () => {
//     dropdown.forEach((dropdownItem) => {
//       if (dropdownItem.classList.contains("dropdown-active")) {
//         dropdownItem.classList.remove("dropdown-active");
//         arrowItem.classList.remove("list__arrow-active");
//       } else {
//         dropdownItem.classList.add("dropdown-active");
//         arrowItem.classList.add("list__arrow-active");
//       }
//     });
//   });
// });

let intervalId;

document.querySelectorAll(".list__arrow").forEach((e) => {
  e.addEventListener("click", (e) => {
    const menu = e.currentTarget.dataset.path;
    document.querySelectorAll(".list__dropdown").forEach((e) => {
      if (
        !document
          .querySelector(`[data-target=${menu}]`)
          .classList.contains("open")
      ) {
        // оставить только один дропдаун открытым
        // e.classList.remove("dropdown-active");
        // e.classList.remove("open");
        document
          .querySelector(`[data-target=${menu}]`)
          .classList.add("dropdown-active");
        intervalId = setTimeout(() => {
          document.querySelector(`[data-target=${menu}]`).classList.add("open");
        }, 0);
      }
      if (
        document
          .querySelector(`[data-target=${menu}]`)
          .classList.contains("open")
      ) {
        clearTimeout(intervalId);
        document
          .querySelector(`[data-target=${menu}]`)
          .classList.remove("dropdown-active");
        intervalId = setTimeout(() => {
          document
            .querySelector(`[data-target=${menu}]`)
            .classList.remove("open");
        }, 0);
      }
      window.onclick = (e) => {
        if (
          e.target == document.querySelector(`[data-target=${menu}]`) ||
          e.target == document.querySelector(`[data-path=${menu}]`)
        ) {
          return;
        } else {
          document
            .querySelector(`[data-target=${menu}]`)
            .classList.remove("dropdown-active");
          document
            .querySelector(`[data-target=${menu}]`)
            .classList.remove("open");
        }
      };
    });
  });
});
