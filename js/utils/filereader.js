export async function readhtml(path){
    const response = await fetch(path);

    if(!response.ok){
        throw new Error(`readhtml: fetch failed from ${path}`);
    }

    const html = await response.text();
    const parser = new DOMParser();

    const htmlobject = parser.parseFromString(html, "text/html").body.children[0];

    return htmlobject;
}

export async function readjson(path){
    const response = await fetch(path);

    if(!response.ok){
        throw new Error(`readjson: fetch failed from ${path}`);
    }

    return await response.json();
}

export async function fileExists(path){
    try{
        const response = await fetch(path, { method: "HEAD" });
        return response.ok;
    }
    catch{
        return false;
    }
}