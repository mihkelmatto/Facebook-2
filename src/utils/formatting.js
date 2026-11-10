    /*
        Returns a date in following format:
        - locale: en-GB
        - 21 October 2026 at 14:45
    */

export function formatDate(timestamp){
    return new Date(timestamp).toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });
}