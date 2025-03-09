document.getElementById("eventForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let eventName = document.getElementById("eventName").value;
    let eventDate = document.getElementById("eventDate").value;
    let eventLocation = document.getElementById("eventLocation").value;
    let eventDesc = document.getElementById("eventDesc").value;
    let eventImage = document.getElementById("eventImage").value;

    // Default image for the event if none is provided
    if (!eventImage) {
        eventImage = "https://via.placeholder.com/100x60?text=Event+Image";
    }

    let events = JSON.parse(localStorage.getItem("events")) || [];
    events.push({ name: eventName, date: eventDate, location: eventLocation, description: eventDesc, image: eventImage });
    localStorage.setItem("events", JSON.stringify(events));

    alert("Event Added Successfully!");
    window.location.href = "index.html";
});
