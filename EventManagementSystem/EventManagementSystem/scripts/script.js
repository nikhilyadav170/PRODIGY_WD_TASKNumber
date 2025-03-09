document.addEventListener("DOMContentLoaded", function () {
    const eventContainer = document.getElementById("eventList");
    const newEventContainer = document.getElementById("newEvents");
    const eventDetails = document.getElementById("eventDetails");

    const defaultEvents = [
        { name: "Music Concert", date: "2025-02-20", location: "New York", description: "Enjoy a night of live music!", image: "event1.jpg" },
        { name: "Tech Conference", date: "2025-03-15", location: "San Francisco", description: "Latest tech trends!", image: "event2.jpg" },
        { name: "Food Festival", date: "2025-04-10", location: "Los Angeles", description: "Delicious dishes!", image: "event3.jpg" }
    ];

    function showEventDetails(event, index, isNew = false) {
        eventDetails.innerHTML = `
            <div class="event-item">
                <div class="event-info">
                    <h2>${event.name}</h2>
                    <p><strong>Date:</strong> ${event.date}</p>
                    <p><strong>Location:</strong> ${event.location}</p>
                    <p>${event.description}</p>
                    ${isNew ? `<button onclick="deleteEvent(${index})">Delete Event</button>` : ""}
                </div>
                <div class="event-image">
                    <img src="${event.image}" alt="${event.name}" onerror="this.src='default.jpg'">
                </div>
            </div>
        `;
    }

    function loadEvents() {
        eventContainer.innerHTML = "";
        newEventContainer.innerHTML = "";

        defaultEvents.forEach((event, index) => {
            let img = document.createElement("img");
            img.src = event.image;
            img.alt = event.name;
            img.onclick = () => showEventDetails(event, index, false);
            eventContainer.appendChild(img);
        });

        let savedEvents = JSON.parse(localStorage.getItem("events")) || [];
        savedEvents.forEach((event, index) => {
            let img = document.createElement("img");
            img.src = event.image;
            img.alt = event.name;
            img.onclick = () => showEventDetails(event, index, true);
            newEventContainer.appendChild(img);
        });
    }

    window.deleteEvent = function (index) {
        let savedEvents = JSON.parse(localStorage.getItem("events")) || [];
        savedEvents.splice(index, 1);
        localStorage.setItem("events", JSON.stringify(savedEvents));
        loadEvents();
        eventDetails.innerHTML = "<h2>Click an event image to see details</h2>";
    };

    loadEvents();
});
