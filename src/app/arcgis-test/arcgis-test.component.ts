import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map.js';
import MapView from '@arcgis/core/views/MapView.js';
import Track from '@arcgis/core/widgets/Track';
import Graphic from '@arcgis/core/Graphic';
import Locate from '@arcgis/core/widgets/Locate';
import Search from '@arcgis/core/widgets/Search';

@Component({
  selector: 'app-arcgis-test',
  templateUrl: './arcgis-test.component.html',
  styleUrls: ['./arcgis-test.component.css'],
})
export class ArcgisTestComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new MapView({
      container: 'viewMap',
      map: map,
      center: [15, 65],
      zoom: 4,
    });

    const locate = new Locate({
      view: view,
      goToOverride: function (view, option) {
        option.target.scale = 1500;
        return view.goTo(option.target);
      },
    });
    view.ui.add(locate, 'top-left');
    const track = new Track({
      graphic: new Graphic({
        symbol: {
          color: 'green',
        },
      }),
    });
    view.ui.add(track, 'top-left');

    const search = new Search({
      view: view,
    });

    view.ui.add(search, 'top-right');
  }
}
