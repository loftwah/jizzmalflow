import JsonViewer from '../components/JsonViewer';

export default function Home() {
    const sampleJson = { name: "John Doe", age: 30, city: "New York" };
  
    return (
      <div>
        <JsonViewer jsonData={sampleJson} />
      </div>
    );
  }
  