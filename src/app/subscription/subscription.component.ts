import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
})
export class SubscriptionComponent implements OnInit {

  constructor(private http: HttpClient) { }
  pokemon1$ = this.http.get('https://pokeapi.co/api/v2/pokemon/pikachu').pipe(delay(5000));
  pokemon2$ = this.http.get('https://pokeapi.co/api/v2/pokemon/ditto').pipe(delay(300));
  pokemonSub: Subscription;
  PokemonData: any;
  isLoading: boolean = true;

  ngOnInit(): void {
    this.getPikachu();
  }

  getPikachu() {
    this.isLoading = true;
    this.pokemon1$.pipe(tap(() => this.isLoading = false)).subscribe((res) => { this.PokemonData = res });
  }

  getDittio() {
    this.isLoading = true;
    this.pokemon2$.pipe(tap(() => this.isLoading = false)).subscribe((res) => { this.PokemonData = res });
  }



}
