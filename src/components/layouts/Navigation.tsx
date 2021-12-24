import Link from "next/link"
import { ROUTES } from "../../constants";

interface ROUTE {
  ID: number,
  PATH: string,
  LABEL: string,
  SUBS?: Array<ROUTE>
}

export const Navigation = () => {
  return (
    <header>
      <h1>Wine and Beers</h1>
      <nav>
        <ul>
          {
            ROUTES.map((routeObject: ROUTE) => {
              return (
                <li key={`main-menu-${routeObject.ID}`}>
                  <Link href={routeObject.PATH}>
                    <a>{routeObject.LABEL}</a>
                  </Link>
                  <ul>
                    {routeObject.SUBS && routeObject.SUBS.map((subRouteObject: ROUTE) => {
                      return (
                        <li key={`sub-menu-${subRouteObject.ID}`}>
                          <Link href={`${routeObject.PATH}${subRouteObject.PATH}`}>
                            <a>{subRouteObject.LABEL}</a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}