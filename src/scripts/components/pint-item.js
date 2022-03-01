// Logic For one Pint Item
import { getDBdata, apiUrl } from "./servises/dbAPI.js"
const data = getDBdata(apiUrl);

function Pint({}) {
    this.root = null;
    this.id = null;
}

