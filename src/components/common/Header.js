// Импортируем SCSS стили для Header
import './Header.scss';

// Создаем компонент Header (шапка сайта)
function Header() {
  // Пока что просто статичная шапка
  // Позже добавим состояние для корзины и авторизации
  
  return (
    // header - семантический HTML тег для шапки
    // className="header" - используем класс из CSS файла
    <header className="header">
      {/* Логотип/название приложения */}
      <div className="header-logo">
        <h1>Еда со скидкой</h1>
      </div>
      
      {/* Навигация (пока заглушка) */}
      <nav className="header-nav">
        <span>Рестораны</span>
        <span>Корзина (0)</span>
        <span>Войти</span>
      </nav>
    </header>
  );
}

// Экспортируем компонент, чтобы использовать в других местах
export default Header;

