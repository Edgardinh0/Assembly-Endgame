import { languages } from './languages'
import '../styles/LanguageList.css'
import clsx from 'clsx'

export default function LanguageList(props) {

    return (
        <div className='language-container'>
            {languages.map((lang, index) => {
                const dead = props.wrongGuessCount > index
                
                const className = clsx("language", dead && 'lost')

                return <div className={className} 
                            style={{backgroundColor: lang.backgroundColor, color: lang.color}}
                            key={lang.name}
                        >
                            {lang.name}
                        </div>
                    }
                )
            }
        </div>
    )
}