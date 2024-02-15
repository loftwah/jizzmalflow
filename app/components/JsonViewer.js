import React from 'react';

const styles = {
  string: { color: '#9EFFFF' },
  number: { color: '#FF628C' },
  boolean: { color: '#FFD700' },
  null: { color: '#D3D3D3' },
  key: { color: '#C792EA' },
  link: { color: '#FFCB6B', textDecoration: 'underline' },
  image: { maxWidth: '100px', maxHeight: '100px', cursor: 'pointer', border: '1px solid #C792EA' },
};

const JsonViewer = ({ jsonData }) => {
  const formatValue = (key, value) => {
    if (key.endsWith('_url') || key.endsWith('_url_new')) {
      return <a href={value} target={key.endsWith('_url_new') ? '_blank' : '_self'} rel="noopener noreferrer" style={styles.link}>{value}</a>;
    } else if (key.endsWith('_image')) {
      return <img src={value} alt="" style={styles.image} onClick={() => window.open(value, '_blank')} />;
    } else if (key.endsWith('_mailto')) {
      return <a href={`mailto:${value}`} style={styles.link}>{value}</a>;
    } else if (typeof value === 'string') {
      return <span style={styles.string}>{value}</span>;
    } else if (typeof value === 'number') {
      return <span style={styles.number}>{value}</span>;
    } else if (typeof value === 'boolean') {
      return <span style={styles.boolean}>{value.toString()}</span>;
    } else if (value === null) {
      return <span style={styles.null}>null</span>;
    }
    return value; // Handle other types without specific formatting
  };

  const renderData = (data) => {
    if (typeof data !== 'object' || data === null) {
      // Directly return non-object data
      return formatValue('', data);
    }

    return Object.entries(data).map(([key, value], index) => {
      return (
        <div key={index} style={{ marginLeft: '20px' }}>
          <strong style={styles.key}>{key}:</strong> 
          {typeof value === 'object' ? renderData(value) : formatValue(key, value)}
        </div>
      );
    });
  };

  return (
    <div style={{ fontFamily: 'Fira Code', whiteSpace: 'pre-wrap' }}>
      {jsonData ? renderData(jsonData) : 'No JSON data'}
    </div>
  );
};

export default JsonViewer;
