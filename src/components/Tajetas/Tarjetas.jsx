const Tarjetas = ({ products }) => {
    return (
      <Link to ={`${products.id}`}
        >
        <div>
        </div>
          <div className={styles.container}>
              <div className={styles.tarj}>
              <h4 className={styles.titulo}>{products.title}</h4>
              <h2 className={styles.price}> Precio ${products.price} </h2>
              </div>
          </div> 
       </Link>
    )
  
    }
  
  export default Tarjetas