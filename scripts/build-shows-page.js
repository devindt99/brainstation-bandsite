import BandSiteApi from "./band-site-api.js";

const api = new BandSiteApi("9ec48fe6-56e1-433e-814d-b0d45822534b");

const showsArray = [
    {
      "date": "date1",
      "venue": "venue1",
      "location": "location1",
    },
    {
      "date": "date2",
      "venue": "venue2",
      "location": "location2",
    },
    {
      "date": "date3",
      "venue": "venue3",
      "location": "location3",
    },
  ];



      const listEl = document.querySelector("#shows-list");
      async function displayShows() {
        try {
          // Assuming api.getShows() fetches your shows data from the API
          const showsArray = await api.getShows();
      
          const listEl = document.querySelector("#shows-list"); // Make sure this selector matches your HTML
          listEl.innerHTML = ''; // Clear existing shows to avoid duplicates
      
          for (let i = 0; i < showsArray.length; i++) {
            const itemEl = document.createElement("li");
            itemEl.classList.add("show__dummy");
            listEl.appendChild(itemEl);
      
            // Date Label & Value
            const dateLabelEl = document.createElement("label");
            dateLabelEl.classList.add("show__label");
            dateLabelEl.innerText = "Date"; // Assuming you want a label before the value
            itemEl.appendChild(dateLabelEl);
            const dateEl = document.createElement("h3");
            dateEl.classList.add("show__date");
            dateEl.innerText = new Date(showsArray[i].date).toLocaleDateString("en-US");
            itemEl.appendChild(dateEl);
      
            // Venue Label & Value
            const venueLabelEl = document.createElement("label");
            venueLabelEl.classList.add("show__label");
            venueLabelEl.innerText = "Venue"; // Label text
            itemEl.appendChild(venueLabelEl);
            const venueEl = document.createElement("p");
            venueEl.classList.add("show__venue");
            venueEl.innerText = showsArray[i].venue;
            itemEl.appendChild(venueEl);
      
            // Location Label & Value
            const locationLabelEl = document.createElement("label");
            locationLabelEl.classList.add("show__label");
            locationLabelEl.innerText = "Location"; // Label text
            itemEl.appendChild(locationLabelEl);
            const locationEl = document.createElement("p");
            locationEl.classList.add("show__location");
            locationEl.innerText = showsArray[i].location;
            itemEl.appendChild(locationEl);
          }
        } catch (error) {
          console.error('Error fetching shows:', error);
          // Handle error (e.g., show an error message)
        }
      }
      
      displayShows();
      
 /*      
      <li class="show__dummy" id="show__dummy1">
      <div class="show__line">
          <img class="show__thumbnail"/>
          <div class="show__venue-date-wrapper"><h3 class="show__venue"></h3><p class="show__date" id="show-list__date1"></p></div>
      </div>
      <div class="show-list__show-list-wrapper">
          <p class="show-list__show-list">
          </p>
      </div>
      
  </li> */