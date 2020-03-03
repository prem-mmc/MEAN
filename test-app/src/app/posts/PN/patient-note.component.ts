import { Component, EventEmitter, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
// import { timer } from 'rxjs';
import * as jspdf from 'jspdf'; 

import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
import { stringify } from 'querystring';
import * as $ from 'jquery';

@Component({
    selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.css']
})

export class PatientNote implements OnInit{
    enteredTitle='';
    enteredContent='';
    historyContent ;
    historyContent1;
    phyExContent;
    phyExContent1;
    count ;
    a = true;
    @ViewChild('postForm',{static:false}) postForm: ElementRef;
   constructor(public postsService: PostsService) {}
//    @HostListener('keypress', ['$event']) onKeypressHandler(event: KeyboardEvent) {
//     console.log(event);
//     var a = true;
//     this.count = false;
    
//     if (this.count !== true ){
//     this.count = true
//     this.time(a)
//     event.preventDefault();
//     }
//     event.preventDefault();
// }
   ngOnInit(){
    // numbers.subscribe(x => console.log(x));
    
    
    var count = 0;
    if (count !== 1 ) {
        
        $('input,textarea').keypress(() => {
            this.time()
        })
        count++;
    }

   }
//    limitLine(){

//    }
   limitText(limitField, limitNum) {
    //    debugger
    if (limitField.length >= limitNum) {
        limitField = limitField.substring(0, limitNum);
        alert('Reached maximum number of character');
    }

    //line limit
    var text = limitField;

    var lines = (text.match(/\n/g) || '').length + 1
   // console.log(lines, text.length);
   this.historyContent = text.length;
//    document.getElementById('text_count1').innerHTML = text.length;
    if (lines >= 15) {
     
        var n = text.lastIndexOf("\n");

        alert('Reached line limit');
        limitField = text.substring(0, n);
    }
    this.historyContent1  = lines;
    this.process(lines,text)
}
  limitText1(limitField, limitNum) {
    if (limitField >= limitNum) {
        limitField = limitField.substring(0, limitNum);
        alert('Reached maximum number of character');
    }

    //line limit
    var text = limitField;
    var lines = (text.match(/\n/g) || '').length + 1
   // console.log(lines, text.length); 
   this.phyExContent = text.length;
//    document.getElementById('text_count2').innerHTML = text.length;
    if (lines >= 15) {
     
        var n = text.lastIndexOf("\n");

        alert('Reached line limit');
        limitField = text.substring(0, n);
    }
    this.phyExContent1 = lines;
   
    this.process1(lines,text)
}


 process(tline, text) {
//   debugger;
    var maxLines = 15,
        maxChars = 950;
    var linebreaks = text.split('\n').length;
    text.split('\n').forEach(function(item) {
        linebreaks = linebreaks + (item.length / 93);
    });

    $("#txtComments_progressbar").animate({
        'width': linebreaks * (100 / 15) + '%'
    }, 1);
   
}


 process1(tline, text) {
//    debugger;
    var maxLines = 15,
        maxChars = 950;
    var linebreaks = text.split('\n').length;
    text.split('\n').forEach(function(item) {
        linebreaks = linebreaks + (item.length / 93);
    });

    $("#txtComments_progressbar1").animate({
        'width': linebreaks * (100 / 15) + '%'
    }, 1);

}
//    Timer
   time() { 
    if(this.a) {
     var minutesLabel = document.getElementById("minutes");
     var secondsLabel = document.getElementById("seconds");
     var totalSeconds = 0;

     setInterval(setTime, 1000)
    //  timeout()
 

     function setTime() {
         ++totalSeconds;
         var n = Math.floor( totalSeconds % 60)
         var m = Math.floor(totalSeconds / 60)
         secondsLabel.innerHTML = pad(n);
         minutesLabel.innerHTML = pad(m);

      
     }
     this.a = false;
 }
 function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    } else {
        // console.log(valString)
        return valString;
    }
}
}
  
 //////////////////////////////////
 onAddpost(value){
    console.log(value);
 }
    onAddPost(form: NgForm){
        if(form.invalid){
            return;
        }
     
        this.postsService.addPost(
            form.value.title,form.value.content, form.value.diag,
        form.value.his_fin_1_1, form.value.his_fin_1_2, form.value.his_fin_1_3,
        form.value.phy_ex_1_1, form.value.phy_ex_1_2, form.value.phy_ex_1_3,

        form.value.diag2,
        form.value.his_fin_2_1, form.value.his_fin_2_2, form.value.his_fin_2_3,
        form.value.phy_ex_2_1, form.value.phy_ex_2_2, form.value.phy_ex_2_3,

        form.value.diag3,
        form.value.his_fin_3_1, form.value.his_fin_3_2, form.value.his_fin_3_3,
        form.value.phy_ex_3_1, form.value.phy_ex_3_2, form.value.phy_ex_3_3,

        form.value.diag_study1, form.value.diag_study2, form.value.diag_study3,
        form.value.email
        );
        form.resetForm();
    }
    // @ViewChild('content') content: ElementRef;

  makePdf() { 
    let doc = new jspdf();
    doc.addHTML(this.postForm.nativeElement, function() {
       doc.save("obrz.pdf");
    });
  }
}