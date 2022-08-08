import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TeamService} from "../../../../services/team-service/team.service";
import {IConstructor} from "../../../../interfaces/iconstructor";
import {SafeUrl} from "@angular/platform-browser";
import {DriversService} from "../../../../services/drivers-service/drivers.service";
import getConstructorNameSecondPart from "../../../../helpers/get-constructor-name-second-part";
import {forkJoin} from "rxjs";
import {IHotspotItem} from "../../../../interfaces/ihotspot-item";
import {HotspotAlign} from "../../../../enums/hotspot-align";
import {NavbarServiceService} from "../../../../services/navbar-service/navbar-service.service";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {
  private sub: any;
  private navbarSub: any;
  getConstructorNameSecondPart = getConstructorNameSecondPart
  isLoading = false
  imagesLoading = false
  teamId!: string;
  team!: IConstructor
  carImage: SafeUrl | string = ""
  driver1Image: SafeUrl | string = ""
  driver2Image: SafeUrl | string = ""
  showCarDetails = false
  hotspotItems: Array<IHotspotItem> = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamService,
    private driverService: DriversService,
    private navbarService: NavbarServiceService
  ) {
    NavbarServiceService.show = true
    this.navbarSub = navbarService.backAnnounced$.subscribe(() => {
      this.backButtonClick()
    })
  }

  ngOnInit(): void {
    this.isLoading = true
    this.imagesLoading = true
    this.sub = this.route.params.subscribe((params) => {
      this.teamId = params['teamId'];
      //
      this.teamService.getConstructorDetails(this.teamId).subscribe((teamData) => {
        this.team = teamData

        console.log(teamData)

        forkJoin({
          car: this.teamService.getCarImage(this.teamId),
          driver1: this.driverService.getDriverImage(this.team.drivers[0].id),
          driver2: this.driverService.getDriverImage(this.team.drivers[1].id),
        }).subscribe((images) => {
          this.carImage = images.car
          this.driver1Image = images.driver1
          this.driver2Image = images.driver2

          this.imagesLoading = false
        })

        this.hotspotItems = [
          {
            color: this.team.color.secondary,
            secondaryColor: this.team.color.primary,
            left: 18.8,
            top: -23.8,
            title: "Wheels",
            text: "F1 introduced the new 18-inch tires in 2022.<br>The new Pirelli compounds and constructions for these 18-inch tyres have been designed with the goal of reducing the amount the tyres overheat when they slide – a primary aspect that should help with closer racing.",
          },
          {
            color: this.team.color.secondary,
            secondaryColor: this.team.color.primary,
            left: 41.8,
            top: -68.8,
            title: "Halo",
            text: "The halo is a driver crash-protection system used in open-wheel racing series, which consists of a curved bar placed to protect the driver's head with the help of the HANS device. A HANS device (head and neck support device) are used to reduce the likelihood of head or neck injuries, including the often fatal basilar skull fracture, in the event of a crash.",
          },
          {
            color: this.team.color.secondary,
            secondaryColor: this.team.color.primary,
            left: 68.8,
            top: -54.8,
            title: "Engine",
            text: "The formula-1 cars use an 1.6-litre turbo-hybrid units. The power units uses fuel that contains 5.75% bio-components in order to make more sustainable fuel.<br>The cars ar equipped with an 8-speed seami-automatic paddle-shift sequential gearbox.",
          },
          {
            color: this.team.color.secondary,
            secondaryColor: this.team.color.primary,
            left: 3.8,
            top: -13.8,
            position: HotspotAlign.RIGHT_ALIGN,
            title: "Front wing",
            text: "The front wing’s job is to both generate consistent downforce when running closely behind another car, and ensure that the front wheel wake is well controlled and directed down the car in the least disruptive way.",
          },
          {
            color: this.team.color.secondary,
            secondaryColor: this.team.color.primary,
            left: 90,
            top: -63.8,
            position: HotspotAlign.LEFT_ALIGN,
            title: "Rear wing + DRS",
            text: "The rear wings direct airflow upwards, but they are also designed to send flow outwards, leaving the ‘dirty air’ sitting there for the following car to drive through. The shape and position of the 2022 car’s rear wing creates a rotational airflow that collects the rear wheel wake and rolls it into the flow exiting the diffuser.<br><b style='display: contents'>DRS (Drag Reduction System):</b> the DRS opens an adjustable flap on the rear wing of the car, in order to reduce drag, thus giving a pursuing car an overtaking advantage.The device can only be used during a race after two racing laps have been completed, and when the pursuing car enters a designated activation zone defined by the FIA.",
          }
        ]

        this.isLoading = false
      })
    });
  }

  backButtonClick() {
    if (this.showCarDetails) {
      this.showCarDetails = false
    } else {
      this.router.navigate(['/constructors'])
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.navbarSub.unsubscribe();
  }

}
