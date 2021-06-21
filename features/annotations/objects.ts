const profile = {
    name: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age, name }: { age: number; name:string } = profile // const age = profile.age
const { coords: { lat, lng}}: { coords: { lat: number; lng: number} } = profile // const lat, lng = profile.coords.lat/lng
