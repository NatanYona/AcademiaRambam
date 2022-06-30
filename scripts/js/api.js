const getTimelineURL = "https://api.tomorrow.io/v4/timelines"
const apikey = "ZWDkoQ0I5N9uO31qx5FxVmQ89VqjaHTO"
let location = [-31.417, -64.183]
const fields = [
    "temperature"
]
const units = "Metric"
const timesteps = "current"
const now = moment.utc()
const timezone = "America/Argentina/Cordoba"
const getTimelineParameters =  queryString.stringify({
    apikey,
    location,
    fields,
    units,
    timesteps,
    timezone,
}, {arrayFormat: "comma"})

fetch(getTimelineURL + "?" + getTimelineParameters, {method: "GET", compress: true})
.then((result) => result.json())
.then((json) => console.log(json)
.catch((error) => console.error("error: " + err)))

