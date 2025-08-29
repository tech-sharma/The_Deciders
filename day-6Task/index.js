import React from 'react';

const ProfileCard = ({ name, title, image, description }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      width: '300px',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img src={image} alt={name} style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
      <h2>{name}</h2>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f4f4f4'
    }}>
      <ProfileCard
        name="Kanak Sharma "
        title="Full Stack Developer"
        image="https://via.placeholder.com/150"
        description="Passionate about building scalable web applications and learning new technologies."
      />
    </div>
  );
}

export default App;