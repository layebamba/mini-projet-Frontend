import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public items!:Item[];

  public editItem: Item |null| undefined


  constructor(private itemService:ItemService){

  }
  ngOnInit(): void {
    this.getItems();
   // throw new Error('Method not implemented.');
  }

    public getItems():void{
      this.itemService.getItems().subscribe((response:Item[])=>{
this.items=response;
      })

  }

  public onAddItem(addform:NgForm):void{
    document.getElementById('add-item-form')?.click();
    this.itemService.addItem(addform.value).subscribe(
      (response:Item)=>{
        console.log(response);
        this.getItems();
        addform.reset;
      }
    )
  }

  public onUpdateItem(item:Item):void{
    this.itemService.updateItem(item).subscribe((response:Item)=>{
      console.log(response);
      this.getItems();
    })
  }


  public onOpenModal(item:Item|null,mode:string):void{

    const container=document.getElementById('main-container')
        const button=document.createElement('button');
      button.type='button';
    
      button.style.display='none';
      button.setAttribute('data-toggle','modal');


      if(mode==='add')
  {
button.setAttribute('data-target','#addEmployeeModal');
  }
  if(mode==='edit'){
    this.editItem=item;
    button.setAttribute('data-target','#updateItemModal');
  }




  }
    


}
