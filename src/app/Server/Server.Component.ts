//no more typescript class
import{Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./Server.Component.html'
})

export class ServerComponent{
serverId:number=10;
serverStatus:string='Offline';

getServerStatus()
{
    return this.serverStatus;
}
}