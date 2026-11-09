import { API_KEY, API_ROOT, BINS, USE_API } from "../../config.js";

/*
    Reads locally or online, depending on USE_API value (config.js)
*/
export async function readjson(path){
    let response;

    if(USE_API){
        const filename = path.split("/").pop();
        const bin = BINS[filename];
        if(!bin){
            throw new Error(`readjson: no bin configured for ${filename}`);
        }

        response = await fetch(
            API_ROOT + bin + "/latest",
            {
                method: "GET",
                headers: {
                    "X-Access-Key": API_KEY
                }
            }
        );
    }
    else{
        response = await fetch(path);
    }

    if(!response.ok){
        throw new Error(`readjson: fetch failed from ${path}`);
    }

    const data = await response.json();

    return USE_API ? data.record : data;
}

/* 
    Online-only, depending on USE_API value (config.js)
*/

export async function fileExists(path){
    try{
        const response = await fetch(path, { method: "HEAD" });
        return response.ok;
    }
    catch{
        return false;
    }
}