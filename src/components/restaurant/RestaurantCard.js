// Импортируем стили для RestaurantCard
import './RestaurantCard.scss';

// Компонент RestaurantCard - карточка ресторана
// Показывает информацию об одном ресторане

// Пока что используем props для передачи данных
// Позже данные будут приходить из API
function RestaurantCard({ restaurant }) {
  // restaurant - это объект с данными о ресторане
  // Пока что используем данные по умолчанию, если не передали
  
  // Если restaurant не передан, используем данные по умолчанию
  const restaurantData = restaurant || {
    id: 1,
    name: 'Итальянский ресторан',
    cuisine: 'Итальянская',
    rating: 4.5,
    workingHours: '10:00 - 22:00',
    image: '🍝'
  };

  return (
    // div с классом restaurant-card - карточка ресторана
    <div className="restaurant-card">
      {/* Изображение/иконка ресторана */}
      <div className="restaurant-card__image">
        {restaurantData.image}
      </div>

      {/* Информация о ресторане */}
      <div className="restaurant-card__info">
        {/* Название ресторана */}
        <h3 className="restaurant-card__name">{restaurantData.name}</h3>
        
        {/* Тип кухни */}
        <p className="restaurant-card__cuisine">{restaurantData.cuisine}</p>
        
        {/* Рейтинг и время работы в одной строке */}
        <div className="restaurant-card__details">
          <span className="restaurant-card__rating">⭐ {restaurantData.rating}</span>
          <span className="restaurant-card__hours">{restaurantData.workingHours}</span>
        </div>
      </div>

      {/* Кнопка "Открыть меню" */}
      <button className="restaurant-card__button">
        Открыть меню
      </button>
    </div>
  );
}

// Экспортируем компонент
export default RestaurantCard;

