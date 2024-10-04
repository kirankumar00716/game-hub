import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'268b4ef867d84676afb4ce0db70b8d3b',
    }
})