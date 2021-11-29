$(currentDay).text(moment().format('dddd, MMMM Do'))
currentHour = moment().format("hh")

$("button").click(function () {
  let hour = $(this).siblings(".form-control").attr("id")
  let note = $(this).siblings(".form-control").val()
  localStorage.setItem(hour,note)
  console.log(hour,note)
})

// for each()


