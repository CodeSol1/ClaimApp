import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { PolicyHolder } from '../Models/PolicyHolder.model';
// import { PolicyHolder } from '../Models/PolicyHolder.model';
@Injectable({
  providedIn: 'root'
})
export class PolicyholdersService {

  constructor(private http: HttpClient) { }
  apiurl: string = "https://localhost:44377/";

 

  getAllPolicyHolders(): Observable<PolicyHolder[]> {
    return this.http.get<PolicyHolder[]>(this.apiurl + '/api/policyholders')
  }

  getpolicyholder() {
    return this.http.get<any[]>("https://localhost:44377/api/policyholders")
  }

  addPolicyHolder(policy: PolicyHolder): Observable<PolicyHolder> {

    //  console.log(addPolicyRequest);
    console.log("Inside service " + policy);
    return this.http.post<PolicyHolder>(this.apiurl + 'api/policyholders', policy);
  }


  getPolicyHolder(holderId: any): Observable<PolicyHolder> {
    return this.http.get<PolicyHolder>(this.apiurl + '/api/policyholders/' + holderId);
  }


  updatePolicyHolder(holderId: any, updatePolicyHolder: PolicyHolder): Observable<PolicyHolder> {
    return this.http.put<PolicyHolder>(this.apiurl + '/api/Policy/' + holderId, updatePolicyHolder);
  }

  deletePolicyHolder(holderId: number): Observable<PolicyHolder> {
    return this.http.delete<PolicyHolder>(this.apiurl + '/api/Policy/' + holderId);
  }


} 
