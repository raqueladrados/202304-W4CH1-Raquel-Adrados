import { gentlemen } from "./gentleman.mock";

export function CardGentleman(){
  return(
    <>
        {gentlemen.map((item) =>(
            <li className="gentleman"> 
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src={item.picture}
                alt={item.alternativeText}
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container"></div>
              <h2 className="gentleman__name">{item.name}</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession: {item.profession}</span>
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status: {item.status}</span>
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:{item.twitter}</span>
            </li>
        ))}
    </>
  )
}
