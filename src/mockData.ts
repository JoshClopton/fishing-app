import Animas from './assets/images/licensed-image.jpeg';
import Blue from './assets/images/UNADJUSTEDNONRAW_thumb_17-1440x0-c-default.jpg';
import Arkansas from './assets/images/ark2-1440x0-c-default.jpg';

const waterData = [
  {
    id: 0,
    name: 'Animas',
    location: 'Durango, Colorado',
    description:
      'The Gold Medal section between Lightner Creek (flowing into the Animas on the West side of Durango) and the Rivera Crossing Bridge holds plenty of rainbow and brown trout between 14-18 inches.Regulations require fishing with artificial flies or lures only.',
    image: Animas,
    coordinates: '37.2751° N, 107.8801° W',
  },
  {
    id: 1,
    name: 'Arkansas',
    description:
      'In 2014, after 20 years of cleaning up mining pollution in the river, Colorado Parks and Wildlife designated a 102 miles of the Arkansas as the longest Gold Medal fishery in Colorado. Gold Medal waters stretch between the Lake Fork confluence near Leadville and the U.S. 50 bridge crossing just above the Royal Gorge at Parkdale, with many public access points available from US Hwy 24 and US Hwy 50. Additional Gold Medal designations from the U.S. 24 overpass downstream to the lower boundary of the Hayden Ranch, as posted, and from the stockyard bridge (Chaffee CR 102) below Salida downstream 7.5 miles to the confluence with Badger Creek. Some sections are fly and lure only or strictly catch and release.',
    location: 'Leadville',
    image: Arkansas,
    coordinates: '37.2751° N, 107.8801° W',
  },
  {
    id: 2,
    name: 'Blue',
    description:
      'While 19 miles of the Blue above Green Mountain Reservoir lost its Gold Medal status in 2016, a short (2+ miles), easily accessed Gold Medal fishery remains in the heavily developed stretch between the Dillon Reservoir dam (reached via the Silverthorne Outlet Stores) and the Hamilton Creek Road bridge. A longer segment starting just below the Green Mountain Reservoir dam and stretching to the confluence with the Colorado River near Kremmling offers a more remote fishing experience, however access is limited and much more difficult, whether by foot or float. A steep dirt bank off County Road 1812 (take Heeney Road west off US Hwy. 9) serves as the launch point for both, requiring a belay rope for most rafts. The BLM takeout off the Trough Road just above the Colorado River confluence is similarly challenging.',
    location: 'Dillon Reservoir',
    image: Blue,
    coordinates: '37.2751° N, 107.8801° W',
  },
];

export default waterData;
