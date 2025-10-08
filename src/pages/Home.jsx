import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>MY AWESOME UI</h1>
        <p>나만의 멋진 UI 컬렉션</p>
      </header>
      
      <main className="home-main">
        <div className="navigation-cards">
          <Link to="/gallery" className="nav-card gallery-card">
            <div className="card-icon">🖼️</div>
            <h2>Gallery</h2>
            <p>이미지 갤러리를 확인해보세요</p>
            <span className="card-arrow">→</span>
          </Link>
          
          <Link to="/shelf" className="nav-card shelf-card">
            <div className="card-icon">📚</div>
            <h2>Anime Shelf</h2>
            <p>애니메이션 목록을 둘러보세요</p>
            <span className="card-arrow">→</span>
          </Link>
        </div>
      </main>
    </div>
  );
}