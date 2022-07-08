import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = '../api/rest/blogs';
const API_URL_User = '../wordpress/wp-json/wp/v2/users/me?context=edit';
const API_URL_ORDERS = '../wordpress/wp-json/wc/v3/orders';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  num: number;
  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<any> {
    return this.http.get('http://localhost:8080/api/rest/blogs');
  }
  getProductById(id: number) {
    {return this.http.get(`${API_URL}/${id}`)}

  }
  search(q: string): Observable<any> {
    return this.http.get(
      '../wordpress/wp-json/wc/v3/products?search=' + q
    );
  }
  searchClient(q: string): Observable<any> {
    return this.http.get(
      '../wordpress/wp-json/wc/v3/customers?search=' + q
    );
  }

getAllBlogsbycategory(id:any):Observable<any> {
  return this.http.get(`${API_URL}?category=`+id)
}
getUserRole():Observable<any>{
  return this.http.get(`http://localhost:8080/api/rest/blogs`)
}
addOder(orders:any){
  return this.http.post(`${API_URL_ORDERS}`,orders)
}
addBlog(blog:any){
  return this.http.post(`http://localhost:8080/api/rest/add`,blog)
}
}
