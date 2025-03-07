document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    let expression = "";

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === "light") {
            body.classList.add("light-mode");
            themeToggle.checked = true;
        } else {
            body.classList.remove("light-mode");
            themeToggle.checked = false;
        }
    }

    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme") || "dark";
    applyTheme(savedTheme);

    // Toggle theme and save preference
    themeToggle.addEventListener("change", function () {
        const newTheme = themeToggle.checked ? "light" : "dark";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    // Handle button clicks
    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const value = button.getAttribute("data-value");

            if (value === "C") {
                expression = "";
                display.value = "";
            } else if (value === "DEL") {
                expression = expression.slice(0, -1);
                display.value = expression;
            } else if (value === "=") {
                try {
                    expression = eval(expression).toString();
                    display.value = expression;
                } catch {
                    display.value = "Error";
                    expression = "";
                }
            } else {
                expression += value;
                display.value = expression;
            }
        });
    });
});
