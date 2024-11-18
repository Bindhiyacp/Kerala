import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  getcategory(){
    return this.http.get('https://fakestoreapi.com/products/categories')
  }

  getproductbycategory(category:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
  }


  getproductbyid(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  getdata(){
    return this.http.get(`data/pincodes.json`)
  }


  getPincodeData(pin: any) {
    return this.http.get('data/pincodes.json').pipe(
      map((data:any) => {
        // Filter the data based on the pincode
        const filteredData = data.filter((item:any) => item.pincode === Number( pin));
        return filteredData;
      })
    );
  }
 
}
