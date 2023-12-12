import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MainContainer = ({children}) => {
    return(
        <div
        className={`flex flex-wrap flex-col items-center justify-between min-h-screen px-24 ${inter}`}
        >
            {children}
        </div>
    )
}

export default MainContainer