class Poppy {

    // Parent div that will contain all alerts
    parent;
    cookies;
    constructor() {
        // Check for cookie
        this.cookies = document.cookie;
    }

    Display(style, message, url, btnText, lifespan) {
        // Show if the cookie doesnt exist
        if (document.cookie.indexOf('poppy=') == -1) {
            // Create parent div
            parent = document.createElement("div");
            // Add popup class
            parent.classList.add("poppy-holder");
            // Append it to body
            document.body.appendChild(parent);
            // Create frame
            var frame = document.createElement("div");
            // Add popup classs
            frame.classList.add("poppy-popup");
            // Check which style to apply
            this.CheckStyle(style, frame);
            // Create popup
            frame.innerHTML =
                // Start container
                `<div>
                <p class='poppy-p0'> `+ message + `  <a href=' ` + url + ` ' target='_blank' style='color: #1b305c' ><u>HERE</u></a>.<br><br></p>
                <button id='agreeBtn' class='poppy-btn'> `+ btnText + ` </button>
            </div>`;
            // Append it to parent
            parent.appendChild(frame);
            // Configure button onclick
            document.getElementById("agreeBtn").addEventListener('click', function () {
                // Set cookie
                document.cookie = "poppy=true; max-age=" + lifespan + "; path=/;";
                // Hide popup
                parent.remove();
            });
        }
    }

    CheckStyle(style, element) {
        // Add style class
        switch (style) {
            case "default":
                element.classList.add("poppy-default");
                break;
            case "notification":
                element.classList.add("poppy-notification");
                break;
            case "warning":
                element.classList.add("poppy-warning");
                break;
            case "error":
                element.classList.add("poppy-error");
                break;
        }
    }
}