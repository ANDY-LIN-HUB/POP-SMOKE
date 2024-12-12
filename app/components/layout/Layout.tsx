import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'
import ISeo from './meta/meta.interface'
import Meta from './meta/Meta'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...res }) => {
    return (
        <>
            <Meta {...res} />
            <div className={styles.layout}>
                <main>
                    <Header />
                    <section className={styles.content}>{children}</section>
                </main>
            </div>
        </>
    )
}

export default Layout