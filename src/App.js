import './App.css';
import Header from './BaiTapThayKinh/Header';
import ThayKinh from './BaiTapThayKinh/ThayKinh';

function App() {
  return (
    <div className ="App" style = {{backgroundImage : `url(./glassesImage/background.jpg)`}}>
      <Header></Header>
      <ThayKinh></ThayKinh>
    </div>
    
  );
}

export default App;
