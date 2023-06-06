"use strict";
const getForm = () => document.querySelector("form"); // necessário pois o formulário é recriado varias vezes
const main = document.querySelector("main");
const formHtml = main.innerHTML;
const addFormEvent = (form) => {
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
    const generateBtn = document.createElement("button");
    generateBtn.id = "generate-again";
    generateBtn.textContent = "Gere de novo";
    generateBtn.onclick = () => {
        main.innerHTML = formHtml;
        addFormEvent(getForm());
    };
    const copyBtn = document.createElement("button");
    copyBtn.id = "copy";
    copyBtn.textContent = "Copiar Prompt";
    copyBtn.onclick = async () => {
        await navigator.clipboard.writeText(prompt);
        copyBtn.textContent = "Copiado!";
    };
    copyBtn.onmouseleave = () => {
        copyBtn.textContent = "Copiar Prompt";
    };
    const buttons = document.createElement("div");
    buttons.className = "buttons-div";
    buttons.append(generateBtn, copyBtn);
    main.innerHTML = "";
    main.append(h1, p, buttons);
};
addFormEvent(getForm());
