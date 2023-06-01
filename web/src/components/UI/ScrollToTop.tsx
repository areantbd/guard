import {useWindowScroll} from "@uidotdev/usehooks"



function ScrollToTop(): JSX.Element {
  const [{x, y}, scrollTo] = useWindowScroll()
  if (y >= 200) { 
    return (
      <div className="fixed-bottom d-flex">
        <button className="btn btn-lg ms-auto me-3" onClick={() => scrollTo({left:0, top:0, behavior: 'smooth'})}>
          <h1>
            <i className="fa fa-arrow-circle-o-up fa-xl"  aria-hidden="true" ></i>
          </h1>
          <span className="visually-hidden">{x}{y}</span>
        </button>
      </div>
    )
  } return (<></>)
}

export default ScrollToTop