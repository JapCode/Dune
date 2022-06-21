function DocsSchema() {
  return (
    <div className="docsSchema">
      <ul className="docsSchema__key">
        <li className="docsSchema__key--title">Key</li>
        <li>Id</li>
        <li>Name</li>
        <li>Title</li>
        <li>Faction</li>
        <li>House</li>
        <li>Species</li>
        <li>Planet</li>
        <li>Status</li>
        <li>image</li>
      </ul>
      <ul className="docsSchema__type">
        <li className="docsSchema__type--title">Type</li>
        <li>int</li>
        <li>string</li>
        <li>string</li>
        <li>string</li>
        <li>string</li>
        <li>string</li>
        <li>string</li>
        <li>string</li>
        <li>
          string
          <br />
          (Url)
        </li>
      </ul>
      <ul className="docsSchema__description">
        <li className="docsSchema__description--title">Description</li>
        <li>The id of the character.</li>
        <li>The name of the character.</li>
        <li>The title of the character.</li>
        <li>The faction of the character.</li>
        <li>The house of the character.</li>
        <li>The species of the character.</li>
        <li>The origin planet of the character.</li>
        <li>The status of the character ('Alive', 'Dead' or 'unknown').</li>
        <li>
          Link to the character's image. All images are 300x300px and most are
          medium shots or portraits since they are intended to be used as
          avatars.
        </li>
      </ul>
    </div>
  );
}
export default DocsSchema;
