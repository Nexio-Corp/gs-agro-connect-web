"use strict";
const getForm = () => document.querySelector("form"); // necessário pois o formulário é recriado varias vezes
const main = document.querySelector("main");
const formHtml = main.innerHTML;
const addFormEvent = (form) => {
    console.log("addFormEvent", form);
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        // remove campos vazios
        for (const key in data) {
            if (data[key] === "") {
                delete data[key];
            }
        }
        const url = new URL("https://agro-guru-prompt.vercel.app");
        Object.keys(data).forEach((key) =>
            url.searchParams.append(key, data[key])
        );
        const prompt = await (await fetch(url)).json();
        resultHtml(prompt.content);
    });
};
const resultHtml = (prompt) => {
    const h1 = document.createElement("h1");
    h1.textContent = "Agro Guru";
    const p = document.createElement("p");
    p.textContent = prompt;
    const button = document.createElement("button");
    button.id = "generate-again";
    button.textContent = "Gere de novo";
    button.onclick = () => {
        main.innerHTML = formHtml;
        addFormEvent(getForm());
    };
    main.innerHTML = "";
    main.append(h1, p, button);
};
addFormEvent(getForm());
