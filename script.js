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
            $("#placeName").addClass("card-header text-white bg-success mb-3")

        }else{
            $("#placeName").removeClass("ccard-header text-white bg-success mb-3")
        }


    





    })






})