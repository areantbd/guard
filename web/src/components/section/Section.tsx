import { ReactNode } from "react"

interface Sect{
className: string,
title: string,
icon: string,
children: ReactNode
}


function Section({ className, title, icon, children }: Sect) {
  return (
    <section className={className}>
      <h1 className='m-0 fs-3 fw-light'>
        {icon && <i className={`fa fa-${icon} me-1`} />}
        {title}
      </h1>
      <hr className='mt-0'/>
      {children}
    </section>
  )
}

Section.defaultProps = {
  className: '',
  icon: undefined
}

export default Section