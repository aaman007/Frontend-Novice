const template = document.createElement('template');
template.innerHTML = `
    <style>
        .user-card {
            font-family: 'Arial', sans-serif;
            background: #f4f4f4;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin: 15px;
            border-bottom: darkorchid 5px solid;
        }

        .user-card img {
            width: 100%;
        }

        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="user-card">
        <img alt="Avatar">
        <div>
            <h3></h3>
            <div class="info" hidden>
                <p> <slot name="email" /> </p>
                <p> <slot name="phone" /> </p> 
            </div>
            <button id="toggle-info"> Show Info </button>
        </div>
    </div>
`;


class UserCard extends HTMLElement {
    constructor() {
        super();

        // Class Attributes
        this.showInfo = false;

        // Create Shadow DOM and add the template to the shadow root
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Dynamic Contents
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector(".info");
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.hidden = false;
            toggleBtn.innerText = 'Hide Info';
        }
        else {
            info.hidden = true;
            toggleBtn.innerText = 'Show Info';
        }
    }

    // Lifecycle Method
    connectedCallback() {
        this.shadowRoot.querySelector("#toggle-info").addEventListener('click', () => this.toggleInfo());
    }

    // Lifecycle methods
    disconnectCallback() {
        this.shadowRoot.querySelector("#toggle-info").removeEventListener();

    }
}

window.customElements.define('user-card', UserCard);