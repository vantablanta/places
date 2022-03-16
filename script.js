// business logic
let Places = function(place, date, location, landmarks, notes){
    this.place = place
    this.date = date
    this.location = location 
    this.landmarks = landmarks
    this.notes = notes
}


// user interface logic
$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        let place = $("#inputPlace4").val()
        let date = $("#inputDate4").val()
        let location = $("#inputLocation").val()
        let landmarks = $("#inputLandmarks").val()
        let notes = $("#inputNotes").val()

        let placeVisited = new Places(place, date, location, landmarks, notes)
        
        if (placeVisited.place != ""){
            $("#placeName").append(`<p> ${placeVisited.place} </p>`)
            $("p").addClass("d-flex flex-column card-header text-white bg-success mb-3 card-title")
            $("#placeName").last().click(function () {
                $("#details").html(`<p>Date: ${date}</p>
                                    <p>Location: ${location}</p>
                                    <p>Landmarks: ${landmarks}</p>
                                    <p>Notes: ${notes}</p>
                                `)
                $("#details").addClass("card-header text-white bg-success mb-3 card-title")
            })
            $("#placeName").mouseout(function () {
                $("#details").empty()
            })
            form.reset()

        }else{
            $("#placeName").append(`<p> Oops! No value was provided. </p>`)
            $("p").addClass("card-header text-white bg-danger mb-3 card-title")
        }
    })
    // clearing the places
    $("#clear").click(function (e){
        e.preventDefault()
        $(".content").empty()
    })






})