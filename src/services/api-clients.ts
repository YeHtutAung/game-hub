import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8af1cf4b7346480bbe8fbd4cee153778'
    }

})