export class ApiService {
    baseURL:string
    constructor () {
        this.baseURL = "https://api.openweathermap.org/data/2.5";
    }
    async getData(endpoint:string, query:string="San Salvador") {
        const res = await fetch(`${this.baseURL}/${endpoint}?q=${query}&appid=ba1ae7f6ecffee9ffe93f1f526721ad4&lang=en`);
        const data = await res.json();
        return data
    }
    
}

