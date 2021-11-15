

export const contentAPI = {
    setCurrency() {
        
        return fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((result) => {
                return result
            })

    }
}

