import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.scss'
})
export class ExerciseComponent {
  isNaN: Function = Number.isNaN;
  x: number = 2;
  y: number = 5;
  currentExercise: string = `${this.x}+${this.y}=`;
  userAnswer:string = '';
  
  constructor(){}
  
  
  public handleButtonKey(event: string) { 

    if (!this.isValidInput(event)) {
      return;
    }
    if(event === 'Enter'){
      console.log('Enter', event, typeof(event));
    }
    else if(event === 'DEL'){
      console.log('DEL', event, typeof(event));
      if (this.userAnswer.length > 0) {
        this.userAnswer = this.userAnswer.slice(0, -1);
      }
      
    }
    else{

      
      this.userAnswer = this.userAnswer + event;

    }
    
  }

  private isValidInput(input: string) : boolean {

    const length = this.userAnswer.toString().length;

    if(input === '0'){
      return length > 0;
    }
    return  length < 3
  }




}
