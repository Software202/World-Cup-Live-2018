
//Trigger app

function trigger_goal(conscise, obj)
{
    if (conscise.length > 0) {
        // console.log('yes')
        // console.log(conscise, obj)
    let goalBack = $('<div class="goalBack" />')
    let goalContain = $('<div class="goalContain" />')
    let goal = $('<div class="goal">GOAL!!!</div>');
    let recordTable = $('<table class="recordTable" />')
    goalContain.append(goal)
    for(let index in conscise)
    {
        recordTable.append(`<tr><td>${obj.teams[(conscise[index].home_team - 1)].name}</td>  <td>${obj.teams[(conscise[index].away_team - 1)].name}</td></tr>`)
        recordTable.append(`<tr><td><img class="flag" src="${obj.teams[(conscise[index].home_team - 1)].flag}" /></td>  <td><img class="flag" src="${obj.teams[(conscise[index].away_team - 1)].flag}" /></td></tr>`)
        recordTable.append(`<tr><td>${conscise[index].home_result}</td> <td>${conscise[index].away_result}</td></tr>`)
        // console.log(`${obj.teams[(conscise[index].home_team - 1)].name}  ${obj.teams[(conscise[index].away_team - 1)].name}`, `${conscise[index].home_result}  ${conscise[index].away_result}`)
    }

    goalContain.append(recordTable)
    // console.log(conscise.length)

    goalBack.append(goalContain)

    goalBack.click(function () {
        $(this).fadeOut(function () {
            $(this).remove()
        })
    })
    //Remove any existing .goalBack Element
    $("body .goalBack").remove()
    $('body').append(goalBack)
}
}

setInterval(
    function()
    {
chrome.storage.local.get('new_event', function (data) {
    new_event = data.new_event

    // console.log(new_event)

    chrome.storage.local.get('mson', function (data) {
        mson = data.mson

        // console.log(mson)
        trigger_goal(new_event, mson)
    })
})
    },500);