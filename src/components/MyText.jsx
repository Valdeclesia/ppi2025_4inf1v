import styles from './MyText.module.css';

export function MyText() {
    return (
     <div className={styles.container}>
        <div className={styles.div}>
          <h1 className={styles.title}>Meu primeiro React App</h1>
         <p className={styles.Text}>
            Tu sais c'qu'on dit
            Sois près d'tes amis les plus chers
            Mais aussi
            Encore plus près d'tes adversaires
            Mais ma meilleure ennemie c'est toi
            Fuis-moi, le pire c'est toi et moi
            Mais si tu cherches encore ma voix
            Oublie-moi, le pire c'est toi et moi
         </p>
        </div>
        </div>
    )
}