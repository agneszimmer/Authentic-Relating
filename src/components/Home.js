import bild from '../pictures/EcstaticDance.png';

const Home = ({ header, img }) => {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Authentic Revolution</h1>
        <h3 style={{ textAlign: 'center' }}>Die Kunst in Beziehung zu gehen</h3>
        <p>Authentische Begegnung auf Herzebene, eingebettet in einen spielerischen Rahmen, um einen Schutzraum sowie die Möglichkeit zu geben, in der 
          Leichtigkeit des Spiels zu erforschen, wer und wie du bist, was du fühlst, was du dir wünschst, wie du andere siehst und von anderen gesehen wirst. </p>
        <img src={bild} alt='circling' width='100%' />
      </div>
    );
  };
  
  export default Home;