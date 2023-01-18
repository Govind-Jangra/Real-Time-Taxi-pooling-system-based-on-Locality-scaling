import PlacesCards from './PlacesCard'
const places = [
 {id:1, name: 'zoo', location: 'Peepli', image: './placesimage/zoo.jpg'},
 {id:2, name: 'Bus ', location: 'Bus Stand', image: './placesimage/busstand.jpg'},
 {id:3, name: 'kesal', location: 'Kesal', image: './placesimage/kesal.jpg'},
 {id:4, name: 'Station', location: 'Station', image: './placesimage/station.jpg'}
 ]

function App() {
  return (
    <div>
      <PlacesCards places={places} />
    </div>
  );
}
export default App;
