  

export async function getGames (){
    const response = await fetch(
        "https://api.rawg.io/api/games/2873?key=3a957e0520f542fc9812a4dc75f8ddc3&page_size=5",
        {
            method: 'GET'
        }
    )
    const data = await response.json()
    // console.log(data.background_image)
    return data
}