function MemoryCard({ pictures, handleClick }) {
  return (
    <div className="d-inline-flex flex-wrap">
      {pictures.map((picture) => (
        <div
          className="card m-2 border-0 hoverThis thisCard"
          key={picture.name}
          onClick={() => {
            handleClick(picture.name);
          }}
        >
          <img src={picture.url} className="p-1 rounded" />
          <div className="card-title text-center">
            <strong>{picture.name}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MemoryCard;
