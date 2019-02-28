import { Component, OnInit } from '@angular/core';


//import { nextTick } from 'q';
import { locationNameService } from './location_name.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    private lal = []
    private int = 0;
    private array = {suggestios:[],word:''};
    a = [];
    set = []
    db = []
    suggestion = []
    index = '';
    search = <any>[]
    truthValue;
    isQuestionCardShow = false;
    searchValue: string = ""
    constructor(private locationNameService:locationNameService) {
        this.locationNameService.apiLocation().subscribe(
            res => {
                this.lal = res
            }
            
        );
        this.locationNameService.getLocationFromDB().subscribe(
            res => {
                this.db = res.data
                for (this.index in this.db){
                    if(typeof this.db[this.index].words !== 'undefined'){
                    if(typeof this.db[this.index].words.suggestion !== 'undefined'){
                        console.log(this.db[this.index].words.suggestion)
                    this.search.push(this.db[this.index].words.suggestion)
                    }
                }
                }
            }
        )
    }
    
    next(){
        this.int += 1;
        this.index = this.lal[this.int].word
        console.log(this.int)
        this.truthValue = this.search.indexOf(this.index) > -1;
        while(this.truthValue){
            console.log(this.array)
            this.truthValue = this.search.indexOf(this.index) > -1;
            this.int += 1;
            this.index = this.lal[this.int].word
        }
        console.log(this.search)
        console.log(this.index)
        console.log(this.int)
        this.array = this.lal[this.int]
        console.log(this.truthValue)
    }
    startQuiz() {
		this.isQuestionCardShow = true;

	}
    prev(){
        this.int -= 1;
        this.array = this.lal[this.int]
    }
    clicked(int,number){
        this.a = this.lal[int].suggestios[number]
        this.set = this.lal[int]
        this.locationNameService.addLocationName(this.set,this.a,this.int).subscribe(
            res => {
            }
        )
        this.int += 1;
        this.array = this.lal[this.int]
        
    }
    onEnter(value){
        this.set = this.lal[this.int]
        this.locationNameService.addLocationName(this.set,value,this.int).subscribe(
            res => {
            }
        )
        this.int += 1;
        this.array = this.lal[this.int]
        
        this.searchValue = null;
    }
    ngOnInit() {

    }
}
