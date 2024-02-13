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

      function displayShows() {
      for (let i = 0; i < showsArray.length; i++) {
        
        const itemEl = document.createElement("li");
        console.log(itemEl);
        itemEl.classList.add("show__dummy");
        listEl.appendChild(itemEl);
        const dateLabelEl = document.createElement("label");
        dateLabelEl.classList.add("show__label");
        listEl.appendChild(dateLabelEl);
        const dateEl = document.createElement("h3");
        dateEl.classList.add("show__date");
        dateEl.innerText = showsArray[i].date;
        itemEl.appendChild(dateEl);
        // c) create venue detail element and add to the <li>
        const venueLabelEl = document.createElement("label");
        venueLabelEl.classList.add("show__label");
        listEl.appendChild(venueLabelEl);
        const venueEl = document.createElement("p");
        venueEl.classList.add("show__venue");
        venueEl.innerText = showsArray[i].venue;
        itemEl.appendChild(venueEl);
        const locationLabelEl = document.createElement("label");
        locationLabelEl.classList.add("show__label");
        listEl.appendChild(locationLabelEl);
        const locationEl = document.createElement("p");
        locationEl.classList.add("show__location");
        locationEl.innerText = showsArray[i].location;
        itemEl.appendChild(locationEl);
        // d) create show detail element and add to the <li>
        //     - adding an shows__detail--special modifier class

      
        // e) create date detail element and add to the <li>
        
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