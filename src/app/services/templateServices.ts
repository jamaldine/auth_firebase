import {Subject} from 'rxjs';
import  {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class templateServices{

	constructor(private httpClient : HttpClient){}
	
	templateServicesSubject = new Subject <any[]>();

	private Profils=[
  
		{
			id:0,
			firstName:"jamaldine",
			lastName:"boukir"
		}
    /*,
		{
			id:1,
			firstName:"khadija",
			lastName:"boukir"
		}
  */  
	];

  setFirstNamr(){}

	emitTemplateServicesSubject(){
		this.templateServicesSubject.next(this.Profils.slice());
	}

	unProfil(firstName:string,lastName:string){
		const profilObject = {
      id: 0,
      firstName: "",
      lastName: ""
    };
    
    profilObject.id = this.Profils[(this.Profils.length - 1)].id + 1;
    profilObject.firstName = firstName;
    profilObject.lastName = lastName;

    this.Profils.push(profilObject);

	this.emitTemplateServicesSubject();
	}


	saveProfilsToServer() {
    this.httpClient
      .put('https://http-client-demo-7b26b.firebaseio.com/profils.json', this.Profils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        },
        ()=>{
        	console.log('complete');
        }
      );
}
	
	getProfilsFromServer() {
    this.httpClient
      .get<any[]>('https://http-client-demo-7b26b.firebaseio.com/profils.json')
      .subscribe(
        (response) => {
          this.Profils = response;
          console.log("l'id :"+this.Profils[1].firstName);
          this.emitTemplateServicesSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

}