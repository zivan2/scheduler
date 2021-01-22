let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']

if (!getLocal()) {
    let schedule = []
    for (let i in times) {
        schedule.push({
            time: times[i],
            message: ''
        })
    }
    setLocal(schedule)
} else {
    updateTexts()
}

$('.save').on('click', function() {
    let time = $(this).attr('id')
    let msg = $(`textarea#${time}`).val()
    let s = getLocal()
    s.forEach((elem) => {
        if (elem.time == time) {
            elem.message = msg
        }
    })
    setLocal(s)
})

function updateTexts() {
    $('textarea').each(function() {
        $(this).text(
            getLocal().find(
                elem => elem.time == $(this).attr('id')
            ).message
        )
    })
    $('#currentDay').text(
        
    )
}


function getLocal() { return JSON.parse(localStorage.getItem('schedule')) }

function setLocal(schedule) { localStorage.setItem('schedule', JSON.stringify(schedule)) }

