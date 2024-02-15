import JsonViewer from './components/JsonViewer';

export default function Home() {
    const sampleJson = {
        name: "Dean 'The Legend' Lofts",
        age: 38,
        city: "Sunbury, The City of Unsung Heroes",
        profession: "Digital Wizard & Part-Time Astronaut",
        hobbies: ["Conquering uncharted APIs", "Brewing magical potions with React", "Teaching dolphins to code"],
        superpower: "Can debug code by merely glaring at it",
        archNemesis: "The Infamous 404 Monster",
        pet: {
            name: "Pippa, the Barkode Scanner",
            species: "Labrador-Staffy Mix",
            superpower: "Telepathically translates dog barks into JavaScript"
        },
        motto: "In code we trust, for bugs we bust. With each commit, we thrust forward."
    };
  
    return (
      <div>
        <h1>Meet Dean</h1>
        <JsonViewer jsonData={sampleJson} />
      </div>
    );
}
