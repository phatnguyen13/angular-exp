import {Component, inject, signal} from '@angular/core';
import {RxplayService} from '../../rxplay/rxplay.service';
import {UserService} from '../../dependency-play/user.service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  standalone: true,
  styleUrl: './component-b.css',
  providers: [UserService]

})
export class ComponentB {
  postService = inject(RxplayService)
  post= signal([]);
  userService = inject(UserService)
  ngOnInit() {
    //this.getPost();
    console.log("BBB: ", this.userService.getCounter());
  }
  getPost() {
    this.postService.getPost().subscribe((res)=> {
      this.post.set(res.data);
    });
  }
}
