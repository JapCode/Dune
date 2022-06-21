function DocsCards(prop) {
  const { img, name, title, house, faction } = prop;
  const imgCard = img === 'undefined' ? 'https://i.imgur.com/EbZh78S.jpg' : img;
  return (
    <div className="docsCard">
      <img className="docsCard__img" src={imgCard} alt="" />
      <div className="docsCard__details">
        <h3 className="docsCard__title">{name}</h3>
        <p className="docsCard__element">{title}</p>
        <p className="docsCard__element">{house}</p>
        <p className="docsCard__element">{faction}</p>
      </div>
    </div>
  );
}
export default DocsCards;
