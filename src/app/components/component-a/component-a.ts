import {Component, inject, signal} from '@angular/core';
import {RxplayService} from '../../rxplay/rxplay.service';
import {UserService} from '../../dependency-play/user.service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  standalone: true,
  styleUrl: './component-a.css',
  providers: [UserService]
})
export class ComponentA {
  postService = inject(RxplayService)
  post= signal([]);
  userService = inject(UserService)
  ngOnInit() {
    //this.getPost();
    console.log("AAA: ", this.userService.getCounter());
  }

  getPost() {
    this.postService.getPost().subscribe((res)=> {
      console.log("RES: ", res);
      this.post.set(res);
    });
  }
}
