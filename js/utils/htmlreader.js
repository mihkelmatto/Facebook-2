export async function readhtml(path){
    const response = await fetch(path);

    if(!response.ok){
        throw new Error("header.html not found");
    }

    const html = await response.text();
    const parser = new DOMParser();

    const htmlobject = parser.parseFromString(html, "text/html").body.children[0];

    return htmlobject;
}