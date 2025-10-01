import { useState, useEffect } from "react"

export default function TarefasSimples() {

    const [listaDeTarefas, setListaDeTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState("")
    //leitura das tarefas do localstoragen
    useEffect(() => {
        const tarefasSalvas = localStorage.getItem("tarefasSimples")
        if (tarefasSalvas) {
            setListaDeTarefas(JSON.parse(tarefasSalvas))
        }
      }, []  )

    //persistir os dados localmente 

    useEffect(() => {

        if (listaDeTarefas.length > 0) {
            // como ListaDetarefas é um array em 35, o JSON.stringify
            // é usado para coverter em formato texto (json)
            localStorage.setItem("tarefasSimples", JSON.stringify(listaDeTarefas))
        }
    }, [listaDeTarefas])







    function adicionarTarefa() {
        if (novaTarefa.trim() == "") {
            return
        }

        // se foi digitado um texto valido
        // cria um novo array com as tarefas + a nova tarefa
        setListaDeTarefas([...listaDeTarefas, novaTarefa])
        setNovaTarefa("")   // limpar o campo de digitação        
    }

    function removerTarefas(index) {
        // cria uma nova lista sem a tarefa que está no index recebido
        const listaAtualizada = listaDeTarefas.filter((tarefa, i) => {
            // mantem todas a tarefas cujo indice é diferente do index
            return i != index
        })

        // atualiza o estado com a nova lista


        setListaDeTarefas(listaAtualizada)
    }
    // Aqui regra de negócio

    function ordenarTarefas() {
        const listaOrdenada = [...listaDeTarefas].sort((a, b) => a.localeCompare(b))
        setListaDeTarefas(listaOrdenada)

    }

    return (
        <div className="container mt-5" style={{ maxwidth: "500px" }}>

            <h1 className="text-center mb-4">Tarefas Simples</h1>

            <div className="input-group mb-3">
                <input

                    type="text"
                    className="form-control"
                    placeholder="Digite a nova tarefa"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                />

                <button className="btn btn-primary" onClick={adicionarTarefa}>
                    adicionar

                </button>
                <button className="btn btn-warning btn-sm" onClick={ordenarTarefas}>
                    Ordenar tarefa

                </button>
            </div>

            <ul className="list-group">
                {listaDeTarefas.length == 0 && (
                    <li className="list-group-item text-center text-muted">
                        nenhuma tarefa adicionada
                    </li>
                )}

                {listaDeTarefas.map((tarefa, posicaoNoIndex) => (
                    <li
                        key={posicaoNoIndex}
                        className="list-group-item d-flex justify-content-between"
                    >
                        {tarefa}
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => removerTarefas(posicaoNoIndex)}

                        >Remover</button>


                    </li>

                ))}

                {/* <li class="list-group-item"> An Item</li> */}
            </ul>
        </div>
    )
}
