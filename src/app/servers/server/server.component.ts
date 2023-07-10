import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.server = this.serversService.getServer(1);
    // const id = +this.route.snapshot.params['id'];
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serversService.getServer(+params['id']);
    // })

    this.route.data.subscribe((data : Data) => {
      console.log(data);
      this.server = data['server'];
    })
  }

  onEditRoute(){
    this.router.navigate(['edit'], {relativeTo : this.route, queryParamsHandling: 'preserve'})
  }

}
