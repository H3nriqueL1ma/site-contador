import $ from "jquery";

const button_start: JQuery<HTMLButtonElement> = $("#button-start");
const title: JQuery<HTMLElement> = $("header");
const body_content: JQuery<HTMLBodyElement> = $("body");

if (title.length > 0) {
  title.append(
    '<span id="title" style="display:none"><h1>Contador Simples</h1></span>'
  );
  title.find("span#title").fadeIn();
}

if (body_content.length > 0) {
  body_content.append(
    '<span id="_content" style="display:none"><section><div id="content">Início: <input type="number" name="start" id="start"><br><br>Fim: <input type="number" name="end" id="end"><br><br>Passo: <input type="number" name="step" id="step"><br><br><button id="button">Iniciar Contagem</button><br><br></div><div id="result"></div></section></span>'
  );
}

if (button_start.length > 0) {
  button_start.on("click", () => {
    button_start.css("display", "none");
    body_content.find("span#_content").fadeIn();
  });
}

const button: JQuery<HTMLButtonElement> = $("#button");
const p: JQuery<HTMLDivElement> = $("#result");

if (button.length > 0 && p.length > 0) {
  button.on("click", () => {
    p.empty();

    const start: JQuery<HTMLInputElement> = $("#start");
    const start_value = Number(start.val());

    const end: JQuery<HTMLInputElement> = $("#end");
    const end_value = Number(end.val());

    const step: JQuery<HTMLInputElement> = $("#step");
    const step_value = Number(step.val());

    const delay_time = 1000;

    if (
      !isFinite(start_value) ||
      !isFinite(end_value) ||
      !isFinite(step_value) ||
      end_value >= 1000 ||
      start_value > 1000 ||
      step_value <= 0 ||
      start_value == end_value
    ) {
      alert("[ERROR]: VALOR INVÁLIDO OU MUITO GRANDE OU PASSO INVÁLIDO!");
    } else {
      if (start_value < end_value) {
        for (let c: number = start_value; c <= end_value; c += step_value) {
          if (c == end_value) {
            p.append(`<span style="display:none">${c}... Fim</span>`);
          } else {
            p.append(`<span style="display:none">${c}... </span>`);
          }
        }
      } else if (start_value > end_value) {
        for (let c: number = start_value; c >= end_value; c -= step_value) {
          if (c == end_value) {
            p.append(`<span style="display:none">${c}... Fim</span>`);
          } else {
            p.append(`<span style="display:none">${c}... </span>`);
          }
        }
      }
      p.find("span").each((c: number) => {
        setTimeout(() => {
            $(p.find("span")[c]).fadeIn();
        }, c * delay_time);
      });
    }
  });
}
