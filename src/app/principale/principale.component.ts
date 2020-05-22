import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {templateServices} from '../services/templateServices';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-principale',
  templateUrl: './principale.component.html',
  styleUrls: ['./principale.component.css']
})
export class PrincipaleComponent implements OnInit{
	Profils:any[];
	subscriptionProfils:Subscription;
	boukir:string;
	constructor( private templateService : templateServices,
		private router:Router)
	{

	}
	ngOnInit(){
		this.boukir="boukir";

		this.subscriptionProfils=this.templateService.templateServicesSubject.subscribe(
			(Profils:any[])=>{
				this.Profils=Profils;
			}
			);


		//I'm adding this:
		this.templateService.getProfilsFromServer();


		this.templateService.emitTemplateServicesSubject();
	}

  onSubmit(f:NgForm){
  	const firstName= f.value['firstName'];
  	const lastName= f.value['lastName'];

  	this.templateService.unProfil(firstName,lastName);
  	
  	this.templateService.saveProfilsToServer();
	console.log("save");
  	this.router.navigate(['test']);
  }

  onFetch() {
    this.templateService.getProfilsFromServer();
    console.log("fetch");
}

onSave(){
	this.templateService.saveProfilsToServer();
	console.log("save");
}

}
