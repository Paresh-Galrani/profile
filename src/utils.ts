
export function getTemplate(html, cssArray) {
  const template = document.createElement('template');
  let cssTemplate = '';
  if (cssArray && cssArray.length) {
    for (let i = 0; i < cssArray.length; i++) {
      cssTemplate += '\n' + cssArray[i];
    }
  }
  const generatedTempleteHtml = `
    <style>
      ${cssTemplate}
    </style>
    ${html}
  `;
  template.innerHTML = generatedTempleteHtml;
  return template;
}