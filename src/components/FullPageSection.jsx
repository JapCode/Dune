function FullPageSection(prop) {
  const { title, paragraphs, page } = prop;
  return (
    <div className="fullPage">
      <div className={`${page}__img`} />
      {/* <div className="background--gradient" /> */}
      <article className="fullPage__section">
        <h1 className="title">{title}</h1>
        <section className={`${page}__description`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </article>
    </div>
  );
}
export default FullPageSection;
