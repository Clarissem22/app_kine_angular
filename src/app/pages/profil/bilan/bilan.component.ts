import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import { formatDate } from '@fullcalendar/angular';




@Component({
  selector: 'app-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.scss']
})
export class BilanComponent implements OnInit {

  // evenements: any [
  //   {
  //     title : "Entretien",
  //     start : "2022-04-14",
  //     end : "2022-04-22"


  //   },
  // ];



  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'fr',
    headerToolbar: {
      left : "prev, next, today",
      center : "title",
      right :"dayGridMounth, timeGridWeek ,list"
    },
    buttonText : {
      today : "Aujourd'hui",
      mounth : "Mois",
      week : "Semaine",
      list : "Liste"
    },    
    weekends: false,
    editable: true,
    eventDrop: (infos) => { console.log("infos");
    }
  };

  
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
  
  constructor() {
   }
  
  ngOnInit(): void {
  }
  
  str = formatDate(new Date(), {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
 
  
}
