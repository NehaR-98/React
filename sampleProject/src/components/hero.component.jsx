

const Demo=()=>
{
    return this.state.data.map( hero => <div className="box" key={ hero.id }>
    <h1>{hero.name}</h1>
    <h2>{hero['full-name']}</h2>
    <img width="150" src={hero.url} alt={hero.name} />
    <h2>{hero.power}</h2>
    </div>)
}

export default Demo;