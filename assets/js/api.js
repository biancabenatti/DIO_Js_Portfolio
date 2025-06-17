
async function fetchProfileData() {
    const url = 'https://biancabenatti.github.io/DIO_portfolio-api/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
