import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MethodUtilityService } from 'src/app/services/Method-utility.service';
import { Permission } from 'src/app/model/Permission';
import { VariableService } from 'src/app/services/variable.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() public menuItems: Permission[] = new Array<Permission>();


  appitems = [
    {
      label: 'Item 1',
      faIcon: 'fas fa-ambulance',
      items: [
        {
          label: 'Sub',
          imageIcon: '/assets/batman.jpg',
          externalRedirect: true
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          icon: 'favorite_border',
          items: [
            {
              label: 'Item 1.2.1',
              link: 'admin/work_area/settings/users',
              faIcon: 'fas fa-allergies',
              icon: 'star_rate'
            }
          ]
        }
      ]
    },
    {
      label: 'Item 1 (with Font awesome icon)',
      faIcon: 'fab fa-500px',
      items: [
        {
          label: 'Item 1.1',
          link: 'admin/work_area/settings/users',
          faIcon: 'fab fa-accusoft'
        },
        {
          label: 'Item 1.2',
          faIcon: 'fab fa-accessible-icon',
          disabled: true,
          items: [
            {
              label: 'Item 1.2.1',
              link: 'admin/work_area/settings/users',
              faIcon: 'fa-allergies' // Font awesome default prefix is fas
            },
            {
              label: 'Item 1.2.2',
              faIcon: 'fas fa-ambulance',
              items: [
                {
                  label: 'Item 1.2.2.1',
                  faIcon: 'fas fa-anchor',  // Still you can specify if you want to
                  onSelected: function () {
                    console.log('Item 1.2.2.1');
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Item 2',
      icon: 'alarm',
      items: [
        {
          label: 'Item 2.1',
          link: 'admin/work_area/settings/users',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          disabled: true,
        },
        {
          label: 'Item 2.2',
          link: 'admin/work_area/settings/users',
          icon: 'favorite_border',
          activeIcon: 'favorite',
          navigationExtras: {
            queryParams: { order: 'popular', filter: 'new' },
          }
        }
      ]
    },
    {
      label: 'Item 3',
      icon: 'offline_pin',
      link: 'admin/work_area/settings/users',
      onSelected: function () {
        console.log('Item 3');
      }
    },
    {
      label: 'Item 4',
      link: 'admin/work_area/settings/users',
      icon: 'star_rate',
      hidden: true
    }
  ];

  config = {
    paddingAtStart: true,
    interfaceWithRoute: true,
    classname: 'menucss',
    listBackgroundColor: `#222d32`,
    fontColor: `#b8c7ce`,
    //backgroundColor: `rgb(208, 241, 239)`,
    selectedListFontColor: `red`,
    highlightOnSelect: false,
    collapseOnSelect: true
  };

  constructor(
    public router: Router,
    public methodUtils: MethodUtilityService
  ) { }

  ngOnInit(

  ) {
  }

  onLogout() {
    this.methodUtils.logout();
    this.router.navigate([VariableService.LOGIN]);
  }

  selectedItem(event) {
    console.log(event);
  }

  // toggleClass(event: any, class: string) {
  //   const hasClass = event.target.classList.contains(class);

  //   if(hasClass) {
  //     this.renderer.removeClass(event.target, class);
  //   } else {
  //     this.renderer.addClass(event.target, class);
  //   }
  // }

}
