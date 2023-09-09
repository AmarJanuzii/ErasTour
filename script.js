// Wrap your code inside a DOMContentLoaded event listener to ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".Hero_imageButton__lFXXC");
  const body = document.body;
  const navBar = document.querySelector(".navBar"); // Add your navBar class name here

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.classList.contains("expanded");

      // Hide all navbar images and image texts
      const navbarImages = document.querySelectorAll(".navBar img");
      navbarImages.forEach((img) => {
        img.style.display = "none";
      });

      const imageTexts = document.querySelectorAll(".image-text");
      imageTexts.forEach((text) => {
        text.style.display = "none";
      });

      if (!isExpanded) {
        const colorScheme = button.getAttribute("data-color");

        // Collapse all buttons and reset styling
        buttons.forEach((btn) => {
          btn.classList.remove("expanded");
          btn.style.width = "7.22222%";
        });

        // Set new styles and attributes for the expanded button
        body.setAttribute("data-color", colorScheme);
        navBar.setAttribute("data-color", colorScheme);
        button.classList.add("expanded");
        button.style.width = "70%";

        // Get the IDs of the corresponding navbar image and image text
        const navbarImageId = `navbarImage${colorScheme.charAt(0).toUpperCase()}${colorScheme.slice(1)}`;
        const imageTextId = `text${colorScheme.charAt(0).toUpperCase()}${colorScheme.slice(1)}`;

        // Show the corresponding navbar image and image text
        const currentNavbarImage = document.getElementById(navbarImageId);
        const currentImageText = document.getElementById(imageTextId);
        if (currentNavbarImage) {
          currentNavbarImage.style.display = "inline";
        }
        if (currentImageText) {
          currentImageText.style.display = "block";
        }
      } else {
        // Reset styles and attributes for the collapsed button
        body.removeAttribute("data-color");
        navBar.removeAttribute("data-color");
        button.classList.remove("expanded");
        button.style.width = "7.22222%";
      }

      // Show the default navbar image only if no image is expanded
      const expandedButton = document.querySelector(".Hero_imageButton__lFXXC.expanded");
      if (!expandedButton) {
        const defaultNavbarImage = document.getElementById("navbarImageDefault");
        if (defaultNavbarImage) {
          defaultNavbarImage.style.display = "inline";
        }
      }
    });
  });
});
